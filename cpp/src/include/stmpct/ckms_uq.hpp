#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for uniform
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_.  Conceptually nearly equivalent to
// the GK algorithm.

#include "stmpct_alg.hpp"
#include "stmpct_export.hpp"

namespace stmpct {

    class STMPCT_EXPORT ckms_uq : public stmpct_alg
    {
    public:
        ckms_uq(double epsilon);
        ~ckms_uq();
        void insert(double v) override final;
        double quantile(double phi) override final;

    private:
        // Use of std::unique_ptr triggers warning C4251 on Windows
        class impl;
        impl* pImpl;
    };
}

