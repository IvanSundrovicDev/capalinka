# Obrt Čapalinka — website

A fast, statically generated marketing site for **Obrt Čapalinka** (Donji Miholjac, Croatia), built with Nuxt 4. The design takes its palette, typography and line-art language from the supplied business card. The supplied logo is kept as a vector SVG so it stays sharp at every size.

## Stack

- **Nuxt 4** with server-side rendering and static generation (`nuxt generate`)
- **Nuxt Sitemap** and **Nuxt Robots** for technical SEO
- **Leaflet** map on the contact page with themed OpenStreetMap tiles
- **@fontsource-variable** for self-hosted Playfair Display and Mulish
- **Lucide** line icons
- No CSS framework, no tracking scripts, no cookie banner by default
- Custom accessible lightbox, FAQ accordion (native `<details>`) and contact form

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run generate` | Static production build in `.output/public` |
| `npm run build` | Server build (not required for static hosting) |
| `npm run preview` | Preview the generated static site locally |
| `npm run assets` | Regenerate gallery illustrations, icons and OG image |

## Deploying

The site is configured for **Netlify** and other static hosts:

- Build command: `npm run generate`
- Publish directory: `.output/public`
- Node: 22 LTS or newer
- `netlify.toml` in the repository already provides the build command, publish directory, Node version, security headers and asset caching.

### Deploying on Netlify

1. In Netlify, choose **Add new site → Import an existing project**.
2. Connect the GitHub repository `IvanSundrovicDev/capalinka` and the `main` branch. Netlify will read `netlify.toml` automatically.
3. Set the environment variable **`NUXT_PUBLIC_SITE_URL`** to the final site URL (the custom domain or the `.netlify.app` address) under **Site configuration → Environment variables**.
4. Deploy. Canonical URLs, Open Graph URLs, schema IDs and the sitemap use that value. If the variable is not set, the build uses Netlify's `URL` environment variable, then falls back to `https://www.capalinka.hr`.

The contact form intentionally uses the visitor’s email client (`mailto:`) and does not require Netlify Forms. If you later switch to Netlify Forms, update the privacy policy and add a static form skeleton in `public/` so Netlify detects the form at build time.

For other static hosts, set the same environment variable before building:

```bash
NUXT_PUBLIC_SITE_URL="https://your-domain.hr" npm run generate
```

## ⚠️ Before going live — replace these placeholders

1. **Domain**
   - The fallback domain is `https://www.capalinka.hr`.
   - On Netlify, set `NUXT_PUBLIC_SITE_URL` to the custom domain (or the `.netlify.app` URL) under Site configuration → Environment variables. If it is not set, the build uses Netlify's `URL` variable, then the fallback.
   - Change it via the environment, not by editing URLs throughout the code.

2. **Email address**
   - `app/data/site.ts` contains the placeholder email `kontakt@capalinka.hr`.
   - Replace it with the real address. The contact form uses it for the `mailto:` fallback.

3. **Business details**
   - Phone `095 509 4124` and owner “Sanela Šimara” come from the supplied card.
   - Street address, OIB, exact opening hours and social profiles were not provided. If available, add the street address to the LocalBusiness schema in `app/utils/schema.ts` and to the contact/footer areas.
   - Working hours currently read “Termini po dogovoru”.
   - Update `siteData` in `app/data/site.ts` and schema in `app/utils/schema.ts` together so NAP data stays consistent.

4. **Gallery images**
   - All gallery items are custom SVG illustrations used as placeholders. They are intentionally labelled as illustrative on the Gallery page.
   - Replace the files in `public/images/gallery/` with real JPG/WebP photos and update paths, alt text and captions in `app/data/gallery.ts`.
   - Service hero images are defined in `app/data/services.ts` (`image`, `imageAlt`).
   - Keep images around 1200 × 900 px (4:3) for the gallery layout. The lightbox accepts any aspect ratio.

5. **Copy and claims**
   - The website copy and the owner quote are drafts. Have the owner review them for accuracy and tone before publication.
   - No fake reviews, star ratings or “X years of experience” claims are included. Add testimonials only when real, and do not add review schema without authentic reviews.
   - The gallery note explicitly states that illustrations are used until real photos are available; remove it when photos are added.

6. **Privacy policy**
   - `/politika-privatnosti` has been expanded with Netlify/CDN hosting, Netlify DPA/DPF information, OSMF map processing, legal bases, retention, transfers, rights and the current AZOP address.
   - Still add the **full street address of the registered seat and OIB** when available, and insert the actual email provider if it processes data outside the EEA.
   - Review the final wording with the owner or a Croatian legal adviser before publication.
   - If analytics, advertising, embedded video or other third-party tools are added later, update the cookie/privacy information and add prior consent where required.

