#pragma once

// The Cormode-Korn-Muthukrishnan-Srivastava algorithm for targeted
// quantiles as defined in the paper _Effective Computation of Biased
// Quantiles over Data Streams_

#include "ckms_impl.hpp"
#include "targeted_quantile.hpp"

namespace stmpct {

    template <typename T>
    class ckms_tq : public ckms_impl<T>
    {
    public:
        template <typename InputIt>
        ckms_tq(InputIt begin, InputIt end)
            : m_tqs(begin, end), m_rebalance_freq(0)
        {
            int rebalance_freq = 0;
            for (auto it = m_tqs.begin(); it != m_tqs.end(); ++it) {
                rebalance_freq = std::max(rebalance_freq, (int)(1 / (2 * it->epsilon)));
            }
            m_rebalance_freq = rebalance_freq;
        }


    protected:
        bool compress_condition() const override final {
            assert(m_rebalance_freq > 0);
            return (this->m_n % m_rebalance_freq) == 0;
        }

        double f(double r_i, int n) const override final {
            double result = std::numeric_limits<double>::max();
            for (auto it = m_tqs.begin(); it != m_tqs.end(); ++it) {
                double result_j;
                if (r_i < it->phi * n) {
                    result_j = 2 * it->epsilon * (n - r_i) / (1 - it->phi);
                } else {
                    result_j = 2 * it->epsilon * r_i / it->phi;
                }
                result = std::min(result, result_j);
            }
            return result;
        }

    private:
        std::vector<targeted_quantile> m_tqs;
        int m_rebalance_freq;
    };

}
