# Contributing to streaming-percentiles-cpp

## Compiling

Use `build.sh` on Linux or Mac OS X or `build.bat` on Windows.  This will
create a package in the `target` directory, e.g.
`target/Debug/streaming_percentiles-x.y.z-Darwin.tar.gz` for Mac OS X.

Be sure to read the build help text first (e.g. `build.sh --help`).

### Prerequisites

- [CMake](https://cmake.org)
- [Boost Unit Test Framework](http://www.boost.org)
- If cross-compiling to JavaScript, [Emscripten](https://github.com/kripken/emscripten)

## Versioning Scheme

This project follows [Semantic Versioning 2.0.0](https://semver.org/).
In short:

Given a version number MAJOR.MINOR.PATCH, increment the:
- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

## Branching Model

This project follows Vincent Driessen's [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/).
In short:

- `master` is the main branch where the source code of HEAD always reflects
  a production-ready state.
- `develop` is the main branch where the source code of HEAD always reflects
  a state with the latest delivered development changes for the next release.

## Making a Release

1. Update `CHANGELOG.md` with the latest change information (`git diff
   vX.Y.Z` might be useful here)
2. Update `README.md` if necessary
3. Update the version fields in `CMakeLists.txt`
4. Merge all changes to the `master` branch (i.e. `git checkout master
   && git merge develop`)
5. Checkout `master` (i.e. `git checkout master`)
6. Run `./build.sh --release --clean` and ensure that all unit tests
   pass.
7. Tag the release (e.g. `git tag vX.Y.Z`)
8. Push the changes and the tag to `origin` (e.g. `git push && git push
   --tags`)
9. Create a GitHub release associated with the tag.  Be sure to include
   the changes from `CHANGELOG.md`.
10. For each platform:
    1. Clone the repository (`git clone https://github.com/sengelha/streaming-percentiles-cpp.git`)
    2. Change into the cloned folder (`cd streaming-percentiles-cpp`)
    3. Checkout the release tag (`git checkout tags/vX.Y.Z`)
    4. Build the package in release mode (`./build.sh --release`)
    5. Upload the built artifact(s) to GitHub
11. Upload the built JS (both minified and unminified) to
    sengelha.github.io
12. From the directory `js/src/node_package`, run `npm publish`
