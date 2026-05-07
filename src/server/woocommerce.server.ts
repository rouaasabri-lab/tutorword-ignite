// WooCommerce REST client (server-only). Reads endpoint + keys from env.
// Set: WC_API_URL (e.g. https://yourshop.com/wp-json/wc/v3), WC_KEY, WC_SECRET
// For WP posts/quizzes: WP_API_URL (e.g. https://yourshop.com/wp-json/wp/v2)

const wcBase = () => process.env.WC_API_URL?.replace(/\/$/, "");
const wpBase = () => process.env.WP_API_URL?.replace(/\/$/, "");

function authHeader() {
  const key = process.env.WC_KEY;
  const secret = process.env.WC_SECRET;
  if (!key || !secret) return undefined;
  return "Basic " + Buffer.from(`${key}:${secret}`).toString("base64");
}

export async function wcFetch<T>(path: string): Promise<T> {
  const url = `${wcBase()}${path}`;
  const auth = authHeader();
  const res = await fetch(url, {
    headers: auth ? { Authorization: auth } : {},
  });
  if (!res.ok) throw new Error(`WC ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export async function wpFetch<T>(path: string): Promise<T> {
  const url = `${wpBase()}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WP ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}
