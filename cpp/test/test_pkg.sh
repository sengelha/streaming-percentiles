#!/bin/bash

set -euo pipefail

TAR_FILE=./cpp/streaming_percentiles-cpp.tar.gz

if [[ ! -r $TAR_FILE ]]; then
  echo "$TAR_FILE does not exist" 1>&2
  exit 1
fi

EXPECTED_FILES=(
    include/
    include/stmpct/
    include/stmpct/binary_tree.hpp
    include/stmpct/ckms_hbq.hpp
    include/stmpct/ckms_impl.hpp
    include/stmpct/ckms_lbq.hpp
    include/stmpct/ckms_tq.hpp
    include/stmpct/ckms_uq.hpp
    include/stmpct/gk.hpp
    include/stmpct/qdigest.hpp
    include/stmpct/string_utils.hpp
    include/stmpct/targeted_quantile.hpp
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
