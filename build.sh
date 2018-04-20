#!/bin/sh

set -e

usage()
{
    echo "Usage: $0 [options]"
    echo
    echo "Options:"
    echo "  -c, --clean          perform a clean build"
    echo "  -d, --debug          build a debug build (default)"
    echo "  -h, --help           print help and exit"
    echo "  -r, --release        build a release build"
    echo "  --skip-tests         skip running tests as part of build"
    echo "  --publish            publish the build package"
    exit 1
}

CLEAN_BUILD=0
BUILD_TYPE=Debug
SKIP_TESTS=0
PUBLISH=0

while :; do
    if [ $# -le 0 ]; then
        break
    fi

    lowerI="$(echo $1 | awk '{print tolower($0)}')"
    case $lowerI in
        -c|--clean)
            CLEAN_BUILD=1
            ;;

        -d|--debug)
            BUILD_TYPE=Debug
            ;;

        -\?|-h|--help)
            usage
            exit 1
            ;;

        -r|--release)
            BUILD_TYPE=RelWithDebInfo
            ;;

        --skip-tests)
            SKIP_TESTS=1
            ;;

        --publish)
            PUBLISH=1
            ;;

        *)
            echo "Unrecognized option $1"
            exit 1
            ;;
    esac

    shift
done

if [ $PUBLISH -eq 1 ]; then
  if [ "$BUILD_TYPE" != "RelWithDebInfo" ]; then
    echo Will not publish unless building a release version.
    exit 1
  fi

  if [ $CLEAN_BUILD -ne 1 ]; then
    echo Will not publish unless performing a clean build.
    exit 1
  fi

  if [ $SKIP_TESTS -eq 1 ]; then
    echo Will not publish if unit tests were skipped.
    exit 1
  fi
fi

PROJECT_BASE_DIR=${PWD}
TARGET_DIR=target/${BUILD_TYPE}

echo "Building streaming-percentiles with the following settings:"
echo "  Build type: ${BUILD_TYPE}"
echo "  Clean build: ${CLEAN_BUILD}"
echo "  Skip tests: ${SKIP_TESTS}"
echo "  Target directory: ${TARGET_DIR}"
echo "  Publish: ${PUBLISH}"
echo

if [ $CLEAN_BUILD -eq 1 ]; then
  rm -rf ${TARGET_DIR}
fi
if [ ! -d ${TARGET_DIR} ]; then
  mkdir -p ${TARGET_DIR}
fi
cd ${TARGET_DIR}
cmake -DCMAKE_BUILD_TYPE=${BUILD_TYPE} ${PROJECT_BASE_DIR}
cmake --build .
if [ $SKIP_TESTS -eq 0 ]; then
  env CTEST_OUTPUT_ON_FAILURE=1 ctest
fi
cpack

if [ $PUBLISH -eq 1 ]; then
  echo Publishing to NPM...
  ( cd js/src/npm_package && npm publish )
fi
