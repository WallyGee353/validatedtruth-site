# Audit of validatedtruth.com

Reviewed October 10, 2026, from the repository that GitHub Pages serves
(`WallyGee353/validatedtruth-site`, branch `main`, folder `/`) and from
the live response headers at `https://validatedtruth.com/`.

This file describes the site as it was, then lists what the redesign
changed and what still has to come from Wayne Woodward. It does not
change DNS or the GitHub Pages settings.

## How the site is deployed

It is a static site. There is no build step, no framework, and no
server-side code. GitHub Pages (legacy build) publishes the repository
root from `main`.

Confirmed from the GitHub Pages API, not changed by this work:

- Public URL: `https://validatedtruth.com/`
- Custom domain file: `CNAME` contains `validatedtruth.com`
- HTTPS is enforced. The certificate covers `validatedtruth.com` and
  `www.validatedtruth.com` and was listed as approved through
  December 19, 2026.
- `www` is on the certificate. The setup guide points `www` at GitHub
  with a CNAME at Porkbun, and the bare domain at GitHub’s four A
  records (`185.199.108.153`–`185.199.111.153`).
- A live request returned `server: GitHub.com`, `cache-control: max-age=600`,
  and HTTP 200 for the home page.
- There was no `404.html`, so GitHub’s generic 404 was in use
  (`custom_404: false`).
- `assumptionisnotconfirmation.com` is described in `README-SETUP.md` as
  already forwarding here. That forward is DNS, outside this repository,
  and was not re-tested from this audit.

Editing a file and pushing to `main` is what publishes. This revision is
a pull request so that merge, not this audit, is what would update the
live site.

## Structure, before

Eleven public HTML files, plus two folders that were on purpose left
out of the menu.

| Path | Role |
| --- | --- |
| `index.html` | Book landing page. Not a company home page. |
| `preview.html` | Full free prelude, with tappable Yes / Maybe / No marks |
| `notes/index.html`, `note-001.html`, `note-002.html` | Author’s Notes |
| `buy.html` | Kindle link live. Paperback button went nowhere. |
| `about.html` | Pen-name biography only |
| `privacy.html` | Privacy Promise, including the San Antonio street address |
| `explorations/` | One essay. Not linked from the menu. Six “Image to supply” slots. |
| `reader/index.html` | Prototype gate. `noindex`. Placeholder questions. Not in the menu. |

Shared look: `css/styles.css`, `css/fonts.css`, self-hosted EB Garamond
and Encode Sans Condensed. Assets: `assets/cover.jpg` (1800×2700, 552 KB)
and `assets/prelude-preview.pdf` (592 KB).

There was no contact page, no products page, no Genesis series page,
no books index, no sitemap, and no robots.txt. The same header and
footer were copied into every file. The home page was the book. The
company name appeared in the logo and the copyright line.

## Content

The voice is consistent and worth keeping: short sentences, no hype,
“you read, you decide,” Scripture from the public-domain World English
Bible, and a clear split between the book (no position) and the Author’s
Notes (the author does have a conclusion, and says so).

Facts already on the site, and kept:

- 155 claims, 887 questions, 3,126 checkboxes, 316 pages, 6×9 paperback
- Kindle $9.99, listed as included in Kindle Unlimited; paperback $19.99
- Paperback ISBN 979-8-9960288-0-1
- Kindle ASIN already linked: B0H6KM5ST9
- Isaiah 8:20 as the banner quotation
- The Bible-study origin, thirty years of reading, his wife’s request,
  and her death
- Trademarks: The Thinker with Headlamp, “Assumption Is Not Confirmation,”
  “Are You an Assumer or Confirmer?”, “I’m a Confirmer”
- WallyGee as a publishing imprint of Validated Truth, LLC
- Address: 9110 N Loop 1604 W, Ste 104, San Antonio, TX 78249
- Email policy, once a list exists: about four messages a year, never
  sold, unsubscribe in every message

What the old pages did not say, and a visitor could not find:

- That Wally Gee is Wayne Woodward
- That he is 71, founded Woodward Drilling in 1990, and is building
  verified-truth tools
- That a multi-volume Genesis series is underway (Note 002 mentions
  “the next book,” not a series, and not a place to ask for news)
- ValidatorPro, Confirmer as a product, or a family financial-planning
  workbook. The footer only said “Reader Tallies · The ValidatedTruth
  Validator · The Store.”

The home page also printed the email promise twice, in a section that
stayed hidden until `data-endpoint` was filled in. A visitor never saw
it. The setup guide still told Wayne to edit `index.html` for that.

No testimonials and no traffic numbers were on the site. None were added.

## Broken and weak links

- `buy.html` paperback button: `href="#"`, label “Available shortly,”
  with a TODO to paste the Amazon address. The Kindle button was already
  `https://www.amazon.com/dp/B0H6KM5ST9`. The paperback ASIN is
  B0HCX6V38Q. That dead `#` was the one real broken control.
- Every other in-site `href` pointed at a file that exists (home, preview,
  notes, about, privacy, the PDF, the two notes, the exploration).
- `explorations/` and `reader/` were reachable only by typing the URL.
  That was intentional, and it is still the case. The explorations essay
  is not ready: six image slots are empty, and the folder note says the
  WEB verses still need a diff against ebible.org before the essay is
  linked.
- The reader gate’s four questions begin with “EDIT ME.” Linking that
  page would publish a door with the answers in the source.

## SEO

Present before: a unique `<title>`, a meta description, `lang="en"`,
and a viewport on every page. The reader page was `noindex`.

Missing before:

