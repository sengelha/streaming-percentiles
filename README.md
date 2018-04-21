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

### Usage Notes

- Every algorithm inherits from the interface `stmpct_alg`
  which defines two methods: `void insert(double value)`
  and `double quantile(double phi)`.

#### C++

- All include files are in the directory `stmpct/`
- All classes are in the `stmpct` namespace.

#### JavaScript

- For backwards-compatibility reasons, all class names are
  capitalized.

### interface stmpct_alg

Defines the interface that all streaming percentile algorithms
must implement.

### void *stmpct_alg*.insert(double *value*)

Logs the observation of a value.

#### C++ Example

```cpp
stmpct_alg* alg = ...;
alg->insert(rand());
```

#### JavaScript Example

```javascript
var alg = ...;
alg.insert(Math.random());
```

### double *stmpct_alg*.quantile(double *phi*)

Compute the approximate quantile at *phi*.  For example, the 95th
percentile corresponds to *phi* = 0.95.

#### C++ Example

```cpp
stmpct_alg* alg = ...;
var p50 = alg->quantile(0.5);
```

#### JavaScript Example

```javascript
var alg = ...;
var p50 = alg.quantile(0.5);
```

### class gk(double *epsilon*)

Implements the Greenwald-Khanna streaming percentile algorithm
with allowable error *epsilon*.

#### C++ Example

```cpp
#include <stmpct/gk.hpp>
stmpct::gk g(0.1);
```

#### JavaScript Example

```javascript
var sp = require('streaming-percentiles');
var gk = new sp.GK(0.1);
```

### class ckms_uq(double *epsilon*)

Implements the Cormode-Korn-Muthukrishnan-Srivastava algorithm
for uniform percentiles with allowable error *epsilon*.

#### C++ Example

```cpp
#include <stmpct/ckms_uq.hpp>
stmpct::ckms_uq c(0.1);
```

#### JavaScript Example

```javascript
var sp = require('streaming-percentiles');
var gk = new sp.CKMS_UQ(0.1);
```

### class ckms_lbq(double *epsilon*)

Implements the Cormode-Korn-Muthukrishnan-Srivastava algorithm
for low-biased quantiles with allowable error *epsilon*.

#### C++ Example

```cpp
#include <stmpct/ckms_lbq.hpp>
stmpct::ckms_lbq c(0.1);
```

#### JavaScript Example

```javascript
var sp = require('streaming-percentiles');
var gk = new sp.CKMS_LBQ(0.1);
```

### class ckms_hbq(double *epsilon*)

Implements the Cormode-Korn-Muthukrishnan-Srivastava algorithm
for high-biased quantiles with allowable error *epsilon*.

#### C++ Example

```cpp
#include <stmpct/ckms_hbq.hpp>
stmpct::ckms_hbq c(0.1);
```

#### JavaScript Example

```javascript
var sp = require('streaming-percentiles');
var gk = new sp.CKMS_HBQ(0.1);
```

### class ckms_tq(vector<targeted_quantile> *tqs*)

Implements the Cormode-Korn-Muthukrishnan-Srivastava algorithm
for the provided set of targeted quantiles *tqs*.  Each
targeted quantile is the combination of a quantile *phi* and
allowable error *epsilon*.

#### C++ Example

```cpp
#include <stmpct/ckms_tq.hpp>
std::vector<targeted_quantile> tqs;
tqs.emplace_back(0.125, 0.02);
tqs.emplace_back(0.375, 0.02);
tqs.emplace_back(0.75, 0.04);
tqs.emplace_back(0.875, 0.01);
ckms_tq c(tqs);
```

#### JavaScript Example

```javascript
var sp = require('streaming-percentiles');
var tqs = [
    { phi: 0.125, epsilon: 0.02 },
    { phi: 0.375, epsilon: 0.02 },
    { phi: 0.75, epsilon: 0.04 },
    { phi: 0.875, epsilon: 0.01 }
];
var c = new sp.CKMS_TQ(tqs);
```

## License

This project is licensed under the MIT License.  See
[LICENSE](LICENSE) for more information.

## Contributing

If you are interested in contributing to the library, please see
[CONTRIBUTING.md](CONTRIBUTING.md).
