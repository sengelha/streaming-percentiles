# streamingPercentiles.QDigest

`streamingPercentiles.QDigest` is a class which implements the Q-Digest streaming percentile algorithm
from the paper _Medians and Beyond: New Aggregation Techniques for Sensor Networks_ by 
Shrivastava, Buragohain, Agrawal, and Suri.

## Member functions

| Function | Description |
| -------- | ----------- |
| `QDigest(compression_factor: number)` (constructor) | Creates an algorithm that can answer quantile queries using compression factor `compression_factor` |
| `insert(v: number)` | Inserts a measurement into the data structure. |
| `quantile(phi: number) : number` | Calculate the approximate `phi`-quantile for the sequence. |

## Example

### Node.JS

```javascript
var sp = require('streaming-percentiles');

var epsilon = 0.1;
var q = new sp.QDigest(epsilon);
for (var i = 0; i < 1000; ++i)
    q.insert(1000 * Math.random());
var p50 = q.quantile(0.5); // Approx. median
var p95 = q.quantile(0.95); // Approx. 95th percentile
```

### Browser

```html
<script src="//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js"></script>
<script>
var epsilon = 0.1;
var q = new streamingPercentiles.QDigest(epsilon);
for (var i = 0; i < 1000; ++i)
    q.insert(1000 * Math.random());
var p50 = q.quantile(0.5); // Approx. median
var p95 = q.quantile(0.95); // Approx. 95th percentile
</script>
```