- Canonical URLs
- Open Graph title, description, URL, and image
- Twitter card tags
- `sitemap.xml` and `robots.txt`
- A favicon
- Structured data for the company or the book
- A company-level title. The home title was only the book title, so a
  search result did not say what Validated Truth is.

The cover is a portrait (1800×2700). A link preview that expects a wide
image will crop it. A landscape share image was not on hand, so this
revision uses the cover and a small Twitter `summary` card rather than
inventing a banner.

## Mobile

The viewport was set, and the layout did collapse to one column under
760px. That was not enough once the menu was considered:

- Five text links with wide letter-spacing wrapped under the logo, or
  sat on top of the headline, on a phone. There was no menu button.
- The cover was pulled above the headline (`order: -1`), so the first
  thing on a phone was the picture, not the sentence.
- The preview tally is a four-column table. On a narrow phone it needs
  a horizontal scroll. The page did not give the table a scroll container.
- Touch targets on the Yes / Maybe / No marks were the size of the
  words, below a comfortable 44px.

## Accessibility

Already in good shape: real buttons for the marks (not empty divs),
visible `:focus-visible` outlines, `aria-current` on the active link,
`aria-live` on the home-page reply, alt text on the cover, a
`prefers-reduced-motion` rule, and self-hosted fonts so a failed font
request cannot blank the page.

Gaps:

- No “skip to content” link. A keyboard user tabbed through the whole
  menu on every page.
- The email field, when revealed, had a placeholder and no `<label>`.
- Preview marks did not set `type="button"` or `aria-pressed`. Outside
  a form that is mostly harmless; the state was still only visual.
- Secondary text (`#99938A` on `#0B0A08`) measured about 6.5:1, which
  clears WCAG AA. It is still dim for an older reader. Cover gold
  `#C9A227` on the same black measured about 8.2:1.
- Gold links inside the white preview pages would have failed contrast.
  Those pages had almost no in-text links; the closing “Get the book”
  button was painted by hand so it stayed readable.

## Speed

What is already fast: no framework, no analytics, no cookie banner, no
third-party fonts, HTML that is kilobytes except the prelude.

What costs the first view:

| File | Size |
| --- | --- |
| `assets/cover.jpg` | 552 KB, shown at about 340px wide |
| Eight `.woff2` files | about 830 KB on disk; a page downloads the weights it uses |
| `assets/prelude-preview.pdf` | 592 KB, downloaded only if asked |
| `preview.html` | the long page, because the chapter is in the HTML on purpose |

GitHub Pages caches responses for about ten minutes (`max-age=600`).
There is no image `width`/`height`, so the cover could shove the text
down after it arrived. There is no font preload.

A display copy of the cover at 900×1350 is about 127 KB. The original
stays in `assets/cover.jpg` for the link preview.

## What this revision changes

The palette, the type, the prelude, both notes, the exploration, and
the reader prototype are still the same words. The menu, the home page,
and the missing company pages are new.

- Home is the company: the tagline, the book, the series, the tools,
  and a short about.
- `books.html` sells the Kindle (B0H6KM5ST9) and the paperback
  (B0HCX6V38Q). `buy.html` only redirects there, and is `noindex`, so
  old bookmarks still work.
- `genesis.html` describes the series without inventing volume titles,
  points at Note 002, and shows an email box that is switched off.
- `products.html` has coming-soon cards for ValidatorPro, Confirmer,
  and the family workbook, each marked not legal or financial advice.
- About names Wayne Woodward, age 71, Woodward Drilling (1990), and the
  tools, and keeps the original “reader with a headlamp” story.
- Contact prints the address already on the Privacy Promise and does
  not pretend to have a working form.
- Every public page has a canonical URL, Open Graph tags, and a Twitter
  card. `sitemap.xml`, `robots.txt` (the reader prototype is disallowed),
  `favicon.svg`, and a real `404.html` are in the root.
- Organization and Book structured data are on the home and books pages.
  Person data is on About. Prices are not in the structured data, so a
  stale number is not handed to search engines. The visible prices are
  the ones that were already printed, with a note to confirm them.
- Phone menu, skip link, labels, larger tap targets, a lighter secondary
  color (`#C2B9AC`, about 10:1 on the ink), and `width`/`height` on the
  cover.
- `CNAME` was not edited. The DNS steps in `README-SETUP.md` were not
  edited.

Explorations stay unlinked. The reader prototype stays unlinked and
`noindex`. Their menus were updated so a person who has the URL is not
looking at the old five-link bar.

## Price check, October 12, 2026

Read from Amazon that day. Not copied from the old site.

- Paperback, ASIN B0HCX6V38Q, `https://www.amazon.com/dp/B0HCX6V38Q`:
  **$19.99**, in stock, ISBN-13 979-8996028801, 316 pages, publication
  date July 26, 2026. The same paperback was the only hit in an Amazon
  search for ISBN 9798996028801, also at $19.99.
- Kindle, ASIN B0H6KM5ST9: `https://www.amazon.com/dp/B0H6KM5ST9` and
  the ebook-style address both returned “not found.” No Kindle price
  was on the paperback page, and the ISBN search did not list a Kindle
  edition. The site no longer prints a Kindle price, and it no longer
  says the book is in Kindle Unlimited.

## What Wayne still needs to supply

Must, before a publish OK:

1. Genesis volume titles, in order. The lines on `genesis.html` are
   blanks, not names.
2. The public contact email. The contact page shows
   `[public contact email]` until he replaces it.
3. His own OK to publish. This pull request is not merged.

Optional, and not required for that OK: a Mailchimp or Buttondown
address for the Genesis form, a phone number, product wording, a photo,
a wide share image, a working Kindle URL if the ASIN above should stay,
exploration images, and real questions before the readers’ room is
linked.
