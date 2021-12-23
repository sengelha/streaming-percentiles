#!/bin/bash

set -euo pipefail

# OS X doesn't have readarray
if ! type -t readarray >/dev/null; then
  # Very minimal readarray implementation using read. Does NOT work with lines that contain double-quotes due to eval()
  readarray() {
    local cmd
    local opt=""
    local t
    local v=MAPFILE
    while [ $# -gt 0 ]; do
      case "$1" in
      -h|--help) echo "minimal substitute readarray for older bash"; exit; ;;
      -r) shift; opt="$opt -r"; ;;
      -t) shift; t=1; ;;
      -u) 
          shift; 
          if [ -n "$1" ]; then
            opt="$opt -u $1"; 
            shift
          fi
          ;;
      *)
          if [[ "$1" =~ ^[A-Za-z_]+$ ]]; then
            v="$1"
            shift
          else
            echo -en "${C_BOLD}${C_RED}Error: ${C_RESET}Unknown option: '$1'\n" 1>&2
            exit
          fi
          ;;
      esac
    done
    cmd="read $opt"
    eval "$v=()"
    while IFS= eval "$cmd line"; do      
      line=$(echo "$line" | sed -e "s#\([\"\`]\)#\\\\\1#g" )
      eval "${v}+=(\"$line\")"
    done
  }
fi

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
readarray -t ACTUAL_FILES < <(tar -tzf $TAR_FILE | sed -e 's#^./##')

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