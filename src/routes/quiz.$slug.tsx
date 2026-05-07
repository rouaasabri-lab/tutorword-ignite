import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getQuizBySlug, type SampleQuiz } from "@/lib/sample-quizzes";
import { Check, X, ArrowRight, RotateCcw, Trophy, Clock, Lock } from "lucide-react";

export const Route = createFileRoute("/quiz/$slug")({
  head: ({ params }) => {
    const q = getQuizBySlug(params.slug);
    return {
      meta: [
        { title: q ? `${q.title} — tutorword Quiz` : "Quiz — tutorword" },
        { name: "description", content: q?.title ?? "Practice IGCSE quiz." },
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
  const quiz = getQuizBySlug(slug);
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

function QuizRunner({ quiz, onExit }: { quiz: SampleQuiz; onExit: () => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const total = quiz.questions.length;
  const current = quiz.questions[index];
  const selected = answers[current.id];
  const isRevealed = revealed[current.id];
  const progress = ((index + (isRevealed ? 1 : 0)) / total) * 100;

  const score = useMemo(
    () => quiz.questions.reduce((acc, q) => acc + (answers[q.id] === q.answer ? 1 : 0), 0),
    [answers, quiz.questions],
  );
  const pct = Math.round((score / total) * 100);
  const grade =
    pct >= 90 ? { letter: "A*", tone: "text-primary" } :
    pct >= 80 ? { letter: "A",  tone: "text-primary" } :
    pct >= 70 ? { letter: "B",  tone: "text-amber-600" } :
    pct >= 60 ? { letter: "C",  tone: "text-amber-600" } :
    pct >= 50 ? { letter: "D",  tone: "text-orange-600" } :
                { letter: "U",  tone: "text-destructive" };

  function pick(choiceId: string) {
    if (isRevealed) return;
    setAnswers((a) => ({ ...a, [current.id]: choiceId }));
  }
  function check() {
    if (!selected) return;
    setRevealed((r) => ({ ...r, [current.id]: true }));
  }
  function next() {
    if (index + 1 < total) setIndex(index + 1);
    else setFinished(true);
  }
  function restart() {
    setIndex(0);
    setAnswers({});
    setRevealed({});
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
                const correct = answers[q.id] === q.answer;
                return (
                  <li key={q.id} className="flex items-start gap-3 rounded-xl bg-cream/5 p-4">
                    <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${correct ? "bg-primary text-primary-foreground" : "bg-destructive/80 text-destructive-foreground"}`}>
                      {correct ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                    </span>
                    <div className="flex-1 text-sm">
                      <p className="text-cream/90"><span className="text-cream/50">Q{i + 1}.</span> {q.prompt}</p>
                      {!correct && (
                        <p className="mt-1 text-xs text-cream/60">
                          Answer: <span className="text-primary">{q.choices.find((c) => c.id === q.answer)?.text}</span>
                        </p>
                      )}
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
      {/* Header bar */}
      <div className="mb-6 flex items-center justify-between text-sm">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{quiz.subject} · {quiz.difficulty}</p>
          <h1 className="font-display text-2xl font-semibold leading-tight">{quiz.title}</h1>
        </div>
        <div className="hidden items-center gap-2 text-muted-foreground sm:flex">
          <Clock className="h-4 w-4" /> ~{quiz.durationMin} min
        </div>
      </div>

      {/* Progress */}
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

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-soft"
        >
          <p className="font-display text-xl font-semibold leading-snug text-foreground md:text-2xl">
            {current.prompt}
          </p>

          <div className="mt-6 grid gap-3">
            {current.choices.map((c, i) => {
              const isSelected = selected === c.id;
              const isCorrect = c.id === current.answer;
              const showCorrect = isRevealed && isCorrect;
              const showWrong = isRevealed && isSelected && !isCorrect;
              return (
                <button
                  key={c.id}
                  onClick={() => pick(c.id)}
                  disabled={isRevealed}
                  className={[
                    "group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition",
                    showCorrect
                      ? "border-primary bg-primary-soft"
                      : showWrong
                      ? "border-destructive/60 bg-destructive/10"
                      : isSelected
                      ? "border-primary/60 bg-primary-soft/60"
                      : "border-border bg-card hover:border-primary/40 hover:bg-primary-soft/30",
                    isRevealed ? "cursor-default" : "cursor-pointer",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-semibold transition",
                      showCorrect
                        ? "bg-primary text-primary-foreground"
                        : showWrong
                        ? "bg-destructive text-destructive-foreground"
                        : isSelected
                        ? "bg-primary/15 text-primary"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary",
                    ].join(" ")}
                  >
                    {showCorrect ? <Check className="h-4 w-4" /> : showWrong ? <X className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm font-medium text-foreground md:text-base">{c.text}</span>
                </button>
              );
            })}
          </div>

          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-5 rounded-2xl border p-4 text-sm ${selected === current.answer ? "border-primary/30 bg-primary-soft text-foreground" : "border-destructive/30 bg-destructive/5 text-foreground"}`}
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {selected === current.answer ? "Correct" : "Not quite"}
              </p>
              <p>{current.explanation}</p>
            </motion.div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <Button variant="ghost" onClick={onExit} className="text-muted-foreground">Exit</Button>
            {isRevealed ? (
              <Button onClick={next} className="bg-primary text-primary-foreground hover:bg-primary/90">
                {index + 1 === total ? "See results" : "Next question"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={check} disabled={!selected} className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                Check answer
              </Button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

// Re-export so tree-shaking keeps the icon import even if unused above
export const _Lock = Lock;