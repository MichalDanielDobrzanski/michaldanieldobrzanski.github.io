#!/usr/bin/env bash
# Writing rule: no em dashes (U+2014) or en dashes (U+2013) anywhere on the site.
# Use a plain hyphen "-" instead. Run before pushing; the deploy workflow runs it too.
set -euo pipefail
cd "$(dirname "$0")/.."

if find public README.md -type f \
    \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.json' -o -name '*.txt' -o -name '*.md' -o -name '*.xml' \) -print0 \
  | xargs -0 perl -CSD -ne 'if (/\x{2013}|\x{2014}/) { print "$ARGV:$.: $_"; $bad = 1 } close ARGV if eof; END { exit($bad ? 1 : 0) }'; then
  echo "OK: no em or en dashes."
else
  echo "Em or en dashes found (listed above). Replace each with a plain hyphen." >&2
  exit 1
fi
