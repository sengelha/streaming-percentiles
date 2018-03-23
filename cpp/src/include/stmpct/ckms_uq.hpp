#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for uniform
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_.  Conceptually nearly equivalent to
// the GK algorithm.

#include <memory>
#include "stmpctalg.hpp"

namespace stmpct {

    class ckms_uq : public stmpctalg
    {
    public:
        ckms_uq(double epsilon);
        ~ckms_uq();
        void insert(double v) override final;
        double quantile(double phi) override final;

    private:
        class impl;
        std::unique_ptr<impl> pImpl;
    };

}

