import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { listQuizzes } from "@/utils/quizzes.functions";
import { Lock, Timer, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_QUIZZES } from "@/lib/sample-quizzes";

export const Route = createFileRoute("/quizzes")({
  head: () => ({
    meta: [
      { title: "IGCSE Quizzes — tutorworld" },
      { name: "description", content: "Topic-by-topic IGCSE quizzes. Free quizzes available, full access with tutorworld Pro." },
    ],
  }),
  component: QuizzesPage,
});

// Build the full catalogue: 1 free sample per subject + locked Pro placeholders.
const SUBJECTS = ["Mathematics", "Physics", "Chemistry"] as const;

const CATALOGUE = SUBJECTS.flatMap((subject, si) => {
  const free = SAMPLE_QUIZZES.find((q) => q.subject === subject)!;
  const locked = Array.from({ length: 3 }, (_, j) => ({
    id: si * 100 + j + 2,
    slug: `${subject.toLowerCase()}-pro-${j + 1}`,
    title: `${subject}: Topic set ${j + 2}`,
    excerpt: `In-depth ${subject.toLowerCase()} practice covering exam-style questions and mark-scheme walkthroughs.`,
    subject,
    questions: 10,
    difficulty: j === 2 ? "Extended" : "Core",
    premium: true,
  }));
  return [
    {
      id: si * 100 + 1,
      slug: free.slug,
      title: free.title,
      excerpt: `A free starter quiz for ${subject}. Includes instant grading and answer explanations.`,
      subject,
      questions: free.questions.length,
      difficulty: free.difficulty,
      premium: false,
    },
    ...locked,
  ];
});

function QuizzesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => listQuizzes(),
  });
  const quizzes = data && data.length ? data : CATALOGUE;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Practice the way you'll <span className="text-primary">be tested.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/75">
            Every quiz mirrors real IGCSE question style and difficulty. Free quizzes daily — full library with Pro.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {isLoading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-56 animate-pulse rounded-2xl bg-muted" />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((q) => (
              <article
                key={q.id}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                    {q.subject ?? "IGCSE"}
                  </span>
                  {q.premium ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground">
                      <Lock className="h-3 w-3" /> Pro
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-grad px-2.5 py-1 text-xs text-primary-foreground">
                      <GraduationCap className="h-3 w-3" /> Free
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{q.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{q.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Timer className="h-3.5 w-3.5" /> {q.questions ?? 10} Qs</span>
                  {q.difficulty && <><span className="h-1 w-1 rounded-full bg-border" /><span>{q.difficulty}</span></>}
                </div>
                {q.premium ? (
                  <Button asChild size="sm" className="mt-6 w-full bg-foreground text-background hover:bg-foreground/90">
                    <Link to="/pricing">Unlock with Pro</Link>
                  </Button>
                ) : (
                  <Button asChild size="sm" className="mt-6 w-full bg-emerald-grad text-primary-foreground hover:opacity-90">
                    <Link to="/quiz/$slug" params={{ slug: q.slug }}>Start quiz</Link>
                  </Button>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
