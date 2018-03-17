# streaming-percentiles-cpp

This is a C++ library with implementations of various
percentile algorithms on streams of data.  These algorithms all
calculate only approximate percentiles, not exact percentiles.

For more on streaming percentiles, see [Calculating Percentiles on
Streaming Data](https://stevenengelhardt.com/post-series/calculating-percentiles-on-streaming-data-2018/).

## Using the Library

### Compiling

Use `build.sh` on Linux or Mac OS X or `build.bat` on Windows.  This will
create a package in the `target` directory, e.g.
`target/streaming_percentiles-x.y.z-Darwin.tar.gz` for Mac OS X.

Be sure to read the build help text first (e.g. `build.sh --help`).

#### Prerequisites

- [CMake](https://cmake.org)
- [Boost Unit Test Framework](http://www.boost.org)

### Example

Here's a simple example on how to use the Greenwald-Khanna streaming
percentile algorithm:

```cpp
#include <stmpct/gk.hpp>

using namespace stmpct;

double epsilon = 0.1;
gk g(epsilon);
for (int i = 0; i < 1000; ++i)
    g.insert(rand());
double p50 = g.quantile(0.5); // Approx. median
double p95 = g.quantile(0.95); // Approx. 95th percentile
```

## Contributing to the Library

### Versioning Scheme

This project follows [Semantic Versioning 2.0.0](https://semver.org/).
In short:

Given a version number MAJOR.MINOR.PATCH, increment the:
- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

### Branching Model

This project follows Vincent Driessen's [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/).
In short:

- `master` is the main branch where the source code of HEAD always reflects
  a production-ready state.
- `develop` is the main branch where the source code of HEAD always reflects
  a state with the latest delivered development changes for the next release.

### Making a Release

1. Update `CHANGELOG.md` with the latest change information
2. Update the version fields in `CMakeLists.txt`
3. Merge all changes to the `master` branch
4. Tag the release
5. Push the changes and the tag to `origin`
