import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import Stripe from "stripe";
import { getRequestHost } from "@tanstack/react-start/server";

const PlanSchema = z.object({ plan: z.enum(["monthly", "yearly"]) });

export const createCheckout = createServerFn({ method: "POST" })
  .inputValidator((data) => PlanSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY not set. Add it to your environment.");
    const stripe = new Stripe(key);

    const priceId =
      data.plan === "monthly"
        ? process.env.STRIPE_PRICE_MONTHLY
        : process.env.STRIPE_PRICE_YEARLY;
    if (!priceId)
      throw new Error(`Missing STRIPE_PRICE_${data.plan.toUpperCase()} env var.`);

    const host = getRequestHost();
    const origin = `https://${host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/account?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing?status=cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      customer_creation: "always",
      subscription_data: {
        metadata: { plan: data.plan, source: "tutorworld" },
      },
      metadata: { plan: data.plan, source: "tutorworld" },
    });

    return { url: session.url };
  });
