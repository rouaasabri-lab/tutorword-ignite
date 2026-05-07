import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Trophy, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Underline } from "@/components/Underline";
import { SUBJECT_GROUPS } from "@/lib/subjects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tutorworld — Your Ultimate IGCSE Toolkit" },
      { name: "description", content: "Tutor-built IGCSE quizzes, notes and exam-grade question banks. Free tier available, full access with tutorworld Gold." },
    ],
  }),
  component: Index,
});

const STATS = [
  { k: "No.1", v: "IGCSE quiz platform built by exam tutors", icon: Trophy, tone: "gold" },
  { k: "85%", v: "of our students improve a full grade in 8 weeks", icon: Globe2, tone: "blue" },
  { k: "4.5×", v: "Gold members are 4.5× more likely to score A*", icon: TrendingUp, tone: "rose" },
  { k: "100%", v: "Risk-free 30-day money back guarantee", icon: ShieldCheck, tone: "green" },
];

const TONE: Record<string, string> = {
  gold: "bg-amber-500/15 text-amber-400 ring-amber-400/30",
  blue: "bg-sky-500/15 text-sky-300 ring-sky-400/30",
  rose: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
  green: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — dark ink panel like RV */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 text-center md:pt-28 md:pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Your Ultimate IGCSE Toolkit
            <br />
            Engineered to{" "}
            <span className="relative inline-block text-primary">
              Achieve A*s
              <Underline className="absolute -bottom-3 left-0 h-4 w-full text-primary" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-8 max-w-2xl text-base text-cream/75 md:text-lg"
          >
            No fluff. Just expertly designed quizzes, notes and past-paper resources built by IGCSE tutors —
            and trusted by thousands of Cambridge & Edexcel students worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full bg-emerald-grad px-7 text-primary-foreground shadow-glow hover:opacity-90">
              <Link to="/quizzes">Start practising free <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-cream/30 bg-transparent px-7 text-cream hover:bg-cream/10 hover:text-cream">
              <Link to="/pricing">Become a member</Link>
            </Button>
          </motion.div>

          {/* Stat cards */}
          <div className="mt-16 rounded-3xl glass-card p-2 md:p-3">
            <div className="grid gap-2 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.k} className="relative rounded-2xl bg-cream/[0.03] p-6 text-left ring-1 ring-cream/[0.06]">
                  <span className={`absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full ring-1 ${TONE[s.tone]}`}>
                    <s.icon className="h-4 w-4" />
                  </span>
                  <p className="font-display text-3xl font-extrabold text-cream md:text-4xl">{s.k}</p>
                  <p className="mt-3 max-w-[14rem] text-sm leading-snug text-cream/70">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subject group panels — RV-style big rounded blocks with sub-buttons */}
      <section className="mx-auto max-w-7xl px-6 py-20 space-y-6">
        {SUBJECT_GROUPS.map((g, gi) => (
          <motion.div
            key={g.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2rem] bg-emerald-grad p-8 text-primary-foreground shadow-soft md:p-12"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-card/15 text-lg backdrop-blur">
                {g.emoji}
              </span>
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">{g.name}</h2>
            </div>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">{g.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {g.subjects.map((s) => (
                <div key={s.name} className="rounded-2xl bg-cream/95 p-5 text-foreground shadow-soft">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{s.name}</h3>
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-soft text-primary">
                      {g.emoji}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {s.tiers.map((t) => (
                      <Link
                        key={t.slug}
                        to="/quizzes"
                        className="group flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary-soft"
                      >
                        {t.label}
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {gi === 0 && (
                <div className="hidden items-center justify-center lg:flex">
                  <div className="text-center">
                    <p className="font-hand text-3xl text-cream">Pick a subject</p>
                    <svg viewBox="0 0 120 60" className="mx-auto mt-2 h-12 w-24 text-cream/80" fill="none">
                      <path d="M10 10 C 40 50, 70 50, 100 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M100 30 l-8 -2 m8 2 l-2 -8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Why tutorworld */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why tutorworld</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
            Built by tutors. <span className="text-primary">Loved by students.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Exam-grade questions", d: "Every quiz mirrors real Cambridge & Edexcel question style and difficulty." },
              { t: "Topic-by-topic mastery", d: "Drill specific weak areas instead of grinding random past papers." },
              { t: "Track real progress", d: "See accuracy, time per question and topic mastery in one clean dashboard." },
            ].map((f) => (
              <div key={f.t} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-xl font-bold">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center text-cream shadow-glow md:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
            Start free. <span className="text-primary">Upgrade when you're ready.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/75">
            Try unlimited free quizzes today — unlock the full IGCSE library when you want exam-ready prep.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-emerald-grad px-7 text-primary-foreground hover:opacity-90">
              <Link to="/quizzes">Try free quizzes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-cream/30 bg-transparent px-7 text-cream hover:bg-cream/10 hover:text-cream">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
