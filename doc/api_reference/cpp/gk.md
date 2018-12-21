# stmpct::gk

Defined in header `<stmpct/gk.hpp>`

```cpp
template<
    class ValueT
> class gk;
```

`stmpct::gk` is a class which implements the Greenwald-Khanna streaming percentile algorithm from GK01.

`ValueT` is the type of the measurements for which you are calculating percentiles.  It must have the
following properties:
- Assignable
- Default-constructible
- Copy-constructible
- Implements `operator<`

## Member functions

| Function | Description |
| -------- | ----------- |
| `gk(double epsilon)` (constructor) | Creates a data structure that can answer quantile queries about a sequence to within a precision of `epsilon` * N, where N is the number of elements in the sequence. |
| `void insert(ValueT v)` | Inserts a measurement into the data structure. |
| `ValueT quantile(double phi) const` | Calculate the `epsilon`-approximate `phi`-quantile for the sequence. |

## Example

```cpp
#include <stmpct/gk.hpp>

double epsilon = 0.1;
stmpct::gk<double> g(epsilon);
for (int i = 0; i < 1000; ++i)
    g.insert(rand());
double p50 = g.quantile(0.5); // Approx. median
double p95 = g.quantile(0.95); // Approx. 95th percentile
```

## References

GK01: M. Greenwald and S. Khanna. Space-efficient online computation of quantile summaries. In _Proceedings of ACM SIGMOD_, pages 58–66, 2001.