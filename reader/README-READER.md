# Readers' Room — your Phase 3 reminder

This folder is a **working prototype** of the reader gate we talked
through. It is here so you have it as your own reminder, ready for when
you build the real reader area. It is **not linked** from the main site
menu (same as the `explorations/` folder) — only someone with the URL
`/reader/` can reach it. Link it whenever you're ready.

## What it does (the flow you decided on)

1. A visitor opens the page.
2. **One random question from the book** appears.
3. They type the answer (from their copy of the book).
4. If it matches, the gate opens and the room shows.
5. This browser quietly remembers them, so they're **not asked again
   on this device**. No code, nothing to keep — just the browser
   holding a flag to itself.
6. There's a "Sign out of this browser" button that clears that flag
   and re-asks next time (handy for testing).

The **question is the key.** There is no separate code — we settled on
that. The answer coming from the book is the whole proof.

## The only part you edit: the questions

Open `index.html`, scroll to the `QUESTIONS` list near the bottom.
The four in there now are **PLACEHOLDERS** — replace them with real
questions from your book before you link this page anywhere.

Rules that make good questions:

- **Key to stable anchors**, not page numbers. Kindle reflows, so
  "page 214" is a different place on every device. Use things that are
  the same in print AND Kindle: the 155 claim numbers, chapter or
  section headings, the fixed sequence, the trademark phrase.
- **List a few accepted spellings** in the `a: [...]` array so honest
  readers aren't tripped by formatting. Matching already ignores
  capital letters, spaces, and punctuation ("Deut. 13" = "deut 13").
- **Keep a pool and rotate it.** More questions = harder for anyone to
  leak the whole set. Every so often, swap some out.

## The honest limits (so the brand stays clean)

- This is a **deterrent, not a wall.** The answers live in the page's
  code, so anyone who "views source" can read them. That's fine — the
  job is belonging and keeping drive-by non-readers out, not secrecy.
- **Don't put anything genuinely private behind it.** Real privacy
  (one person, one verified account) needs a server and logins — a
  much bigger build, not needed now.
- The browser flag is **localStorage — not a cookie, not a tracker.**
  It never leaves the browser and sends nothing anywhere, so it keeps
  your "no cookies, no trackers" promise intact.
- "Answer once, ever, on any device" would require accounts. As built,
  it's "answer once **per browser**" — clearing the browser re-asks
  once. For a social gate that's the right trade: no login system, and
  the rare re-ask is just the book proving the reader is still the
  reader.

## When you're ready to go live with it

1. Replace the placeholder questions with real ones.
2. Replace the placeholder room content (the "Welcome in" section) with
   the actual reader features when they exist.
3. Decide where to link it — e.g. a small "Readers' Room" link in the
   footer or on the Author's Notes page.
4. It deploys with the rest of the site automatically; it's already
   inside the site folder.
