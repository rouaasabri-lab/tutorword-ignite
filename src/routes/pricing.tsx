import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";
import { createCheckout } from "@/utils/checkout.functions";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Algebrix IGCSE" },
      { name: "description", content: "Free forever for limited quizzes. Go Pro for the full IGCSE library, every subject and topic." },
    ],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "Forever",
    badge: null,
    cta: { label: "Start free", to: "/quizzes" as const, variant: "outline" as const },
    items: [
      "Mode 1 only (Individual Topic)",
      "2 subjects max",
      "5 questions per session",
      "Basic score at end",
      "No card needed, no time limit",
    ],
    purpose: "Get students addicted to the practice loop",
    highlighted: false,
  },
  {
    name: "Pro Monthly",
    price: "$25",
    period: "/mo",
    badge: null,
    plan: "monthly" as const,
    cta: { label: "Go Pro Monthly", variant: "default" as const },
    items: [
      "All 4 modes unlocked",
      "All IGCSE subjects",
      "Unlimited questions",
      "Instant feedback + explanations",
      "Full session analytics",
      "Cancel anytime",
    ],
    purpose: "Capture year-round students and parents who want flexibility",
    highlighted: false,
  },
  {
    name: "Pro Annual",
    price: "$199",
    period: "/yr",
    badge: "Best value",
    plan: "yearly" as const,
    cta: { label: "Go Pro Annual", variant: "default" as const },
    items: [
      "Everything in Pro Monthly",
      "Saves $101 vs monthly ($300/yr)",
      "Works out to $16.58/mo",
      "33% saving",
    ],
    purpose: "Lock in serious students, reduce churn, better revenue predictability",
    highlighted: true,
  },
  {
    name: "Exam Bundle",
    price: "$39",
    period: " one-time",
    badge: null,
    plan: "bundle" as const,
    cta: { label: "Get Exam Bundle", variant: "default" as const },
    items: [
      "3 months full Pro access",
      "No subscription, no auto-renew",
      "Targeted at May/June and Oct/Nov exam windows",
      "Countdown timer tied to real IGCSE exam dates",
    ],
    purpose: "Capture students who only prep before exams, and parents who resist subscriptions",
    highlighted: false,
  },
];

function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function upgrade(plan: "monthly" | "yearly" | "bundle") {
    setLoadingPlan(plan);
    setErr(null);
    try {
      const res = await createCheckout({ data: { plan } });
      if (res?.url) window.location.href = res.url;
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Checkout failed");
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Simple plans. <span className="text-primary">Serious results.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-cream/75">
            Start free, upgrade when you want the full IGCSE library.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-soft transition hover:-translate-y-0.5 ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-glow"
                  : "border-border bg-card"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-emerald-grad px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                  <Zap className="h-3.5 w-3.5" /> {tier.badge}
                </div>
              )}

              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {tier.name}
              </p>
              <p className="mt-3 font-display text-4xl font-bold">
                {tier.price}
                <span className="text-base font-normal text-muted-foreground">
                  {tier.period}
                </span>
              </p>

              {tier.cta.to ? (
                <Button asChild variant={tier.cta.variant} className="mt-5 w-full">
                  <Link to={tier.cta.to}>{tier.cta.label}</Link>
                </Button>
              ) : (
                <Button
                  onClick={() => tier.plan && upgrade(tier.plan)}
                  disabled={!!loadingPlan}
                  variant={tier.cta.variant}
                  className="mt-5 w-full"
                >
                  {loadingPlan === tier.plan ? "Redirecting…" : tier.cta.label}
                </Button>
              )}

              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlighted ? "text-primary" : "text-primary/70"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs italic text-muted-foreground/80">
                {tier.purpose}
              </p>
            </div>
          ))}
        </div>

        {err && (
          <p className="mt-8 text-center text-sm text-destructive">{err}</p>
        )}

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Secure checkout powered by Stripe. Add{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_SECRET_KEY</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_PRICE_MONTHLY</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_PRICE_YEARLY</code>, and{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_PRICE_BUNDLE</code>{" "}
          to your environment.
        </p>
      </section>
      <Footer />
    </div>
  );
}
