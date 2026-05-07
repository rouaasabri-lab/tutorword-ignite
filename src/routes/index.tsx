import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles, Target, Trophy } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SUBJECTS } from "@/lib/subjects";
import hero from "@/assets/hero-student.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tutorword — IGCSE revision, quizzes & past-paper practice" },
      { name: "description", content: "Master IGCSE with tutor-built quizzes, structured notes and exam-grade question banks. Free tier available." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" /> Built for IGCSE 2026
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
            >
              The smarter way to <span className="italic text-primary">ace IGCSE</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Tutor-built quizzes, topic notes and exam-grade question banks for every IGCSE subject — practice the way you'll be tested.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="bg-emerald-grad text-primary-foreground shadow-glow hover:opacity-90">
                <Link to="/quizzes">Start practising free <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">See plans</Link>
              </Button>
            </motion.div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["Built by IGCSE tutors", "1,200+ practice questions", "Free tier, no card needed"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-border">
              <img src={hero} alt="IGCSE student studying" width={1536} height={1152} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">94% pass rate</p>
                  <p className="text-xs text-muted-foreground">Among consistent users</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border md:block">
              <p className="text-xs text-muted-foreground">This week</p>
              <p className="font-display text-2xl font-bold text-primary">+38%</p>
              <p className="text-xs text-muted-foreground">accuracy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {[
            { k: "8", v: "IGCSE subjects" },
            { k: "1,200+", v: "Practice questions" },
            { k: "120+", v: "Topic quizzes" },
            { k: "Daily", v: "Progress tracking" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-4xl font-bold text-primary">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Subjects</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Practice every IGCSE subject</h2>
          </div>
          <Link to="/subjects" className="hidden text-sm font-medium text-primary hover:underline md:inline">View all →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUBJECTS.slice(0, 8).map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to="/quizzes"
                className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft font-display text-2xl text-primary">
                  {s.emoji}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{s.topics} topics</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{s.questions} questions</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">A study loop that actually sticks.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: BookOpen, t: "Learn the topic", d: "Concise notes written by tutors who mark IGCSE papers." },
              { icon: Target, t: "Practice quizzes", d: "Question banks modelled on real exam style and difficulty." },
              { icon: Trophy, t: "Track mastery", d: "See weak topics and revise smarter, not longer." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-grad text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl bg-emerald-grad px-8 py-16 text-center text-primary-foreground shadow-glow md:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold md:text-5xl">
            Start free. Upgrade when you're ready.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Try unlimited free quizzes today — unlock the full IGCSE library when you need exam-ready prep.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/quizzes">Try free quizzes</Link>
            </Button>
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
