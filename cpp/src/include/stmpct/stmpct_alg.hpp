#pragma once

// The base interface for all streaming percentile algorithms.

#include "stmpct_export.hpp"

namespace stmpct {

    class STMPCT_EXPORT stmpct_alg {
    public:
        virtual ~stmpct_alg() = default;
        virtual void insert(double val) = 0;
        virtual double quantile(double phi) const = 0;
    };

}
