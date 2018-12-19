#include <algorithm> // For min
#include <cassert>
#include <cmath>
#include <iostream>
#include <vector>
#include <stmpct/ckms_tq.hpp>
#include "ckms_impl.hpp"

using namespace std;

namespace stmpct {

    class ckms_tq::impl : public ckms_impl {
    public:
        impl(const std::vector<targeted_quantile>& tqs)
            : m_tqs(tqs), m_rebalance_freq(0)
        {
            int rebalance_freq = 0;
            for (auto it = m_tqs.begin(); it != m_tqs.end(); ++it) {
                rebalance_freq = max(rebalance_freq, (int)(1 / (2 * it->epsilon)));
            }
            m_rebalance_freq = rebalance_freq;
        }

    protected:
        bool compress_condition() const override final {
            assert(m_rebalance_freq > 0);
            return (m_n % m_rebalance_freq) == 0;
        }

        double f(double r_i, int n) const override final {
            double result = numeric_limits<double>::max();
            for (auto it = m_tqs.begin(); it != m_tqs.end(); ++it) {
                double result_j;
                if (r_i < it->phi * n) {
                    result_j = 2 * it->epsilon * (n - r_i) / (1 - it->phi);
                } else {
                    result_j = 2 * it->epsilon * r_i / it->phi;
                }
                result = min(result, result_j);
            }
            return result;
        }

    private:
        vector<targeted_quantile> m_tqs;
        int m_rebalance_freq;
    };

    ckms_tq::ckms_tq(const std::vector<targeted_quantile>& tqs) : pImpl(new impl(tqs)) {}
    ckms_tq::~ckms_tq() { delete(pImpl); }
    void ckms_tq::insert(double v) { pImpl->insert(v); }
    double ckms_tq::quantile(double phi) { return pImpl->quantile(phi); }

}
