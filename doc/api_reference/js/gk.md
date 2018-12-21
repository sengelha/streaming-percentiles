# streamingPercentiles.GK

`streamingPercentiles.GK` is a class which implements the Greenwald-Khanna streaming percentile algorithm from GK01.

## Member functions

| Function | Description |
| -------- | ----------- |
| `GK(epsilon: number)` (constructor) | Creates a data structure that can answer quantile queries about a sequence to within a precision of `epsilon` * N, where N is the number of elements in the sequence. |
| `insert(v: number)` | Inserts a measurement into the data structure. |
| `quantile(phi: number) : number` | Calculate the `epsilon`-approximate `phi`-quantile for the sequence. |

## Example

### Node.JS

```javascript
var sp = require('streaming-percentiles');

var epsilon = 0.1;
var g = new sp.GK(epsilon);
for (var i = 0; i < 1000; ++i)
    g.insert(Math.random());
var p50 = g.quantile(0.5); // Approx. median
var p95 = g.quantile(0.95); // Approx. 95th percentile
```

### Browser

```html
<script src="//sengelha.github.io/streaming-percentiles/streamingPercentiles.v1.min.js"></script>
<script>
var epsilon = 0.1;
var g = new streamingPercentiles.GK(epsilon);
for (var i = 0; i < 1000; ++i)
    g.insert(Math.random());
var p50 = g.quantile(0.5); // Approx. median
var p95 = g.quantile(0.95); // Approx. 95th percentile
</script>
```

## References

GK01: M. Greenwald and S. Khanna. Space-efficient online computation of quantile summaries. In _Proceedings of ACM SIGMOD_, pages 58–66, 2001.