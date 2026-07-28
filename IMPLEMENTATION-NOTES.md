# Alexander Watson Counselling copy update — implementation notes

## Updated page files

- `index.updated.md` — Home
- `about.updated.md` — About
- `support.updated.md` — What I help with (keeps `/support/` URL)
- `working-together.updated.md` — merged How I work page (keeps `/working-together/` URL)
- `approach.updated.md` — legacy route pointing visitors to How I work
- `fees.updated.md` — Fees and practical details
- `contact.updated.md` — Contact and urgent support
- `404.updated.html` — unchanged because the existing page already works

## Files still needed for the site-wide update

Please supply the complete current versions of:

1. `_config.yml`
2. The navigation source, such as `_data/navigation.yml`
3. `_includes/header.html` or whichever file renders the navigation
4. `_includes/footer.html`
5. `_layouts/default.html`
6. The main stylesheet or all stylesheets used by these pages
7. The current Privacy page
8. Any cookie or analytics include/configuration
9. Any form-success or thank-you page

If the uploaded Markdown files were content fragments rather than the actual files, also supply their versions with YAML front matter.

## Recommended navigation

- Home
- About
- What I help with
- How I work
- Fees
- Contact

Remove Approach from the main navigation. Keep `/approach/` available as a legacy route.

## `_config.yml` values required

```yml
email: ""
contact_form_endpoint: ""
enquiry_response_time: ""
enquiry_retention_summary: ""
contact_working_hours: ""

practice_location: ""
in_person_details: ""
availability_summary: ""

session_length: ""
session_fee: ""
session_frequency: ""
introductory_call: ""
introductory_call_length: ""
introductory_call_format: ""
payment_summary: ""
cancellation_summary: ""
reduced_fee_summary: ""
waiting_list_summary: ""
online_platform: ""
review_frequency: ""

training_course: ""
training_provider: ""
expected_qualification_date: ""
professional_membership: ""
supervision_summary: ""
about_personal_note: ""
```

Do not publish the Fees or Contact pages until their required values are populated and the form has been tested.

## New or newly reused CSS hooks

Check styling for:

- `.hero-practical-list`
- `.section-link`
- `.faq-list`
- `.faq-item`
- `.contact-form-fallback`

The other page structures mainly reuse classes already present in the current site.

## Facts still required from Alexander

- Exact in-person location wording
- Session length
- Session fee
- Normal frequency
- Introductory call length, format and whether it is free
- Current availability
- Payment timing and method
- Cancellation notice and fee
- Enquiry response time
- Form-message retention period
- Current training course/provider and expected qualification date
- Exact professional membership wording
- Supervision wording suitable for public use
- A short, true paragraph on how Alexander came to counselling
- Services not offered or presentations requiring specialist referral
