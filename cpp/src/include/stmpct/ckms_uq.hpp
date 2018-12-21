#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for uniform
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_.  Conceptually nearly equivalent to
// the GK algorithm.

#include "ckms_impl.hpp"

namespace stmpct {

    template <typename T>
    class ckms_uq : public ckms_impl<T>
    {
    public:
        ckms_uq(double epsilon)
            : m_epsilon(epsilon)
            , m_one_over_2e((int)(1 / (2 * epsilon)))
        {}

    protected:
        bool compress_condition() const override final {
            assert(m_one_over_2e > 0);
            return (this->m_n % m_one_over_2e) == 0;
        }

        double f(double /*r_i*/, int n) const override final {
            return 2 * m_epsilon * n;
        }

    private:
        double m_epsilon;
        int m_one_over_2e;
    };

}
