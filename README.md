# streaming-percentiles-cpp

This is a C++ library with implementations of various
percentile algorithms on streams of data.  These algorithms all
calculate only approximate percentiles, not exact percentiles.

For more on streaming percentiles, see [Calculating Percentiles on
Streaming Data](https://stevenengelhardt.com/post-series/calculating-percentiles-on-streaming-data-2018/).

## Compiling

Use `build.sh` on Linux or Mac OS X or `build.bat` on Windows.

### Prerequisites

- [CMake](https://cmake.org)
- [Boost Unit Test Framework](http://www.boost.org)

## Example

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

