#!/usr/bin/env bash
set -euo pipefail
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ "${SITES_ENV_READY:-}" != "1" ]]; then exec "${script_dir}/sites-env.sh" -- "$0" "$@"; fi
vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
[[ -x "${vinext}" ]] || { echo "Vinext is unavailable. Install dependencies first." >&2; exit 69; }
timeout --signal=TERM --kill-after=10s 3m "${vinext}" build
"${script_dir}/validate-artifact.sh"
