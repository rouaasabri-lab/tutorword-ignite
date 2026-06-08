import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import Stripe from "stripe";
import { getRequestHost } from "@tanstack/react-start/server";

const PlanSchema = z.object({ plan: z.enum(["monthly", "yearly", "bundle"]) });

export const createCheckout = createServerFn({ method: "POST" })
  .inputValidator((data) => PlanSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY not set. Add it to your environment.");
    const stripe = new Stripe(key);

    const priceId =
      data.plan === "monthly"
        ? process.env.STRIPE_PRICE_MONTHLY
        : data.plan === "yearly"
        ? process.env.STRIPE_PRICE_YEARLY
        : process.env.STRIPE_PRICE_BUNDLE;
    if (!priceId)
      throw new Error(`Missing STRIPE_PRICE_${data.plan.toUpperCase()} env var.`);

    const host = getRequestHost();
    const origin = `https://${host}`;

    const isBundle = data.plan === "bundle";

    const session = await stripe.checkout.sessions.create({
      mode: isBundle ? "payment" : "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/account?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing?status=cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      customer_creation: "always",
      ...(isBundle
        ? {}
        : {
            subscription_data: {
              metadata: { plan: data.plan, source: "algebrix" },
            },
          }),
      metadata: { plan: data.plan, source: "algebrix" },
    });

    return { url: session.url };
  });
