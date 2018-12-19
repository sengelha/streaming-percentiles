#pragma once

// The Greenwald-Khanna algorithm as defined in the paper
// Space-Efficient Online Computation of Quantile Summaries
#include "stmpct_alg.hpp"
#include "stmpct_export.hpp"

namespace stmpct {

    class STMPCT_EXPORT gk : public stmpct_alg
    {
    public:
        gk(double epsilon);
        gk(const gk&) = delete;
        gk& operator=(const gk&) = delete;
        ~gk();
        virtual void insert(double v) final;
        virtual double quantile(double phi) final;

    private:
        // Use of std::unique_ptr triggers warning C4251 on Windows
        class impl;
        impl* pImpl;
    };
}
