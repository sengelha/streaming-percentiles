#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for high biased
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include "stmpct_alg.hpp"
#include "stmpct_export.hpp"

namespace stmpct {

    class STMPCT_EXPORT ckms_hbq : public stmpct_alg
    {
    public:
        ckms_hbq(double epsilon);
        ckms_hbq(const ckms_hbq&) = delete;
        ckms_hbq& operator=(const ckms_hbq&) = delete;
        ~ckms_hbq();
        void insert(double v) override final;
        double quantile(double phi) const override final;

    private:
        // Use of std::unique_ptr triggers warning C4251 on Windows
        class impl;
        impl* pImpl;
    };

}
