#include <algorithm> // For min
#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/ckms_tq.hpp>
#include "ckms_impl.hpp"

using namespace std;

namespace stmpct {

    class ckms_tq::impl : public ckms_impl {
    public:
        impl(targeted_quantile* tqs, int n)
            : m_tqs(tqs, tqs + n) {}

    protected:
        bool compress_condition() const override final {
            //assert(false);
            // TODO: Come up with better compress condition
            return true;
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
    };

    ckms_tq::ckms_tq(targeted_quantile* tqs, int n) : pImpl(new impl(tqs, n)) {}
    ckms_tq::~ckms_tq() { delete(pImpl); }
    void ckms_tq::insert(double v) { pImpl->insert(v); }
    double ckms_tq::quantile(double phi) { return pImpl->quantile(phi); }

}
