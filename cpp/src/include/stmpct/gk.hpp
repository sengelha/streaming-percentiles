#pragma once

// The Greenwald-Khanna algorithm as defined in the paper
// Space-Efficient Online Computation of Quantile Summaries
#include <memory>
#include "stmpctalg.hpp"

namespace stmpct {

    class gk : public stmpctalg
    {
    public:
        gk(double epsilon);
        ~gk();
        virtual void insert(double v) final;
        virtual double quantile(double phi) final;

    private:
        class impl;
        std::unique_ptr<impl> pImpl;
    };
}
