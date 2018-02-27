#pragma once

// The base interface for all streaming percentile algorithms.

namespace stmpct {

class stmpctalg {
public:
    virtual ~stmpctalg() = default;
    virtual void accumulate(double val) = 0;
    virtual double quantile(double q) = 0;
};

}