# stmpct::ckms_uq

Defined in header `<stmpct/ckms_tq.hpp>`

```cpp
template<
    class ValueT
> class ckms_tq;
```

`stmpct::ckms_tq` is a class which implements the Cormode-Korn-Muthukrishnan-Srivastava
streaming percentile algorithm for a set of targeted quantiles from CKMS05.

`ValueT` is the type of the measurements for which you are calculating percentiles.  It must have the
following properties:
- Assignable
- Default-constructible
- Copy-constructible
- Implements `operator<`

## Member functions

| Function | Description |
| -------- | ----------- |
| `template <class InputIt> ckms_tq(InputIt first, InputIt last)` (constructor) | Creates a data structure that can answer approximte targeted quantile queries about a sequence using a collection of [`stmpct::targeted_quantile`](targeted_quantile.md) objects in the range `[first, last)` |
| `void insert(ValueT v)` | Inserts a measurement into the data structure. |
| `ValueT quantile(double phi) const` | Calculate the `epsilon`-approximate `phi`-quantile for the sequence. |

## Example

```cpp
#include <stmpct/ckms_tq.hpp>

std::vector<stmpct::targeted_quantile> tqs;
tqs.emplace_back(0.125, 0.02);
tqs.emplace_back(0.375, 0.02);
tqs.emplace_back(0.75, 0.04);
tqs.emplace_back(0.875, 0.01);
stmpct::ckms_tq<double> c(tqs.begin(), tqs.end());
for (int i = 0; i < 1000; ++i)
    c.insert(rand());
double p50 = c.quantile(0.5); // Approx. median
double p95 = c.quantile(0.95); // Approx. 95th percentile
```

## See Also

* [stmpct::targeted_quantile](targeted_quantile.md) -- Targeted quantile POD type

## References

CKMS05: G. Cormode, F. Korn, S. Muthukrishnan and D. Srivastava. Effective Computation of Biased Quantiles over Data Streams. In _Proceedings of the 21st International Conference on Data Engineering_, pages 20-31, 2005.