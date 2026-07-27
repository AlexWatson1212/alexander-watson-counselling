# Alexander Watson Counselling — refinement package

## What changed

- Reduced the homepage hero to two visual text systems: Instrument Serif for display headings and Manrope for all supporting copy.
- Converted “How we might work together” into a secondary button.
- Gave the hero a very light sage-grey background so it no longer merges into the header.
- Introduced a restrained muted-clay accent for high-intent “Begin a conversation” actions.
- Replaced two text-heavy homepage sections with a three-card recognition pattern and a connected three-stage process diagram.
- Kept the About page intentionally concise.
- Rebuilt the Support topics into a centred, consistent three-column card grid.
- Added a new image-led hero to Working Together and made its process feel like a visual timeline.
- Added a visual “At a glance” card to Fees without inventing unconfirmed information.
- Improved the form structure, guidance, consent wording, disabled pre-launch state and configurable endpoint.
- Styled the final footer link as a clear CTA without changing the unavailable footer markup.

## New image required

### Filename

`assets/images/working-together/working-together-two-chairs-soft-light.webp`

### Midjourney prompt

Quiet contemporary counselling room in Greater Manchester, two comfortable upholstered chairs angled gently toward one another with respectful space between them, warm natural morning light through a linen curtain, muted sage, warm off-white, oak and soft charcoal palette, calm editorial interior photography, thoughtful and human rather than clinical, subtle lived-in texture, no people, no therapy clichés, no staged corporate decor, restrained composition, soft realistic shadows, premium independent practice website aesthetic, photographed on a full-frame camera, 50mm lens, natural colour grading --ar 7:5 --style raw --v 7

### Export specification

- Crop: 7:5 landscape
- Recommended source export: 1680 × 1200 px or larger
- Website format: WebP
- Keep the two chairs and the space between them inside the central 70% of the image so mobile cropping remains safe.

## Existing images retained

- `assets/images/home/home-hero-winding-path-landscape.webp`
- `assets/images/portraits/home-about-alexander-watson-portrait.webp`
- `assets/images/approach/approach-reflection-landscape.webp`
- `assets/images/support/support-window-soft-daylight.webp`
- `assets/images/support/support-woodland-path-soft-landscape.webp`

## Files still required for a complete production update

1. `_includes/footer.html` — needed to replace the footer text link with proper button markup rather than relying only on CSS styling.
2. `_config.yml` — needed to set `email` and `contact_form_endpoint` and confirm the production site URL.
3. The chosen form provider or endpoint — for example, a hosted form service or a serverless form handler. The form remains safely disabled until `site.contact_form_endpoint` exists.
4. Final session length, fee, availability and cancellation policy.
5. Final Greater Manchester crisis and emergency guidance and reviewed privacy wording.

## Installation

Replace the matching page/include files and copy `main.css` to `assets/css/main.css`. Add the new Working Together image at the exact path above. Test the site at desktop, tablet and mobile widths before deployment.
