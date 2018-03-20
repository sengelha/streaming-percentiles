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
4. Merge all changes to the `master` branch
5. Tag the release (e.g. `git tag vX.Y.Z`)
6. Push the changes and the tag to `origin` (e.g. `git push && git push
   --tags`)
7. Create the release on GitHub and add release notes
