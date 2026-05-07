import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SUBJECTS } from "@/lib/subjects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "IGCSE Subjects — tutorword" },
      { name: "description", content: "Explore every IGCSE subject we cover, from Mathematics to Computer Science." },
    ],
  }),
  component: SubjectsPage,
});

function SubjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Subjects</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold md:text-6xl">
            Every IGCSE subject, mapped topic by topic.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Pick a subject to see topic notes and start practising with quizzes built by tutors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s) => (
            <Link
              key={s.slug}
              to="/quizzes"
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft font-display text-3xl text-primary">
                {s.emoji}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{s.topics} topics</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{s.questions} questions</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Practice now <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
