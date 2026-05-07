import { createServerFn } from "@tanstack/react-start";
import { wpFetch } from "@/server/woocommerce.server";
import { z } from "zod";

export type Quiz = {
  id: number;
  title: string;
  excerpt: string;
  subject?: string;
  questions?: number;
  difficulty?: string;
  premium?: boolean;
  slug: string;
};

export type QuizQuestion = {
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
};

export type FullQuiz = Quiz & { questions_data: QuizQuestion[] };

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  acf?: Record<string, unknown>;
  meta?: Record<string, unknown>;
  _embedded?: { "wp:term"?: Array<Array<{ name: string; taxonomy: string }>> };
};

function pick(obj: Record<string, unknown> | undefined, keys: string[]) {
  if (!obj) return undefined;
  for (const k of keys) if (obj[k] != null) return obj[k];
  return undefined;
}

export const listQuizzes = createServerFn({ method: "GET" }).handler(async (): Promise<Quiz[]> => {
  if (!process.env.WP_API_URL) return [];
  try {
    // Try a "quiz" custom post type first, fall back to posts in "quiz" category
    let posts: WPPost[] = [];
    try {
      posts = await wpFetch<WPPost[]>("/quiz?per_page=50&_embed");
    } catch {
      posts = await wpFetch<WPPost[]>("/posts?per_page=50&_embed");
    }
    return posts.map((p) => {
      const fields = { ...(p.acf ?? {}), ...(p.meta ?? {}) };
      return {
        id: p.id,
        slug: p.slug,
        title: p.title.rendered.replace(/<[^>]+>/g, ""),
        excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
        subject: pick(fields, ["subject", "_subject"]) as string | undefined,
        questions: pick(fields, ["questions", "question_count"]) as number | undefined,
        difficulty: pick(fields, ["difficulty", "level"]) as string | undefined,
        premium: Boolean(pick(fields, ["premium", "is_premium"])),
      };
    });
  } catch (e) {
    console.error("listQuizzes failed", e);
    return [];
  }
});

function parseQuestions(raw: unknown): QuizQuestion[] {
  // Accept ACF repeater [{prompt, choices:[{text}], correct_index, explanation}]
  // or a JSON string in meta, or a flat array of {prompt,choices,answer,explanation}.
  let arr: unknown = raw;
  if (typeof raw === "string") {
    try { arr = JSON.parse(raw); } catch { return []; }
  }
  if (!Array.isArray(arr)) return [];
  return arr.map((q) => {
    const o = (q ?? {}) as Record<string, unknown>;
    const choicesRaw = (o.choices ?? o.options ?? []) as unknown[];
    const choices = choicesRaw.map((c) =>
      typeof c === "string" ? c : String((c as Record<string, unknown>)?.text ?? ""),
    );
    const correctIndex = Number(o.correct_index ?? o.correctIndex ?? o.answer_index ?? 0);
    return {
      prompt: String(o.prompt ?? o.question ?? ""),
      choices,
      correctIndex: Number.isFinite(correctIndex) ? correctIndex : 0,
      explanation: o.explanation ? String(o.explanation) : undefined,
    };
  });
}

const SlugSchema = z.object({ slug: z.string().min(1).max(255) });

export const getQuiz = createServerFn({ method: "GET" })
  .inputValidator((data) => SlugSchema.parse(data))
  .handler(async ({ data }): Promise<FullQuiz | null> => {
    if (!process.env.WP_API_URL) return null;
    try {
      let posts: WPPost[] = [];
      try {
        posts = await wpFetch<WPPost[]>(`/quiz?slug=${encodeURIComponent(data.slug)}&_embed`);
      } catch {
        posts = await wpFetch<WPPost[]>(`/posts?slug=${encodeURIComponent(data.slug)}&_embed`);
      }
      const p = posts[0];
      if (!p) return null;
      const fields = { ...(p.acf ?? {}), ...(p.meta ?? {}) };
      const questionsData = parseQuestions(pick(fields, ["questions_data", "quiz_questions", "questions"]));
      return {
        id: p.id,
        slug: p.slug,
        title: p.title.rendered.replace(/<[^>]+>/g, ""),
        excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
        subject: pick(fields, ["subject", "_subject"]) as string | undefined,
        difficulty: pick(fields, ["difficulty", "level"]) as string | undefined,
        premium: Boolean(pick(fields, ["premium", "is_premium"])),
        questions: questionsData.length,
        questions_data: questionsData,
      };
    } catch (e) {
      console.error("getQuiz failed", e);
      return null;
    }
  });
