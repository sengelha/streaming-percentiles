#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for high biased
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include <memory>
#include "stmpctalg.hpp"

namespace stmpct {

    class ckms_hbq : public stmpctalg
    {
    public:
        ckms_hbq(double epsilon);
        ~ckms_hbq();
        void insert(double v) override final;
        double quantile(double phi) override final;

    private:
        class impl;
        std::unique_ptr<impl> pImpl;
    };

}
