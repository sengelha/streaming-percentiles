# stmpct::qdigest

Defined in header `<stmpct/qdigest.hpp>`

```cpp
class qdigest;
```

`stmpct::qdigest` is a class which implements the Q-Digest streaming percentile algorithm
from the paper _Medians and Beyond: New Aggregation Techniques for Sensor Networks_ by 
Shrivastava, Buragohain, Agrawal, and Suri.

This algorithm only supports measurements of type `int`.

## Member functions

| Function | Description |
| -------- | ----------- |
| `qdigest(int compression_factor)` (constructor) | Creates an algorithm that can answer quantile queries using compression factor `compression_factor`. |
| `void insert(int v, int count = 1)` | Inserts `count` measurements of value `v` into the data structure. |
| `int quantile(double phi)` | Calculate the approximate `phi`-quantile for the sequence. |

## Example

```cpp
#include <stmpct/qdigest.hpp>

stmpct::qdigest q(100);
for (int i = 0; i < 1000; ++i)
    q.insert(rand());
int p50 = q.quantile(0.5); // Approx. median
int p95 = q.quantile(0.95); // Approx. 95th percentile
```