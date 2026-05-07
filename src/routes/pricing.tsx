import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { createCheckout } from "@/server/checkout.functions";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — tutorword IGCSE" },
      { name: "description", content: "Free forever for limited quizzes. Go Pro for the full IGCSE library, every subject and topic." },
    ],
  }),
  component: PricingPage,
});

const FREE = [
  "3 free quizzes per subject",
  "Sample topic notes",
  "Basic progress tracking",
  "Access on any device",
];

const PRO = [
  "Unlimited quizzes, all subjects",
  "Full topic notes & summaries",
  "Exam-grade question banks",
  "Detailed mastery analytics",
  "New content every month",
  "Priority email support",
];

function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function upgrade() {
    setLoading(true);
    setErr(null);
    try {
      const res = await createCheckout({ data: { plan: billing } });
      if (res?.url) window.location.href = res.url;
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Checkout failed");
    } finally {
      setLoading(false);
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
          <div className="mt-8 inline-flex items-center rounded-full bg-cream/10 p-1 text-sm ring-1 ring-cream/15">
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`rounded-full px-5 py-2 font-semibold transition ${billing === b ? "bg-emerald-grad text-primary-foreground" : "text-cream/70"}`}
              >
                {b === "monthly" ? "Monthly" : "Yearly · save 20%"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Free</p>
            <p className="mt-3 font-display text-5xl font-bold">£0</p>
            <p className="mt-1 text-sm text-muted-foreground">Forever. No card needed.</p>
            <Button asChild variant="outline" className="mt-6 w-full">
              <Link to="/quizzes">Start free</Link>
            </Button>
            <ul className="mt-8 space-y-3 text-sm">
              {FREE.map((f) => (
                <li key={f} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4 text-primary" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-emerald-grad p-8 text-primary-foreground shadow-glow">
            <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-card/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Most popular
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Pro</p>
            <p className="mt-3 font-display text-5xl font-bold">
              {billing === "monthly" ? "£12" : "£115"}
              <span className="text-base font-normal opacity-80">/{billing === "monthly" ? "mo" : "yr"}</span>
            </p>
            <p className="mt-1 text-sm opacity-80">
              {billing === "yearly" ? "Equivalent to £9.6/mo · 2 months free" : "Cancel anytime"}
            </p>
            <Button onClick={upgrade} disabled={loading} className="mt-6 w-full bg-card text-foreground hover:bg-card/90">
              {loading ? "Redirecting…" : "Upgrade to Pro"}
            </Button>
            {err && <p className="mt-3 text-xs opacity-90">{err}</p>}
            <ul className="mt-8 space-y-3 text-sm">
              {PRO.map((f) => (
                <li key={f} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4" /> {f}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Secure checkout powered by Stripe. Add <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_SECRET_KEY</code>, <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_PRICE_MONTHLY</code> and <code className="rounded bg-muted px-1.5 py-0.5">STRIPE_PRICE_YEARLY</code> to your environment.
        </p>
      </section>
      <Footer />
    </div>
  );
}
