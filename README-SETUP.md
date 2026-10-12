# ValidatedTruth.com — Setup Guide

This folder is your complete website. Follow these steps once and the
site is live. Total time: about 30 minutes.

The public pages are Home, Books, the free Preview, the Genesis series,
Products, Author's Notes, About, Contact, and the Privacy Promise.
`buy.html` only sends people to Books, so old links keep working.

Kindle and paperback Amazon links are already filled in on `books.html`:

- Kindle: https://www.amazon.com/dp/B0H6KM5ST9
- Paperback: https://www.amazon.com/dp/B0HCX6V38Q

If a listing address ever changes, edit those two links in `books.html`.
Do not change the `CNAME` file, or the DNS records in Part 2, unless you
mean to move the domain.

---

## BEFORE YOU START — one edit to make

Nothing is required before the book can be linked. Both Amazon buttons
on the Books page already go to the listings above.

The email box on the Genesis page is switched off until you connect it.
See "LATER — optional activations" at the bottom.

---

## PART 1 — Put the site on GitHub Pages (free hosting, ~15 min)

1. Go to **github.com** and create a free account
   (use wayne@cepm.mx; save the password in your password manager)
2. Click the **+** in the top-right corner → **New repository**
3. Repository name: type EXACTLY: `validatedtruth-site`
4. Set it to **Public** → click **Create repository**
5. On the new page, click **"uploading an existing file"**
6. Drag EVERYTHING inside this site folder into the upload box:
   - index.html, preview.html, buy.html, about.html
   - the `css` folder
   - the `assets` folder
7. Click **Commit changes** (green button) and wait for the upload
8. Click **Settings** (top of the repository page) → **Pages**
   (left sidebar)
9. Under "Branch": choose **main**, folder **/ (root)** → **Save**
10. Wait 2 minutes, refresh the page. GitHub shows you a link like
    `https://YOURNAME.github.io/validatedtruth-site/`
    Click it — your website is alive. Check every page.

## PART 2 — Point ValidatedTruth.com at it (~10 min)

11. Still in GitHub Settings → Pages: in the **Custom domain** box,
    type `validatedtruth.com` → **Save**
12. Now open a new tab → **porkbun.com** → log in
13. Find **validatedtruth.com** → click **DNS** (or "DNS Records")
14. DELETE any existing A records or ALIAS/CNAME records for the bare
    domain (these are Porkbun's parking records)
15. ADD these four **A records** (Host/Name field: leave BLANK or "@"):

    | Type | Host | Answer          |
    |------|------|-----------------|
    | A    | (blank) | 185.199.108.153 |
    | A    | (blank) | 185.199.109.153 |
    | A    | (blank) | 185.199.110.153 |
    | A    | (blank) | 185.199.111.153 |

16. ADD one **CNAME record**:

    | Type  | Host | Answer                          |
    |-------|------|---------------------------------|
    | CNAME | www  | YOURNAME.github.io              |

    (replace YOURNAME with your actual GitHub username)

17. Wait 15–30 minutes, then type **validatedtruth.com** in your
    browser. Your site should load.
18. Back in GitHub Settings → Pages: tick **"Enforce HTTPS"**
    (if greyed out, wait an hour and try again — the certificate is
    being issued)

Note: assumptionisnotconfirmation.com already forwards to
validatedtruth.com from the setup we did in April — no changes needed
there.

## PART 3 — Verify (5 min)

- [ ] validatedtruth.com loads the home page
- [ ] All four menu links work
- [ ] The Preview page shows the full readable preview text with tappable
      checkboxes, on your phone AND your computer, and the download
      button works
- [ ] assumptionisnotconfirmation.com redirects to the site
- [ ] The padlock (HTTPS) shows in the browser address bar

---

## LATER — optional activations

**Email list:** create a free Mailchimp (or Buttondown) account → make a
signup form → copy the form's POST URL → open `genesis.html` → find
`data-endpoint=""` → paste the URL between the quotes, and remove
`disabled` from the email box and the Notify button. Until you do that,
the box does not collect an address.

**Updating the site:** edit the file on your computer, then in GitHub
open the same file → click the pencil icon → paste the new content →
Commit. Changes go live in about a minute.

**Coming phases** (the structure is ready for them):
- Author's Notes → new `notes/` folder of pages
- Reader Tallies → form + database (Phase 3)
- Merch store → shop.validatedtruth.com via Printful/Fourthwall

**Fonts:** bundled inside the site (the book's own EB Garamond and
Encode Sans Condensed, open license). No outside font servers, no
tracking — do not re-add Google Fonts links.
