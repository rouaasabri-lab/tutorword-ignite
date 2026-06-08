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

export async function wcPost<T>(path: string, body: unknown): Promise<T> {
  const url = `${wcBase()}${path}`;
  const auth = authHeader();
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(auth ? { Authorization: auth } : {}),
    },
    body: JSON.stringify(body),
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

// Auth header for WordPress core REST API (users, etc.)
// Uses an Application Password: WP Admin → Users → Profile → Application Passwords.
// Env: WP_ADMIN_USER, WP_ADMIN_APP_PASSWORD
function wpAuthHeader() {
  const user = process.env.WP_ADMIN_USER;
  const pass = process.env.WP_ADMIN_APP_PASSWORD;
  if (!user || !pass) return undefined;
  return "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");
}

export async function wpPost<T>(path: string, body: unknown): Promise<T> {
  const url = `${wpBase()}${path}`;
  const auth = wpAuthHeader();
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(auth ? { Authorization: auth } : {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`WP ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

// Look up a WP user by email. Returns the user id or null.
export async function wpFindUserByEmail(email: string): Promise<number | null> {
  const auth = wpAuthHeader();
  if (!auth) return null;
  const url = `${wpBase()}/users?search=${encodeURIComponent(email)}&context=edit`;
  const res = await fetch(url, { headers: { Authorization: auth } });
  if (!res.ok) return null;
  const list = (await res.json()) as Array<{ id: number; email?: string }>;
  const match = list.find((u) => (u.email || "").toLowerCase() === email.toLowerCase());
  return match?.id ?? null;
}

// Create a WP user with role "student". If the user already exists, returns its id.
export async function wpEnsureStudentUser(opts: {
  email: string;
  firstName?: string;
  lastName?: string;
}): Promise<number | null> {
  if (!opts.email) return null;
  const existing = await wpFindUserByEmail(opts.email);
  if (existing) return existing;

  // Generate a random password — the user can reset it from the WP login screen.
  const password =
    "alx_" +
    Array.from(crypto.getRandomValues(new Uint8Array(18)))
      .map((b) => b.toString(36))
      .join("")
      .slice(0, 24);

  const username = opts.email.split("@")[0].replace(/[^a-z0-9_.-]/gi, "").toLowerCase() ||
    `student_${Date.now()}`;

  try {
    const user = await wpPost<{ id: number }>("/users", {
      username,
      email: opts.email,
      password,
      first_name: opts.firstName || "",
      last_name: opts.lastName || "",
      roles: ["student"],
    });
    return user.id;
  } catch (err) {
    // If "student" role doesn't exist yet on this WP install, fall back to "subscriber".
    try {
      const user = await wpPost<{ id: number }>("/users", {
        username,
        email: opts.email,
        password,
        first_name: opts.firstName || "",
        last_name: opts.lastName || "",
        roles: ["subscriber"],
      });
      return user.id;
    } catch (err2) {
      console.error("wpEnsureStudentUser failed", err, err2);
      return null;
    }
  }
}
