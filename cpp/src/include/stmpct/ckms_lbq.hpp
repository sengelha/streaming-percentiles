#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for low biased
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include <memory>
#include "stmpctalg.hpp"

namespace stmpct {

    class ckms_lbq : public stmpctalg
    {
    public:
        ckms_lbq(double epsilon);
        ~ckms_lbq();
        void insert(double v) override final;
        double quantile(double phi) override final;

    private:
        class impl;
        std::unique_ptr<impl> pImpl;
    };

}
