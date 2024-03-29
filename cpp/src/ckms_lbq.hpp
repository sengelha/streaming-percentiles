#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for low biased
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include <cassert>
#include "ckms_impl.hpp"

namespace stmpct {

template <typename T> class ckms_lbq : public ckms_impl<T> {
  public:
    explicit ckms_lbq(double epsilon)
        : m_epsilon(epsilon), m_one_over_2e((int)(1 / (2 * epsilon))) {}

  protected:
    bool compress_condition() const override final {
        assert(m_one_over_2e > 0);
        return (this->m_n % m_one_over_2e) == 0;
    }

    double f(double r_i, int /*n*/) const override final {
        return 2 * m_epsilon * r_i;
    }

  private:
    double m_epsilon;
    int m_one_over_2e;
};

} // namespace stmpct
