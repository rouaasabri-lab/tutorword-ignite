# TutorWorld — self-hosting on the same server as WordPress

This is a TanStack Start (React 19 + Vite 7) app. It runs as a Node 20+ process and
talks to your WooCommerce store over the REST API.

## 1. Requirements on the server

- Node.js **20+** and `npm` (or `bun`)
- `pm2` (`npm i -g pm2`)
- Nginx (already installed for WordPress)
- A WordPress site with **WooCommerce** active
- (Optional) **Advanced Custom Fields** plugin for the quiz CPT

## 2. WordPress / WooCommerce setup

### a) REST API keys

`WooCommerce → Settings → Advanced → REST API → Add key`
- Permissions: **Read/Write**
- Copy `Consumer key` → `WC_KEY`
- Copy `Consumer secret` → `WC_SECRET`

### b) Two subscription products

Create two simple products (visible or hidden, your choice):
- "TutorWorld Pro — Monthly"
- "TutorWorld Pro — Yearly"

Note their numeric IDs (visible in the product URL) and put them in
`WC_PRODUCT_MONTHLY` / `WC_PRODUCT_YEARLY`.

> The actual recurring billing is handled by **Stripe**. The WC orders are
> records of paid subscriptions for your reporting / customer view.

### c) Quiz custom post type

Easiest path: install **Custom Post Type UI** + **Advanced Custom Fields**
(both have free versions).

1. CPT UI → add a post type:
   - Slug: `quiz`
   - "Show in REST" = **true**, REST base = `quiz`
2. ACF → add a field group attached to "Post Type = quiz":
   - `subject` (text) — e.g. `Mathematics`, `Physics`, `Chemistry`
   - `difficulty` (text) — `Core` or `Extended`
   - `premium` (true/false)
   - `questions_data` (textarea OR repeater) — see below
3. Enable ACF → Settings → "Show in REST API" so fields appear under `acf`.

The simplest format for `questions_data` is a JSON string in a textarea:

```json
[
  {
    "prompt": "Solve 3x + 7 = 22",
    "choices": ["x = 3", "x = 5", "x = 7", "x = 15"],
    "correct_index": 1,
    "explanation": "3x = 15, so x = 5."
  }
]
```

If you prefer an ACF repeater, use these subfield names:
`prompt`, `choices` (repeater of `text`), `correct_index`, `explanation`.
The app accepts both shapes.

## 3. Stripe setup

1. Create two **recurring** Prices in Stripe (monthly, yearly). Copy the
   `price_…` IDs into `STRIPE_PRICE_MONTHLY` / `STRIPE_PRICE_YEARLY`.
2. Add a webhook endpoint:
   - URL: `https://tutorworld.your-domain.com/api/public/stripe-webhook`
   - Event: `checkout.session.completed`
   - Copy the signing secret → `STRIPE_WEBHOOK_SECRET`
3. Put the secret API key into `STRIPE_SECRET_KEY`.

On every successful checkout, the webhook creates a paid `wc/v3/orders` record
linked to the Pro product, with the Stripe subscription/customer IDs in order
meta (`_stripe_subscription_id`, `_stripe_customer_id`).

## 4. Build & run

```bash
# On the server
git clone <your-repo> /var/www/tutorworld
cd /var/www/tutorworld

cp .env.example .env
nano .env                      # fill in real values

npm ci                         # or: bun install
npm run build                  # produces .output/

pm2 start ecosystem.config.cjs
pm2 save && pm2 startup        # follow the printed command once
```

The app listens on `PORT` (default `3000`).

## 5. Nginx reverse proxy

Add a server block (or extend the WordPress one with a subdomain). Example for
`tutorworld.your-domain.com`:

```nginx
server {
    listen 80;
    server_name tutorworld.your-domain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tutorworld.your-domain.com;

    ssl_certificate     /etc/letsencrypt/live/tutorworld.your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tutorworld.your-domain.com/privkey.pem;

    client_max_body_size 10m;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Upgrade           $http_upgrade;
        proxy_set_header   Connection        "upgrade";
    }
}
```

Then:

```bash
sudo certbot --nginx -d tutorworld.your-domain.com
sudo nginx -t && sudo systemctl reload nginx
```

## 6. Updating the app

```bash
cd /var/www/tutorworld
git pull
npm ci
npm run build
pm2 restart tutorworld
```

## 7. Switching the WooCommerce site later

Only env vars need to change — no code edits:

```bash
nano .env        # update WP_API_URL / WC_API_URL / WC_KEY / WC_SECRET
pm2 restart tutorworld
```

## 8. Health check

- `GET https://tutorworld.your-domain.com/` should return the home page
- `GET https://tutorworld.your-domain.com/quizzes` should list quizzes from
  WooCommerce (falls back to the built-in samples if the WP API is unreachable)
- Stripe → Webhooks → your endpoint should show `200 OK` after a test payment
- A new order should appear in `WooCommerce → Orders` after each Stripe checkout