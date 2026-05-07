import { createServerFn } from "@tanstack/react-start";
import { wpFetch } from "./woocommerce.server";

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
