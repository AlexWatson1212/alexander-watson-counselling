# Alexander Watson Counselling — handover

## Creative direction

The design is editorial, grounded and quietly confident. The palette is taken directly from the supplied identity artwork: the mark ink `#1A2119`, the mark light `#DFE0D8`, a deep forest green and a warm paper cream. There is no accent colour outside that family — the earlier rust accent has been removed because it did not appear anywhere in the supplied assets. Warmth comes from the paper tone, the photography and the typography rather than from a decorative colour.

Typography is self-hosted and dependency-free. Display type is **Newsreader** (72pt optical instance), chosen because its stroke contrast and sharp serifs echo the `ALEXANDER` wordmark; practical text is **Instrument Sans**. Both are SIL Open Font License faces, subset to Latin and served as WOFF2 from `assets/fonts/` — no external font request, no build step. Licence text is in `assets/fonts/OFL.txt`.

Restraint does the work: small all-caps labels appear only on the sections the navigation points at, the repeated section numbers have gone, and most hairline rules have been removed so the ones that remain read as deliberate. The copy remains client-centred while making Alexander's engaged, direct and neurodivergent-aware way of working unmistakable.

The wider seated portrait leads the site because it gives visitors an immediate sense of Alexander in a calm, professional setting. The closer portrait supports the more personal About section. Both are real photographs; no stock or generated therapy imagery is used.

## Supplied asset inventory

| Supplied file | Final filename | Action | Website use | Dimensions / ratio | Alt text |
| --- | --- | --- | --- | --- | --- |
| `alexander-watson-counselling-card(2).webp` | `alexander-watson-counsellor-hero.webp` | Renamed; retained as WebP | Homepage hero and temporary social preview | 1448 × 1086 supplied; displayed at 4:5 with responsive crop | `Alexander Watson seated in a calm counselling room` |
| `alexander-watson-headshot.webp` | `alexander-watson-counsellor-portrait.webp` | Renamed; retained as WebP | About section | 1254 × 1254 supplied; displayed at 4:5 on desktop, 1:1 below 940px | `Portrait of Alexander Watson` |
| `alexander-watson-primary-logo(1).svg` | `alexander-watson-primary-logo.svg` | Renamed; retained as SVG | Header brand mark | 2000 × 500 viewBox; 4:1 | Empty alt inside a link labelled `Alexander Watson Counselling, home` |
| `Alexander-Watson-Alternate-logo.svg` | `alexander-watson-alternate-logo.svg` | Renamed; retained as SVG | Footer brand mark | 2000 × 500 viewBox; 4:1 | Empty alt; nearby text identifies the practice |
| `Alexander-Watson-Submark.svg` | `alexander-watson-submark.svg` | Renamed; retained as SVG | Editorial interlude between the recognition and approach sections | 2000 × 1890 viewBox; near-square | Empty alt; decorative |
| `favicon.png` | `favicon-64x64.png` | Renamed | Browser icon | 64 × 64; 1:1 | Not applicable |
| `favicon-32x32.png` | `favicon-32x32.png` | Kept | Browser icon | 32 × 32; 1:1 | Not applicable |
| `favicon-16x16.png` | `favicon-16x16.png` | Kept | Browser icon | 16 × 16; 1:1 | Not applicable |
| Public-site screenshot | Not included in production | Retired | Audit evidence only | 1902 × 930 | Not applicable |

Type is the only asset added in this revision:

| File | Family | Instance | Size | Licence |
| --- | --- | --- | --- | --- |
| `assets/fonts/newsreader-display-400.woff2` | Newsreader | 72pt optical, 400 | 19 KB | OFL 1.1 |
| `assets/fonts/newsreader-text-400.woff2` | Newsreader | 16pt optical, 400 | 20 KB | OFL 1.1 |
| `assets/fonts/instrument-sans-400.woff2` | Instrument Sans | 400 | 15 KB | OFL 1.1 |
| `assets/fonts/instrument-sans-600.woff2` | Instrument Sans | 600 | 15 KB | OFL 1.1 |

All four are Latin subsets instanced from the variable sources. Total added weight is roughly 69 KB, loaded from the same origin with `font-display: swap` and a system serif/sans fallback stack behind them.

## Images still to create

Nothing else is required for launch. The supplied photography is strong enough to carry the whole site without generic filler imagery.

These finishing assets are recommended but optional:

| Proposed filename | Location / purpose | Specification | Brief |
| --- | --- | --- | --- |
| `alexander-watson-counselling-social-share.webp` | Social and messaging previews | 1200 × 630; 1.91:1; WebP under 250 KB | Use the real seated portrait on the right and a solid deep-forest panel on the left. Add the existing primary wordmark and the line `You have probably thought about it enough.` Keep generous negative space. Do not alter Alexander's face, use gradients, add stock elements or simulate a therapy session. |
| `apple-touch-icon.png` | iOS saved-site icon | 180 × 180; PNG | Render the supplied `A` submark or existing favicon artwork crisply on the established forest background. No extra text or effects. |
| `favicon.ico` | Older browser compatibility | Multi-size 16/32/48 px ICO | Convert the existing favicon artwork exactly. Do not redesign it. |

Until the dedicated social asset is created, the site uses the real seated portrait for social metadata.

## Factual wording to confirm

- Whether `Counsellor in training` is the exact public wording required by the course, placement and insurer
- Whether supervised work may be described publicly as client work in Greater Manchester
- Whether both Greater Manchester and online sessions are currently available
- The public session fee
- Current availability and expected reply time
- Any professional membership or registration that may be named
- Whether `alexanderclivewatson@gmail.com` should remain the public enquiry address
- Any specific privacy notice, data-retention policy or safeguarding statement required by the placement or future private practice

Do not add memberships, qualifications or accreditation logos until the wording and permission to use them are confirmed.

## Deployment diagnosis and correction

The screenshot shows GitHub Pages rendering this repository's README. That happens because GitHub Pages is publishing the source branch root as a Jekyll/static site. The source contains an application, not a ready-to-serve `index.html`, so Pages has selected the README as the page content.

To correct it:

1. In the repository's **Settings → Pages**, stop publishing `main / (root)` and remove the custom domain from that Pages deployment.
2. Deploy this project through the application hosting workflow associated with `.openai/hosting.json`, or another host that supports the project's Cloudflare-compatible server build.
3. Add `alexanderwatsoncounselling.co.uk` as the custom domain in that host.
4. Replace the current GitHub Pages DNS records with the records shown by the chosen host. Do not guess the DNS values.
5. Wait for HTTPS to become active, then check the root URL, mobile menu, enquiry button, favicons, social preview, `robots.txt` and `sitemap.xml`.

If GitHub Pages must be retained, the project needs a separate static-export implementation and GitHub Actions deployment workflow. Publishing this source branch directly will not work.

## Launch checklist

- [ ] Confirm every item in **Factual wording to confirm**
- [ ] Replace `Current fee — Confirmed clearly when you enquire` if a public fee should be shown
- [ ] Test the enquiry form on a phone and desktop with the preferred email app
- [ ] Confirm the email address receives messages and the reply wording is ready
- [ ] Complete any required privacy, complaints and safeguarding pages before accepting private clients
- [ ] Create the optional social-share image and Apple touch icon
- [ ] Disable the incorrect GitHub Pages source deployment
- [ ] Connect the custom domain to the compatible host
- [ ] Check HTTPS, keyboard navigation, mobile menu, FAQs and all external support links
- [ ] Submit the sitemap in Google Search Console after the correct site is live
