# streaming-percentiles

This is a cross-pltaform library with implementations of various
percentile algorithms on streams of data.  For more on streaming
percentiles, see [Calculating Percentiles on Streaming
Data](//stevenengelhardt.com/post-series/calculating-percentiles-on-streaming-data-2018/).

The library supports the following languages:
- C++
- JavaScript

## Obtaining the Library

### C++

You can download pre-built binaries of the library from the
[streaming-percentiles latest release
page](//github.com/sengelha/streaming-percentiles-cpp/releases/latest).

### JavaScript

If you use NPM, `npm install streaming-percentiles`. Otherwise, download
pre-built binaries of the library from the [streaming-percentiles latest
release
page](//github.com/sengelha/streaming-percentiles-cpp/releases/latest)
page.

For convenience, you can also use the latest release JS directly
from `sengelha.github.io`:

- [Unminified version](//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.js)
- [Minified version](//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js)

### Source Code

You can download the latest release's source code from the
[streaming-percentiles latest release
page](//github.com/sengelha/streaming-percentiles-cpp/releases/latest).

See `CONTRIBUTING.md` for instructions on how to build the release from
source.

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
<script src="//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js"></script>
<script>
var epsilon = 0.1;
var gk = new streamingPercentiles.GK(epsilon);
for (var i = 0; i < 1000; ++i)
    g.insert(Math.random());
var p50 = g.quantile(0.5);
</script>
```

## API Reference

### class GK(*epsilon*)

Construct an object which implements the Greenwald-Khanna streaming
percentile algorithm with allowable error *epsilon*.

#### Example

| C++ | JavaScript |
| --- | ---------- |
| ```cpp
#include <stmpct/gk.hpp>
gk g(0.1);
``` | test |

#### JavaScript Example

```javascript
var sp = require('streaming-percentiles');
var gk = new sp.GK(0.1);
```

### *gk*.insert(*value*)

Logs the observation of a value.

#### JavaScript Example

```javascript
gk.insert(Math.random());
```

### *gk*.quantile(*phi*)

Compute the approximate quantile at *phi*.  For example, the 95th
percentile corresponds to *phi* = 0.95.

#### JavaScript Example

```javascript
var p50 = gk.quantile(0.5);
```

## License

This project is licensed under the MIT License.  See
[LICENSE](LICENSE) for more information.

## Contributing

If you are interested in contributing to the library, please see
[CONTRIBUTING.md](CONTRIBUTING.md).
