import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EDEXCEL_QUIZZES } from "@/lib/edexcel-quizzes";
import { Lock, Timer, GraduationCap, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchSchema = z.object({
  level: fallback(z.string(), "IGCSE").default("IGCSE"),
  topic: fallback(z.string(), "").default(""),
  difficulty: fallback(z.string(), "").default(""),
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/quizzes")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Edexcel Quizzes — Algebrix" },
      { name: "description", content: "IGCSE and A Level Edexcel practice quizzes. Filter by topic and difficulty." },
    ],
  }),
  component: QuizzesPage,
});

const LEVELS = ["IGCSE", "A Level"] as const;
const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;

function QuizzesPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  const level = (LEVELS as readonly string[]).includes(search.level) ? search.level : "IGCSE";
  const difficulty = (DIFFICULTIES as readonly string[]).includes(search.difficulty) ? search.difficulty : "";
  const topic = search.topic;
  const q = search.q.toLowerCase();

  const setSearch = (patch: Partial<z.infer<typeof searchSchema>>) =>
    navigate({ to: ".", search: (prev) => ({ ...prev, ...patch }) });

  // All topics available for the active level (for the topic chip row)
  const topicsForLevel = useMemo(() => {
    const set = new Set<string>();
    for (const qz of EDEXCEL_QUIZZES) if (qz.level === level) set.add(qz.topic);
    return Array.from(set).sort();
  }, [level]);

  // Filter + group
  const grouped = useMemo(() => {
    const byTopic = new Map<string, typeof EDEXCEL_QUIZZES>();
    for (const qz of EDEXCEL_QUIZZES) {
      if (qz.level !== level) continue;
      if (topic && qz.topic !== topic) continue;
      if (difficulty && !qz.questions.some((qq) => qq.difficulty === difficulty)) continue;
      if (q && !(`${qz.title} ${qz.topic}`.toLowerCase().includes(q))) continue;
      const arr = byTopic.get(qz.topic) ?? [];
      arr.push(qz);
      byTopic.set(qz.topic, arr);
    }
    return Array.from(byTopic.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [level, topic, difficulty, q]);

  const totalResults = grouped.reduce((s, [, arr]) => s + arr.length, 0);
  const hasFilters = topic || difficulty || q;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Practice the way you'll <span className="text-primary">be tested.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/75">
            Real Edexcel past-paper style questions with full mark schemes. Filter by topic or difficulty.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-cream/15 bg-cream/5 p-1">
            {LEVELS.map((l) => (
              <button
                key={l}
                onClick={() => setSearch({ level: l, topic: "" })}
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

      {/* Filter bar */}
      <section className="sticky top-[64px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px] flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search.q}
                onChange={(e) => setSearch({ q: e.target.value })}
                placeholder="Search quizzes…"
                className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Difficulty</span>
              <button
                onClick={() => setSearch({ difficulty: "" })}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  !difficulty ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                All
              </button>
              {DIFFICULTIES.map((d) => (
                <button
                  key={d}
                  onClick={() => setSearch({ difficulty: difficulty === d ? "" : d })}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    difficulty === d ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {hasFilters ? (
              <button
                onClick={() => setSearch({ topic: "", difficulty: "", q: "" })}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:border-destructive/50 hover:text-destructive"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            ) : null}
          </div>

          {/* Topic chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              onClick={() => setSearch({ topic: "" })}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                !topic ? "border-foreground/70 bg-foreground text-background" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              All topics
            </button>
            {topicsForLevel.map((t) => (
              <button
                key={t}
                onClick={() => setSearch({ topic: topic === t ? "" : t })}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  topic === t ? "border-foreground/70 bg-foreground text-background" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-6 text-sm text-muted-foreground">
          {totalResults} quiz{totalResults === 1 ? "" : "zes"} match
          {difficulty && <> · difficulty <span className="text-foreground">{difficulty}</span></>}
          {topic && <> · topic <span className="text-foreground">{topic}</span></>}
        </p>

        {grouped.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-display text-lg font-semibold">No quizzes match those filters.</p>
            <p className="mt-1 text-sm text-muted-foreground">Try clearing difficulty or picking a different topic.</p>
            <Button className="mt-5" onClick={() => setSearch({ topic: "", difficulty: "", q: "" })}>
              Reset filters
            </Button>
          </div>
        ) : (
          grouped.map(([topicName, quizzes]) => (
            <div key={topicName} className="mb-14">
              <div className="mb-5 flex items-end justify-between">
                <h2 className="font-display text-2xl font-bold md:text-3xl">{topicName}</h2>
                <span className="text-sm text-muted-foreground">{quizzes.length} set{quizzes.length === 1 ? "" : "s"}</span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {quizzes.map((qz) => {
                  const counts = qz.questions.reduce(
                    (acc, qq) => ((acc[qq.difficulty] = (acc[qq.difficulty] ?? 0) + 1), acc),
                    {} as Record<string, number>,
                  );
                  return (
                    <article
                      key={qz.slug}
                      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                          {qz.level}
                        </span>
                        {qz.premium ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground">
                            <Lock className="h-3 w-3" /> Pro
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs text-primary-foreground">
                            <GraduationCap className="h-3 w-3" /> Free
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{qz.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                        {DIFFICULTIES.map((d) =>
                          counts[d] ? (
                            <span
                              key={d}
                              className={`rounded-full px-2 py-0.5 ${
                                d === "Easy" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : d === "Medium" ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                              }`}
                            >
                              {counts[d]} {d}
                            </span>
                          ) : null,
                        )}
                      </div>
                      <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><Timer className="h-3.5 w-3.5" /> {qz.questions.length} Qs</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span>~{qz.durationMin} min</span>
                      </div>
                      {qz.premium ? (
                        <Button asChild size="sm" className="mt-6 w-full bg-foreground text-background hover:bg-foreground/90">
                          <Link to="/pricing">Unlock with Pro</Link>
                        </Button>
                      ) : (
                        <Button asChild size="sm" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <Link to="/quiz/$slug" params={{ slug: qz.slug }}>Start quiz</Link>
                        </Button>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>
      <Footer />
    </div>
  );
}
