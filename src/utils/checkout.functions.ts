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
      success_url: `${origin}/account?status=success`,
      cancel_url: `${origin}/pricing?status=cancel`,
    });

    return { url: session.url };
  });
