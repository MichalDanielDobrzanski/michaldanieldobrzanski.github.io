# Writing style

- Never use em dashes or en dashes anywhere on this site: pages, titles, meta tags,
  manifest, README, commit messages. Always use a plain hyphen "-" instead.
- `scripts/check-dashes.sh` enforces this; the deploy workflow runs it on every push
  and fails the deploy if a dash slipped in. Run it before pushing.
