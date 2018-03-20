#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for uniform quantiles as defined
// in the paper Effective Computation of Biased Quantiles over Data Streams.
// Conceptually equivalent to the GK algorithm.
#include "ckms.hpp"

namespace stmpct {

class ckms_uq : public ckms
{
public:
    ckms_uq(double epsilon);

protected:
    bool compress_condition() const override final;
    double f(double r_i, int n) const override final;

private:
#ifdef UNIT_TESTING
    friend class ::ckms_uq_unit_tests;
#endif

    double m_epsilon;
    int m_one_over_2e;
};

}
