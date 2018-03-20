# streaming-percentiles-cpp

This is a C++ library with implementations of various
percentile algorithms on streams of data.  Using the
magic of [emscripten](https://github.com/kripken/emscripten),
this package also cross-compiles a JavaScript version of
the streaming percentiles library as well.

For more on streaming percentiles, see [Calculating Percentiles on
Streaming Data](https://stevenengelhardt.com/post-series/calculating-percentiles-on-streaming-data-2018/).

## Obtaining the Library

To download pre-built versions of the library, go to the
[streaming-percentiles-cpp releases page](https://github.com/sengelha/streaming-percentiles-cpp/releases).

## Usage Example

### C++

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

### JavaScript

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

## API Reference

Coming soon!

## Contributing

If you are interested in contributing to the library, please see
[CONTRIBUTING.md](CONTRIBUTING.md).