7. **Contact form**
   - The form validates fields and then opens the visitor’s email client with a prefilled message (`mailto:`). The website server does not store enquiries.
   - Name and message are required; phone is optional; the form has no email field. The checkbox is an acknowledgment of the privacy policy, not marketing consent.
   - For direct server-side delivery, connect the form to Netlify Forms, Formspree, Resend or a small API endpoint. The UI is in `app/components/ContactForm.vue`; any change to this data flow must also be reflected in the privacy policy.

8. **Social profiles**
   - No social profiles were provided, so no `sameAs` links are emitted. Add them to the LocalBusiness schema once available.

## SEO setup included

- Unique Croatian titles, descriptions, canonical URLs and Open Graph/Twitter metadata per page
- `lang="hr"`, `geo.region`, `geo.placename` and local coordinates
- JSON-LD structured data:
  - `LocalBusiness` + `ProfessionalService` with area served, services and contact details
  - `WebSite`, `WebPage`, `BreadcrumbList`
  - `Service` for every service page
  - `FAQPage` where FAQs are visible
- XML sitemap and robots.txt generated by Nuxt modules
- Static prerendering of all routes for fast indexing
- Location-focused pages and internal links for Donji Miholjac, Golinci, Miholjački Poreč, Podgajci Podravski, Radikovci, Rakitovica, Sveti Đurađ, Viljevo, Magadenovac, Marijanci, Podravska Moslavina, Čađavica, Sopje, Valpovo, Belišće, Osijek, Našice, Slatina and Virovitica
- Self-hosted fonts, no render-blocking third-party resources; lazy-loaded images except the service hero
- Accessible navigation, skip link, focus states, reduced-motion support and keyboard-friendly lightbox

### Recommended off-site next steps

1. Create or claim a **Google Business Profile** with exactly the same name, address (if used), phone and website.
2. Set the primary category to cleaning-related and add relevant secondary categories, service areas and services.
3. Add the site to **Google Search Console** and **Bing Webmaster Tools**; submit `/sitemap.xml`.
4. Keep NAP (name, address, phone) consistent in local directories, Facebook and Instagram.
5. Publish real photos and keep the service and area pages updated over time.
6. Consider adding a booking/estimate workflow later if enquiries justify it.

## Editing content

| Content | File |
| --- | --- |
| Business data, nav, service areas | `app/data/site.ts` |
| Services and service page copy | `app/data/services.ts` |
| Gallery items | `app/data/gallery.ts` |
| Schema helpers | `app/utils/schema.ts` |
| Global colours and typography | `app/assets/css/main.css` |
| Home page | `app/pages/index.vue` |
| Header/footer | `app/components/AppHeader.vue`, `app/components/AppFooter.vue` |
| Gallery illustrations and icons | `scripts/generate-assets.mjs` |

Brand tokens: warm paper `#F7F4EC`, deep pine `#103833`, mint `#A9D4C3`, sage `#5C9A84`; headings are Playfair Display, body text is Mulish.

## Project structure

```
app/
  assets/css/main.css       design tokens, typography, utilities
  components/               header, footer, gallery, cards, forms…
  composables/              SEO, JSON-LD, site config
  data/                     edit content here
  pages/                    all routes, including services
  utils/                    schema.org builders
public/
  images/gallery/           placeholder SVG illustrations
  favicon.svg, icons, og-image.png, logo-mark.svg, logo-mark-light.svg
scripts/generate-assets.mjs regenerates visual assets from logo-mark.svg
nuxt.config.ts              modules, prerender routes, global meta
netlify.toml                Netlify build, headers and caching configuration
```

## Notes

- The brand mark lives in `public/logo-mark.svg` (dark) and `public/logo-mark-light.svg` (cream/mint variant for the dark footer). `npm run assets` reads the dark mark to regenerate the favicon, PWA icons, `logo-mark.png` and the OG image; update both SVGs when the logo changes.
- Nuxt also creates a `robots.txt` and `sitemap.xml` at build time. The privacy page is excluded from the sitemap and set to `noindex`; it remains accessible from the footer.
- The Leaflet map on the contact page loads OpenStreetMap tiles only when that page is opened.
- Netlify build settings live in `netlify.toml`; set `NUXT_PUBLIC_SITE_URL` in Netlify for correct canonical and sitemap URLs.
- Gallery illustrations are original vector artwork made for this project and can be replaced without changing the lightbox component.
