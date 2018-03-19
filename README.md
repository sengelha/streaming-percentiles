# streaming-percentiles-cpp

This is a C++ library with implementations of various
percentile algorithms on streams of data.  Using the
magic of [emscripten](https://github.com/kripken/emscripten),
this package also cross-compiles a JavaScript version of
the streaming percentiles library as well.

For more on streaming percentiles, see [Calculating Percentiles on
Streaming Data](https://stevenengelhardt.com/post-series/calculating-percentiles-on-streaming-data-2018/).

## Using the Library

### Compiling

Use `build.sh` on Linux or Mac OS X or `build.bat` on Windows.  This will
create a package in the `target` directory, e.g.
`target/Debug/streaming_percentiles-x.y.z-Darwin.tar.gz` for Mac OS X.

Be sure to read the build help text first (e.g. `build.sh --help`).

#### Prerequisites

- [CMake](https://cmake.org)
- [Boost Unit Test Framework](http://www.boost.org)
- If cross-compiling to JavaScript, [Emscripten](https://github.com/kripken/emscripten)

### Example

#### C++

Here's a simple example on how to use the Greenwald-Khanna streaming
percentile algorithm from C++:

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

#### JavaScript

Here's the same example from JavaScript:
```javascript
var sp = require('./streamingPercentiles.v1.min.js');

var epsilon = 0.1;
var g = new sp.GK(epsilon);
for (var i = 0; i < 1000; ++i)
    g.insert(Math.random());
var p50 = g.quantile(0.5); // Approx. median
var p95 = g.quantile(0.95); // Approx. 95th percentile
```

### API Reference

Coming soon!

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
2. Update `README.md` if necessary
3. Update the version fields in `CMakeLists.txt`
4. Merge all changes to the `master` branch
5. Tag the release (e.g. `git tag vX.Y.Z`)
6. Push the changes and the tag to `origin` (e.g. `git push && git push --tags`)
7. Create the release on GitHub and add release notes