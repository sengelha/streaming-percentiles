# Contributing to streaming-percentiles

## Compiling

The streaming percentiles library uses [Bazel](https://bazel.build/) to
build.

Once Bazel (or, preferrably, [Bazelisk](https://github.com/bazelbuild/bazelisk))
is installed, build everything with `bazel build //...` and run
all unit tests with `bazel test //...`.

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
10. Build and publish binaries.  For each platform:
    1. Clone the repository (`git clone https://github.com/sengelha/streaming-percentiles.git`)
    2. Change into the cloned folder (`cd streaming-percentiles`)
    3. Checkout the release tag (`git checkout tags/vX.Y.Z`)
    4. Build the package in release mode (`./build.sh --release`)
    5. Upload the built artifact(s) to GitHub
11. Upload the built JS (both minified and unminified) to
    `sengelha.github.io`.
    1. Checkout the sengelha.github.io repository (`git clone https://github.com/sengelha/sengelha.github.io`)
    2. Change into the sengelha.github.io folder (`cd sengelha.github.io`)
    3. Copy the JS files to the `streaming-percentiles` directory
    4. Push the new content to GitHub (`git add -A && git commit && git push`)
12. Publish to NPM.  From the directory `target/Release/js/src/node_package`, run `npm publish`
13. Send out a release announcement.
