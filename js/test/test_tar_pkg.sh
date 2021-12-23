#!/bin/bash

set -euo pipefail

TAR_FILE=./js/streaming_percentiles-js.tar.gz

if [[ ! -r $TAR_FILE ]]; then
  echo "$TAR_FILE does not exist" 1>&2
  exit 1
fi

EXPECTED_FILES=(
    js/
    js/streamingPercentiles.v1.js
    js/streamingPercentiles.v1.min.js
    js/streamingPercentiles.v1.min.js.map
)
mapfile -t ACTUAL_FILES < <(tar -tzf $TAR_FILE | sed -e 's#^./##')

MISSING_FILES=$(comm -13 <(printf '%s\n' "${ACTUAL_FILES[@]}" | sort) <(printf '%s\n' "${EXPECTED_FILES[@]}" | sort))
if [[ ! -z "$MISSING_FILES" ]]; then
  echo "ERROR: Following expected files are missing: $MISSING_FILES" 1>&2
  exit 1
fi

EXTRA_FILES=$(comm -23 <(printf '%s\n' "${ACTUAL_FILES[@]}" | sort) <(printf '%s\n' "${EXPECTED_FILES[@]}" | sort))
if [[ ! -z "$EXTRA_FILES" ]]; then
  echo "ERROR: Following actual files are not in expected list: $EXTRA_FILES" 1>&2
  exit 1
fi