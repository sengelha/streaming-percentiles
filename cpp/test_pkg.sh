#!/usr/bin/env bash

set -euo pipefail

PKG_FILE=cpp/pkg.tar.gz

if [[ ! -r $PKG_FILE ]]; then
  echo "ERROR: Could not find package file $PKG_FILE" 1>&2
  exit 1
fi

EXPECTED_FILES=(
  ./
  ./include/
  ./include/stmpct/
  ./include/stmpct/binary_tree.hpp
  ./include/stmpct/ckms_hbq.hpp
  ./include/stmpct/ckms_impl.hpp
  ./include/stmpct/ckms_lbq.hpp
  ./include/stmpct/ckms_tq.hpp
  ./include/stmpct/ckms_uq.hpp
  ./include/stmpct/gk.hpp
  ./include/stmpct/qdigest.hpp
  ./include/stmpct/string_utils.hpp
  ./include/stmpct/targeted_quantile.hpp
)
ACTUAL_FILES=($(tar tzf $PKG_FILE))

MISSING_FILES=$(comm -13 <(printf '%s\n' "${ACTUAL_FILES[@]}" | sort) <(printf '%s\n' "${EXPECTED_FILES[@]}" | sort))
if [[ ! -z "$MISSING_FILES" ]]; then
  echo "ERROR: Following expected files are missing: $MISSING_FILES" 1>&2
  exit 1
fi

EXTRA_FILES=$(comm -23 <(printf '%s\n' "${ACTUAL_FILES[@]}" | sort) <(printf '%s\n' "${EXPECTED_FILES[@]}" | sort))
if [[ ! -z "$EXTRA_FILES" ]]; then
  echo "ERROR: Following unexpected files were in package: $EXTRA_FILES" 1>&2
  exit 1
fi
