# michaldanieldobrzanski.github.io

The web home for Oscillator's mobile apps — landing pages, privacy policies and
terms — served at <https://michaldanieldobrzanski.github.io/>.

It is a [Create React App](https://github.com/facebook/create-react-app) that
provides the root site and the Planter pages, plus **static per-app sites** under
`public/<app>/`. Everything is built and published to GitHub Pages by a GitHub
Actions workflow on every push to `main`.

## URL map

| Path | Served by | Notes |
| --- | --- | --- |
| `/` | React (`src/pages/Home.js`) | landing, links to each product |
| `/planter/privacypolicy`, `/planter/termsandconditions`, `/planter/delete` | static `public/planter/*.html` | referenced by the Planter store listing — kept as static files so they return a real `200` |
| `/contact` | React route | |
| `/hourglass/` (`privacy.html`, `terms.html`, `index.html`) | static `public/hourglass/` | Hourglass (Clepsydra) site; this is the app's `SITE_URL` |
| `/lumen/` | static `public/lumen/` | Lumen marketing + legal site |
| `/app-ads.txt` | static `public/app-ads.txt` | AdMob authorized sellers — **must** stay at the root |
| `/.well-known/assetlinks.json`, `/.well-known/apple-app-site-association` | static `public/.well-known/` | Planter Android/iOS deep-link association — **must** stay at the root |

## Deployment

GitHub Pages is configured with **Source = GitHub Actions** (not "Deploy from a
branch"). The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
runs on every push to `main`:

1. `npm ci`
2. `npm run build` (with `CI=false` so lint warnings don't fail the build)
3. uploads `build/` as a Pages artifact and deploys it

The Actions pipeline serves the artifact verbatim (no Jekyll processing), so the
`.well-known` dotfile directory and `app-ads.txt` survive. **Do not switch the
Pages source back to a branch** without adding a `.nojekyll` file, or `.well-known`
will be stripped.

To deploy: merge/push to `main` and watch the **Actions** tab.

## Local development

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build into build/
```

## Adding or updating a product page

Drop a self-contained static site (relative asset paths) into `public/<app>/` and
push to `main`. Each app's own repo can automate this — e.g. Hourglass ships a
`site/publish.sh` that clones this repo, copies its `site/` into
`public/hourglass/`, commits and pushes `main` (the Actions workflow does the
deploy).

Keep store-/app-referenced legal URLs as **static files** (real `200`s) rather than
React routes: a client-side route only returns `200` after a JS redirect (via
`public/404.html`), which a non-JS validator would see as a `404`.

## History

The site previously ran on Jekyll (served from the `jekyll` branch); that content
has been superseded by this app. The legacy `jekyll` and `gh-pages` branches are no
longer the Pages source.
