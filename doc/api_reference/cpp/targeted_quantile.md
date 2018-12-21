# stmpct::targeted_quantile

Defined in header `<stmpct/targeted_quantile.hpp>`

```cpp
struct targeted_quantile
{
    double phi;
    double epsilon;
};
```

`stmpct::targeted_quantile` is a plain-old-data (POD) type for storing information about a targeted quantile.

## Member variables

| Variable | Description |
| -------- | ----------- |
| `phi` | The targeted quantile.  Must be between 0 and 1. |
| `epsilon` | The desired error at the targeted quantile. |

## Member functions

| Function | Description |
| -------- | ----------- |
| `targeted_quantile(double phi, double epsilon)` (constructor) | Initializes targeted_quantile with the specified `phi` and `epsilon`. |

## Example

```cpp
// Target a maximum allowable error of 0.02 at the 25th percentile
targeted_quantile tq(0.25, 0.02);
```

## See Also

* [stmpct::ckms_tq](ckms_tq.md) -- Cormode-Korn-Muthukrishnan-Srivastava for targeted quantiles