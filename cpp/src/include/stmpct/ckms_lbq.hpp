#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for low biased
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include "stmpct_alg.hpp"
#include "stmpct_export.hpp"

namespace stmpct {

    class STMPCT_EXPORT ckms_lbq : public stmpct_alg
    {
    public:
        ckms_lbq(double epsilon);
        ckms_lbq(const ckms_lbq&) = delete;
        ckms_lbq& operator=(const ckms_lbq&) = delete;
        ~ckms_lbq();
        void insert(double v) override final;
        double quantile(double phi) const override final;

    private:
        // Use of std::unique_ptr triggers warning C4251 on Windows
        class impl;
        impl* pImpl;
    };

}
