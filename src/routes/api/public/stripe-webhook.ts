import { createFileRoute } from "@tanstack/react-router";
import Stripe from "stripe";
import { wcPost, wpEnsureStudentUser } from "@/server/woocommerce.server";

export const Route = createFileRoute("/api/public/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const sig = request.headers.get("stripe-signature");
        const secret = process.env.STRIPE_SECRET_KEY;
        const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!secret || !whSecret) {
          return new Response("Stripe not configured", { status: 500 });
        }
        if (!sig) return new Response("Missing signature", { status: 401 });

        const stripe = new Stripe(secret);
        const raw = await request.text();

        let event: Stripe.Event;
        try {
          event = await stripe.webhooks.constructEventAsync(raw, sig, whSecret);
        } catch (err) {
          console.error("Stripe signature failed", err);
          return new Response("Invalid signature", { status: 401 });
        }

        try {
          if (event.type === "checkout.session.completed") {
            const s = event.data.object as Stripe.Checkout.Session;
            await registerWcOrder(stripe, s);
          }
        } catch (err) {
          console.error("WC order creation failed", err);
          // Acknowledge to Stripe to avoid retries spam; check server logs.
          return new Response("Logged error", { status: 200 });
        }

        return new Response("ok", { status: 200 });
      },
    },
  },
});

async function registerWcOrder(stripe: Stripe, session: Stripe.Checkout.Session) {
  if (!process.env.WC_API_URL) return;

  const plan = (session.metadata?.plan ?? "monthly") as "monthly" | "yearly";
  const productIdRaw =
    plan === "monthly" ? process.env.WC_PRODUCT_MONTHLY : process.env.WC_PRODUCT_YEARLY;
  const productId = productIdRaw ? Number(productIdRaw) : undefined;

  const customerEmail =
    session.customer_details?.email || session.customer_email || undefined;
  const customerName = session.customer_details?.name || "";
  const [firstName, ...rest] = customerName.split(" ");
  const lastName = rest.join(" ");

  // Ensure a WP user exists with role "student" (idempotent — won't duplicate).
  let wpUserId: number | null = null;
  if (customerEmail) {
    try {
      wpUserId = await wpEnsureStudentUser({
        email: customerEmail,
        firstName,
        lastName,
      });
    } catch (err) {
      console.error("Could not create/find WP student user", err);
    }
  }

  const totalPaid =
    typeof session.amount_total === "number" ? (session.amount_total / 100).toFixed(2) : "0.00";
  const currency = (session.currency || "usd").toUpperCase();

  const line = productId
    ? { product_id: productId, quantity: 1 }
    : {
        name: `Algebrix Pro — ${plan}`,
        quantity: 1,
        total: totalPaid,
      };

  await wcPost("/orders", {
    payment_method: "stripe",
    payment_method_title: "Stripe (Checkout)",
    set_paid: true,
    status: "completed",
    currency,
    ...(wpUserId ? { customer_id: wpUserId } : {}),
    billing: {
      first_name: firstName || "Customer",
      last_name: lastName || "",
      email: customerEmail || "no-reply@algebrix.local",
    },
    line_items: [line],
    transaction_id: typeof session.subscription === "string" ? session.subscription : session.id,
    meta_data: [
      { key: "_algebrix_plan", value: plan },
      { key: "_stripe_session_id", value: session.id },
      {
        key: "_stripe_subscription_id",
        value: typeof session.subscription === "string" ? session.subscription : "",
      },
      {
        key: "_stripe_customer_id",
        value: typeof session.customer === "string" ? session.customer : "",
      },
    ],
  });
}