#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for targeted
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include "stmpct_alg.hpp"
#include "stmpct_export.hpp"

namespace stmpct {

    struct STMPCT_EXPORT targeted_quantile
    {
        double phi;
        double epsilon;

        targeted_quantile(double phi, double epsilon)
            : phi(phi), epsilon(epsilon) {}
    };

    class STMPCT_EXPORT ckms_tq : public stmpct_alg
    {
    public:
        ckms_tq(targeted_quantile* tqs, int n);
        ~ckms_tq();
        void insert(double v) override final;
        double quantile(double phi) override final;

    private:
        // Use of std::unique_ptr triggers warning C4251 on Windows
        class impl;
        impl* pImpl;
    };

}