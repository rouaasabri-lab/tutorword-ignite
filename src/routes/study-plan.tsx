import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Shuffle, Timer, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/study-plan")({
  head: () => ({
    meta: [
      { title: "4-Phase Study Plan — Algebrix" },
      { name: "description", content: "A guided 4-phase IGCSE study plan: topic practice, mixed topics, time sprints, and full past papers under exam conditions." },
    ],
  }),
  component: StudyPlanPage,
});

const PHASES = [
  {
    n: 1,
    icon: BookOpen,
    title: "Practice per Topic",
    tagline: "Master one topic at a time",
    description:
      "Work through every IGCSE topic individually with focused quizzes and step-by-step explanations. Build deep understanding before moving on.",
    points: ["Topic-by-topic quizzes", "Instant grading & worked solutions", "Track mastery per subtopic"],
    cta: { label: "Browse topic quizzes", to: "/quizzes" as const },
    tone: "from-emerald-500/15 to-emerald-500/0",
  },
  {
    n: 2,
    icon: Shuffle,
    title: "Random Mixed Practice",
    tagline: "Train recall across all topics",
    description:
      "Quizzes auto-generated from the full syllabus, mixing topics randomly so you learn to switch contexts — exactly like the real exam.",
    points: ["Auto-generated question sets", "Cross-topic question mixing", "Adaptive difficulty"],
    cta: { label: "Start mixed quiz", to: "/quizzes" as const },
    tone: "from-amber-500/15 to-amber-500/0",
  },
  {
    n: 3,
    icon: Timer,
    title: "Time Sprints",
    tagline: "Build speed under pressure",
    description:
      "Short, timed bursts (5–15 min) that train you to answer accurately at exam pace. Live countdown, instant grading, and pace analytics.",
    points: ["5, 10, 15 min sprint modes", "Live countdown timer", "Speed & accuracy report"],
    cta: { label: "Try a sprint", to: "/quizzes" as const },
    tone: "from-sky-500/15 to-sky-500/0",
  },
  {
    n: 4,
    icon: FileText,
    title: "Full Past Papers",
    tagline: "Exam day, simulated",
    description:
      "Sit complete past papers under official time limits. Auto-marked with grade boundaries and a full mark-scheme breakdown after submission.",
    points: ["Real past papers", "Strict exam timing", "Grade boundary analysis"],
    cta: { label: "Unlock past papers", to: "/pricing" as const },
    tone: "from-rose-500/15 to-rose-500/0",
  },
];

function StudyPlanPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Algebrix Method</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Four phases. <span className="text-primary">One A*.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/75">
            A structured study path built by tutors — from topic mastery to full exam simulation. Follow it phase by phase, or jump straight to the one you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <ol className="relative space-y-8">
          {PHASES.map((p) => {
            const Icon = p.icon;
            return (
              <li
                key={p.n}
                className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${p.tone} bg-card p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow md:p-10`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex shrink-0 items-center gap-4 md:flex-col md:gap-3">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-foreground/30 md:text-5xl">
                      0{p.n}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Phase {p.n} · {p.tagline}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{p.title}</h2>
                    <p className="mt-3 max-w-2xl text-muted-foreground">{p.description}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <Button asChild size="sm" className="mt-6 rounded-full bg-foreground text-background hover:bg-foreground/90">
                      <Link to={p.cta.to}>
                        {p.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-14 rounded-3xl bg-ink p-10 text-center text-cream">
          <h3 className="font-display text-2xl font-bold md:text-3xl">Ready to start Phase 1?</h3>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Pick a subject and begin with topic-by-topic mastery. One free quiz per subject, no card needed.
          </p>
          <Button asChild className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/subjects">Choose your subject</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
