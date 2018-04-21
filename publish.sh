#!/bin/sh
#
# publish.sh: Build and publish a release for a given tag.

set -e

usage()
{
    echo "Usage: $0 TAG_NAME"
    exit 1
}

if [ $# -ne 1 ]; then
  usage
fi

TAG_NAME=$1

echo Deleting target/publish_root...
rm -rf target/publish_root
echo Creating target/publish_root...
mkdir -p target/publish_root
echo Cloning streaming-percentiles-cpp.git...
cd target/publish_root
git clone https://github.com/sengelha/streaming-percentiles-cpp.git
cd streaming-percentiles-cpp
echo Checking out tag $TAG_NAME...
git checkout tags/$TAG_NAME
echo Building package...
./build.sh --release --clean

# TODO: Create github release if it doesn't exist
# TODO: Copy built binary to github release page
# TODO: Copy JS to sengelha.github.io
# TODO: Run npm publish
#  echo Publishing to NPM...
#  -  ( cd js/src/npm_package && npm publish )

