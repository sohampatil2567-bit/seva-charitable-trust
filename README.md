# SEVA Charitable Trust Harnai website

A responsive, static React and TypeScript website with a white editorial design, Tailwind CSS, Lucide icons, and separately prerendered HTML for each public page.

## Pages

- Home: `/`
- About Us: `/about/`
- Our Work: `/our-work/`
- Activities: `/activities/`
- Gallery: `/gallery/`
- Get Involved: `/get-involved/`
- Contact: `/contact/`

Each page has its own content, document title and meta description. The header and footer navigate to page URLs rather than section anchors. Unknown paths redirect to `/404/`, which is prerendered as a noindex not-found page.

## Run locally

Requirements: Node.js 22.13 or later and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

The Vite development server listens on port `3000`. Create the static multi-page production build with `pnpm build`, then serve the `dist/` directory using a static web host. Every route has its own `index.html` under `dist/`. `pnpm preview` runs the built site locally on port `3000`. `pnpm typecheck` runs TypeScript checks.

## Verified trust information

The site uses the public Facebook reference supplied for the project: <https://www.facebook.com/share/1CgBoG9roz/>. The visible profile identifies SEVA Charitable TRUST Harnai; names Sana Muzammil Kazi as Founder and President; uses “Humanity Begins Here”; lists focus areas of education, health, poverty, women’s empowerment and environment; and displays an address in Harnai, Dapoli, Maharashtra, plus a phone number and email.

The site does not invent the trust’s history, formal vision, trustees or biographies, registration status, tax exemptions, donation methods, project outcomes, impact figures, event details or testimonials. The Home page's “Ask Sana about donating” button opens WhatsApp to the phone number publicly listed by the trust, with a prefilled request for official donation instructions. It does not send the message automatically and does not accept or process payments. No bank details, UPI IDs or tax claims are presented. The Gallery has 20 separate photo slots: selecting an image previews it in that slot and offers controls to change or remove it. Image previews remain local to the current browser session; no files are sent to or saved by the website, so a page reload clears them. Use only genuine trust activity photographs. The hero artwork is a conceptual illustration, explicitly labelled as non-documentary; it is not a photograph of a beneficiary or SEVA activity.

## Contact form

The form validates the visitor’s name, email and message, then opens a prefilled `mailto:` draft in the visitor’s email application. No visitor details are submitted to a server, and the page does not claim that an email was delivered. A production email workflow would require a real, securely configured service and server-side handling; never place private API keys in frontend code.

## Customize

- `src/routes.ts` is the source of truth for the seven page paths and route-specific title and description metadata.
- `public/manus-routes.json` declares those seven public routes for the hosting platform; the not-found page is not included.
- `scripts/prerender.mjs` generates a distinct initial HTML document for each route and a noindex 404 document.
- `src/content.ts` is the source for verified trust details and derives header navigation from the page list.
- `src/components/FocusAreas.tsx` presents the public-profile focus areas; `src/components/Stories.tsx` contains evidence-gated activities; `src/components/Gallery.tsx` contains the 20 temporary local gallery previews.
- `src/components/GetInvolved.tsx` owns the email-draft enquiry form; `src/components/ContactSection.tsx` presents verified contact details.
- `public/brand/seva-trust-emblem.png` is the emblem supplied by the trust; `public/favicon.png`, `public/favicon.ico` and `public/apple-touch-icon.png` use the same mark.
- `src/styles.css` contains the design tokens, page layouts, responsive breakpoints, reduced-motion behavior and form styling.

No production site origin has been supplied, so the application does not invent canonical or `og:url` values. Set them when the final public domain is known. The share-card image uses the durable public trust emblem URL.

The WhatsApp button is only an enquiry handoff. Confirm any actual donation instructions with the trust before accepting money, connecting a payment method or publishing legal/registration statements.
