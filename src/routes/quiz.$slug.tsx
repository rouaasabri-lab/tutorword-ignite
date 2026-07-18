import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getEdexcelQuizBySlug, type EdexcelQuiz } from "@/lib/edexcel-quizzes";
import { Check, X, ArrowRight, RotateCcw, Trophy, Clock, Eye } from "lucide-react";

export const Route = createFileRoute("/quiz/$slug")({
  head: ({ params }) => {
    const q = getEdexcelQuizBySlug(params.slug);
    return {
      meta: [
        { title: q ? `${q.title} — Algebrix Quiz` : "Quiz — Algebrix" },
        { name: "description", content: q ? `${q.level} ${q.topic} practice questions with worked answers.` : "Practice IGCSE / A Level quiz." },
      ],
    };
  },
  component: QuizPlayer,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Quiz not found</h1>
        <Link to="/quizzes" className="mt-4 inline-block text-primary underline">Back to quizzes</Link>
      </div>
    </div>
  ),
});

function QuizPlayer() {
  const { slug } = Route.useParams();
  const quiz = getEdexcelQuizBySlug(slug);
  const navigate = useNavigate();

  if (!quiz) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-bold">Quiz not found</h1>
          <Button asChild className="mt-6"><Link to="/quizzes">Browse quizzes</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <QuizRunner quiz={quiz} onExit={() => navigate({ to: "/quizzes" })} />
      <Footer />
    </div>
  );
}

type Mark = "correct" | "wrong";

function QuizRunner({ quiz, onExit }: { quiz: EdexcelQuiz; onExit: () => void }) {
  const [index, setIndex] = useState(0);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [marks, setMarks] = useState<Record<string, Mark>>({});
  const [finished, setFinished] = useState(false);

  const total = quiz.questions.length;
  const current = quiz.questions[index];
  const isRevealed = !!revealed[current.id];
  const mark = marks[current.id];
  const progress = ((index + (mark ? 1 : 0)) / total) * 100;

  const score = useMemo(
    () => quiz.questions.reduce((acc, q) => acc + (marks[q.id] === "correct" ? 1 : 0), 0),
    [marks, quiz.questions],
  );
  const pct = Math.round((score / total) * 100);
  const grade =
    pct >= 90 ? { letter: "A*", tone: "text-primary" } :
    pct >= 80 ? { letter: "A",  tone: "text-primary" } :
    pct >= 70 ? { letter: "B",  tone: "text-amber-500" } :
    pct >= 60 ? { letter: "C",  tone: "text-amber-500" } :
    pct >= 50 ? { letter: "D",  tone: "text-orange-500" } :
                { letter: "U",  tone: "text-destructive" };

  function reveal() {
    setRevealed((r) => ({ ...r, [current.id]: true }));
  }
  function setMark(m: Mark) {
    setMarks((prev) => ({ ...prev, [current.id]: m }));
  }
  function next() {
    if (index + 1 < total) setIndex(index + 1);
    else setFinished(true);
  }
  function restart() {
    setIndex(0);
    setDrafts({});
    setRevealed({});
    setMarks({});
    setFinished(false);
  }

  if (finished) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl bg-ink text-cream shadow-glow"
        >
          <div className="p-10 text-center">
            <Trophy className="mx-auto h-12 w-12 text-primary" />
            <p className="mt-4 text-sm uppercase tracking-widest text-cream/60">Quiz complete</p>
            <p className="mt-2 font-display text-2xl font-semibold">{quiz.title}</p>
            <div className="mt-8 flex items-end justify-center gap-3">
              <span className="font-display text-7xl font-extrabold text-cream">{score}</span>
              <span className="mb-2 text-2xl text-cream/60">/ {total}</span>
            </div>
            <p className="mt-2 text-cream/70">{pct}% correct</p>
            <div className={`mt-6 inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-2 ${grade.tone}`}>
              <span className="text-xs uppercase tracking-widest text-cream/60">Grade</span>
              <span className="font-display text-2xl font-bold">{grade.letter}</span>
            </div>
          </div>

          <div className="border-t border-cream/10 bg-cream/5 p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream/70">Review</p>
            <ul className="space-y-3">
              {quiz.questions.map((q, i) => {
                const m = marks[q.id];
                const correct = m === "correct";
                return (
                  <li key={q.id} className="rounded-xl bg-cream/5 p-4">
                    <div className="flex items-start gap-3">
                      <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${correct ? "bg-primary text-primary-foreground" : "bg-destructive/80 text-destructive-foreground"}`}>
                        {correct ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                      </span>
                      <div className="flex-1 text-sm">
                        <p className="text-cream/90"><span className="text-cream/50">Q{i + 1}.</span> {q.prompt}</p>
                        <p className="mt-1 text-xs text-cream/60">Answer: <span className="text-primary">{q.answer}</span></p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-3 border-t border-cream/10 bg-cream/5 p-6 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={restart} className="border-cream/20 bg-transparent text-cream hover:bg-cream/10">
              <RotateCcw className="mr-2 h-4 w-4" /> Try again
            </Button>
            <Button onClick={onExit} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Browse more quizzes
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
      <div className="mb-6 flex items-center justify-between text-sm">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{quiz.level} · {quiz.topic}</p>
          <h1 className="font-display text-2xl font-semibold leading-tight">{quiz.title}</h1>
        </div>
        <div className="hidden items-center gap-2 text-muted-foreground sm:flex">
          <Clock className="h-4 w-4" /> ~{quiz.durationMin} min
        </div>
      </div>

      <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
        <span>Question {index + 1} of {total}</span>
        <span>{score} correct</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-soft"
        >
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-primary-soft px-2.5 py-1 font-medium text-primary">{current.difficulty}</span>
            <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">Year {current.year}</span>
          </div>

          <p className="whitespace-pre-line font-display text-xl font-semibold leading-snug text-foreground md:text-2xl">
            {current.prompt}
          </p>

          <textarea
            value={drafts[current.id] ?? ""}
            onChange={(e) => setDrafts((d) => ({ ...d, [current.id]: e.target.value }))}
            placeholder="Work through it here… (your notes stay private)"
            rows={4}
            className="mt-6 w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          />

          {!isRevealed ? (
            <div className="mt-5 flex items-center justify-between">
              <Button variant="ghost" onClick={onExit} className="text-muted-foreground">Exit</Button>
              <Button onClick={reveal} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Eye className="mr-2 h-4 w-4" /> Reveal answer
              </Button>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-2xl border border-primary/30 bg-primary-soft p-4 text-sm"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mark scheme</p>
                <p className="whitespace-pre-line font-medium text-foreground">{current.answer}</p>
              </motion.div>

              <div className="mt-5 rounded-2xl border border-border bg-muted/40 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Self-mark</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={() => setMark("correct")}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                      mark === "correct" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <Check className="h-4 w-4" /> I got it right
                  </button>
                  <button
                    onClick={() => setMark("wrong")}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                      mark === "wrong" ? "border-destructive bg-destructive text-destructive-foreground" : "border-border bg-card hover:border-destructive/50"
                    }`}
                  >
                    <X className="h-4 w-4" /> Not quite
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Button variant="ghost" onClick={onExit} className="text-muted-foreground">Exit</Button>
                <Button
                  onClick={next}
                  disabled={!mark}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {index + 1 === total ? "See results" : "Next question"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
