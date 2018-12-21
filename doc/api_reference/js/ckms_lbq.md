# streamingPercentiles.CKMS_LBQ

`streamingPercentiles.CKMS_LBQ` is a JavaScript class which implements the
Cormode-Korn-Muthukrishnan-Srivastava streaming percentile algorithm for
low-biased quantiles from CKMS05.

## Methods

| Function | Description |
| -------- | ----------- |
| `CKMS_LBQ(epsilon: number)` (constructor) | Creates a data structure that can answer approximte high-biased quantile queries about a sequence to within a precision of +/- `epsilon` * `phi` * N. |
| `insert(v: number)` | Inserts a measurement into the data structure. |
| `quantile(phi: number) : number` | Calculate the `epsilon`-approximate `phi`-quantile for the sequence. |

## Example

### Node.JS

```javascript
var sp = require('streaming-percentiles');

var epsilon = 0.1;
var c = new sp.CKMS_LBQ(epsilon);
for (var i = 0; i < 1000; ++i)
    c.insert(Math.random());
var p50 = c.quantile(0.5); // Approx. median
var p95 = c.quantile(0.95); // Approx. 95th percentile
```

### Browser

```html
<script src="//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js"></script>
<script>
var epsilon = 0.1;
var c = new streamingPercentiles.CKMS_LBQ(epsilon);
for (var i = 0; i < 1000; ++i)
    c.insert(Math.random());
var p50 = c.quantile(0.5); // Approx. median
var p95 = c.quantile(0.95); // Approx. 95th percentile
</script>
```

## References

CKMS05: G. Cormode, F. Korn, S. Muthukrishnan and D. Srivastava. Effective Computation of Biased Quantiles over Data Streams. In _Proceedings of the 21st International Conference on Data Engineering_, pages 20-31, 2005.