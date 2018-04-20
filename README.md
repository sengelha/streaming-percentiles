# streaming-percentiles

This is a cross-pltaform library with implementations of various
percentile algorithms on streams of data.  For more on streaming
percentiles, see [Calculating Percentiles on Streaming
Data](https://stevenengelhardt.com/post-series/calculating-percentiles-on-streaming-data-2018/).

The library supports the following languages:
- C++
- JavaScript

## Obtaining the Library

### C++
Download the latest release binaries or source code from the
[latest release](https://github.com/sengelha/streaming-percentiles-cpp/releases/latest)
page.

### JavaScript
If you use NPM, `npm install streaming-percentiles`. Otherwise, download
the latest release binaries or source code from the
[latest release](//github.com/sengelha/streaming-percentiles-cpp/releases/latest)
page.

For convenience, you can also use the latest release binaries directly
from `sengelha.github.io`:

```html
<script src="//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js"></script>
<script>
var gk = new streamingPercentiles.GK(0.1);
...
</script>
```

## Usage Example

### C++

Here's an example on how to use the Greenwald-Khanna streaming
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

#### Node.JS

Here's how to use the library from Node.JS:
```javascript
var sp = require('streaming-percentiles');

var epsilon = 0.1;
var g = new sp.GK(epsilon);
for (var i = 0; i < 1000; ++i)
    g.insert(Math.random());
var p50 = g.quantile(0.5); // Approx. median
var p95 = g.quantile(0.95); // Approx. 95th percentile
```

#### Browser

Here's how to use the library from a browser.  Note that the
default module name is streamingPercentiles:
```html
<script src="streamingPercentiles.v1.min.js"></script>
<script>
var epsilon = 0.1;
var gk = new streamingPercentiles.GK(epsilon);
for (var i = 0; i < 1000; ++i)
    g.insert(Math.random());
var p50 = g.quantile(0.5);
</script>
```

## API Reference

Coming soon!

## Contributing

If you are interested in contributing to the library, please see
[CONTRIBUTING.md](CONTRIBUTING.md).
