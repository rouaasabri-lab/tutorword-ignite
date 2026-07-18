import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EDEXCEL_QUIZZES } from "@/lib/edexcel-quizzes";
import { Lock, Timer, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/quizzes")({
  head: () => ({
    meta: [
      { title: "Edexcel Quizzes — Algebrix" },
      { name: "description", content: "IGCSE and A Level Edexcel practice quizzes by topic. Real past-paper style questions with worked answers." },
    ],
  }),
  component: QuizzesPage,
});

const LEVELS = ["IGCSE", "A Level"] as const;

function QuizzesPage() {
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("IGCSE");

  const grouped = useMemo(() => {
    const byTopic = new Map<string, typeof EDEXCEL_QUIZZES>();
    for (const q of EDEXCEL_QUIZZES) {
      if (q.level !== level) continue;
      const arr = byTopic.get(q.topic) ?? [];
      arr.push(q);
      byTopic.set(q.topic, arr);
    }
    return Array.from(byTopic.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [level]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Practice the way you'll <span className="text-primary">be tested.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/75">
            Real Edexcel past-paper style questions with full mark schemes. Choose a topic, work it out, then self-mark.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-cream/15 bg-cream/5 p-1">
            {LEVELS.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  level === l ? "bg-primary text-primary-foreground shadow" : "text-cream/75 hover:text-cream"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {grouped.map(([topic, quizzes]) => (
          <div key={topic} className="mb-14">
            <div className="mb-5 flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold md:text-3xl">{topic}</h2>
              <span className="text-sm text-muted-foreground">{quizzes.length} set{quizzes.length === 1 ? "" : "s"}</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((q) => (
                <article
                  key={q.slug}
                  className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                      {q.level}
                    </span>
                    {q.premium ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground">
                        <Lock className="h-3 w-3" /> Pro
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs text-primary-foreground">
                        <GraduationCap className="h-3 w-3" /> Free
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{q.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Edexcel {q.level} {q.topic.toLowerCase()} — worked past-paper style questions with mark schemes.
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Timer className="h-3.5 w-3.5" /> {q.questions.length} Qs</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>~{q.durationMin} min</span>
                  </div>
                  {q.premium ? (
                    <Button asChild size="sm" className="mt-6 w-full bg-foreground text-background hover:bg-foreground/90">
                      <Link to="/pricing">Unlock with Pro</Link>
                    </Button>
                  ) : (
                    <Button asChild size="sm" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to="/quiz/$slug" params={{ slug: q.slug }}>Start quiz</Link>
                    </Button>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
