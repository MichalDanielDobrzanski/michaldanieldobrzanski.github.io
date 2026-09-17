# michaldanieldobrzanski.github.io

The web home for Oscillator's mobile apps - landing pages, privacy policies and
terms - served at <https://michaldanieldobrzanski.github.io/>.

It is a **plain static site**. Everything lives under [`public/`](public/) and is
published to GitHub Pages by a GitHub Actions workflow on every push to `main`.
There is no build step and no framework - just HTML, CSS and a few assets.

## URL map

| Path | File |
| --- | --- |
| `/` | `public/index.html` (links to each product) |
| `/planter/` | `public/planter/index.html` (landing) |
| `/planter/privacypolicy/`, `/planter/termsandconditions/`, `/planter/delete/` | `public/planter/<name>/index.html` - directory-style so both `/x` and `/x/` resolve; referenced by the Planter store listing |
| `/hourglass/` (`privacy.html`, `terms.html`, `index.html`) | `public/hourglass/` - Hourglass (Clepsydra) site; this is the app's `SITE_URL` |
| `/hourglass/privacypolicy/` | legacy alias of `/hourglass/privacy.html` |
| `/clepsydra/`, `/clepsydra/privacy.html`, `/clepsydra/terms.html` | redirect to the `/hourglass/` equivalents (old store metadata) |
| `/mononote/` | `public/mononote/index.html` (landing) |
| `/mononote/privacy/`, `/mononote/delete-my-data/` | `public/mononote/<name>/index.html` - directory-style; the privacy-policy and data-deletion URLs entered in the Mononote Play Console listing and shipped inside the app |
| `/games/` (`privacy.html`, `terms.html`, `index.html`) | `public/games/` - the ten Oscillator games |
| `/contact/` | `public/contact/index.html` |
| `/app-ads.txt` | `public/app-ads.txt` - AdMob authorized sellers; **must** stay at the root |
| `/.well-known/assetlinks.json`, `/.well-known/apple-app-site-association` | `public/.well-known/` - Planter Android/iOS deep-link association; **must** stay at the root |

`public/assets/site.css` is the shared stylesheet for the Oscillator-family pages
(home, Planter landing/legal, Mononote landing/legal, contact, 404). Hourglass
and Games ship their own styles.

## Deployment

GitHub Pages is configured with **Source = GitHub Actions** (not "Deploy from a
branch"). The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
uploads `public/` as a Pages artifact and deploys it on every push to `main`.

The Actions pipeline serves the artifact verbatim (no Jekyll processing), so the
`.well-known` dotfile directory and `app-ads.txt` survive. **Do not switch the Pages
source to a branch** without adding a `.nojekyll` file, or `.well-known` will be stripped.

To deploy: push to `main` and watch the **Actions** tab.

## Adding or updating a product page

Drop a self-contained static site (relative or root-absolute asset paths) into
`public/<app>/` and push to `main`. Each app's own repo can automate this - e.g.
Hourglass ships a `site/publish.sh` that clones this repo, copies its `site/` into
`public/hourglass/`, commits and pushes `main`.

Keep store-/app-referenced legal URLs as directory-style `index.html` files so both
the slash and no-slash forms return a real `200`.

## History

The site previously ran on Jekyll (the `jekyll` branch) and then briefly on a
Create React App SPA; both have been replaced by this static site. The single
maintained branch is `main`.
