#!/usr/bin/env bash
set -euo pipefail
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ "${SITES_ENV_READY:-}" != "1" ]]; then exec "${script_dir}/sites-env.sh" -- "$0" "$@"; fi
worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"
[[ -f "${worker}" ]] || { echo "Missing Sites Worker entry." >&2; exit 66; }
[[ -f "${hosting}" ]] || { echo "Missing packaged Sites manifest." >&2; exit 66; }
node --input-type=module - "${worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
const [workerPath, hostingPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));
const worker = await import(pathToFileURL(workerPath).href + `?validation=${Date.now()}`);
if (!worker.default || typeof worker.default.fetch !== "function") throw new Error("Invalid worker export");
NODE
echo "Validated Sites artifact."
