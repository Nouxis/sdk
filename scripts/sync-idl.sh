#!/bin/bash
# Sync IDL files from program build output into SDK
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SDK_DIR="$(dirname "$SCRIPT_DIR")"
PROGRAM_DIR="$SDK_DIR/../../program"

echo "Syncing IDL from $PROGRAM_DIR/target/ to $SDK_DIR/src/idl/"

cp "$PROGRAM_DIR/target/idl/Nouxis.json" "$SDK_DIR/src/idl/Nouxis.json"
cp "$PROGRAM_DIR/target/types/Nouxis.ts" "$SDK_DIR/src/idl/Nouxis.ts"

echo "Done."
