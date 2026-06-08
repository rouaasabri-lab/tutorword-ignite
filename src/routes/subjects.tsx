import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SUBJECT_GROUPS } from "@/lib/subjects";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "IGCSE Subjects — algebrix" },
      { name: "description", content: "Every IGCSE subject covered — Maths, Sciences, English and Humanities." },
    ],
  }),
  component: SubjectsPage,
});

function SubjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Every IGCSE subject, <span className="text-primary">topic by topic.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-cream/75">
            Pick a subject and start practising — quizzes, notes and exam questions built by tutors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6 py-16">
        {SUBJECT_GROUPS.map((g) => (
          <div key={g.slug} className="overflow-hidden rounded-[2rem] bg-emerald-grad p-8 text-primary-foreground shadow-soft md:p-12">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-card/15 text-lg backdrop-blur">{g.emoji}</span>
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">{g.name}</h2>
            </div>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">{g.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {g.subjects.map((s) => (
                <div key={s.name} className="rounded-2xl bg-cream/95 p-5 text-foreground shadow-soft">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{s.name}</h3>
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-soft text-primary">{g.emoji}</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {s.tiers.map((t) => (
                      <Link key={t.slug} to="/quizzes" className="group flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary-soft">
                        {t.label}
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
