# streamingPercentiles.CKMS_TQ

`streamingPercentiles.CKMS_TQ` is a JavaScript class which implements the
Cormode-Korn-Muthukrishnan-Srivastava streaming percentile algorithm for
targeted quantiles from CKMS05.

## Types

```javascript
class targeted_quantile
{
    phi: number;
    epsilon: number;
}
```

`targeted_quantile` is a plain-old-data (POD) type for storing information about a targeted quantile.
It is represented as a simple object `{phi: x, epsilon: y}`.

## Methods

| Function | Description |
| -------- | ----------- |
| `CKMS_TQ(tqs: targeted_quantile[])` (constructor) | Creates a data structure that can answer approximte targeted quantile queries about a sequence using a collection of `targeted_quantile` objects. |
| `insert(v: number)` | Inserts a measurement into the data structure. |
| `quantile(phi: number) : number` | Calculate the `epsilon`-approximate `phi`-quantile for the sequence. |

## Example

### Node.JS

```javascript
var sp = require('streaming-percentiles');

var tqs = [
    { phi: 0.125, epsilon: 0.02 },
    { phi: 0.375, epsilon: 0.02 },
    { phi: 0.75, epsilon: 0.04 },
    { phi: 0.875, epsilon: 0.01 }
];
var c = new sp.CKMS_TQ(tqs);
for (var i = 0; i < 1000; ++i)
    c.insert(Math.random());
var p50 = c.quantile(0.5); // Approx. median
var p95 = c.quantile(0.95); // Approx. 95th percentile
```

### Browser

```html
<script src="//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js"></script>
<script>
var tqs = [
    { phi: 0.125, epsilon: 0.02 },
    { phi: 0.375, epsilon: 0.02 },
    { phi: 0.75, epsilon: 0.04 },
    { phi: 0.875, epsilon: 0.01 }
];
var c = new streamingPercentiles.CKMS_TQ(tqs);
for (var i = 0; i < 1000; ++i)
    c.insert(Math.random());
var p50 = c.quantile(0.5); // Approx. median
var p95 = c.quantile(0.95); // Approx. 95th percentile
</script>
```

## References

CKMS05: G. Cormode, F. Korn, S. Muthukrishnan and D. Srivastava. Effective Computation of Biased Quantiles over Data Streams. In _Proceedings of the 21st International Conference on Data Engineering_, pages 20-31, 2005.