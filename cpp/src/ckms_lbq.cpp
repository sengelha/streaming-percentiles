#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/ckms_lbq.hpp>
#include "ckms_impl.hpp"

using namespace std;

namespace stmpct {

    class ckms_lbq::impl : public ckms_impl {
    public:
        impl(double epsilon)
            : m_epsilon(epsilon)
            , m_one_over_2e((int)(1 / (2 * epsilon)))
        {}

    protected:
        bool compress_condition() const final override {
            assert(m_one_over_2e > 0);
            return (m_n % m_one_over_2e) == 0;
        }

        double f(double r_i, int /*n*/) const final override {
            return 2 * m_epsilon * r_i;
        }

    private:
        double m_epsilon;
        int m_one_over_2e;
    };

    ckms_lbq::ckms_lbq(double epsilon) : pImpl(new impl(epsilon)) {}
    ckms_lbq::~ckms_lbq() { delete(pImpl); }
    void ckms_lbq::insert(double v) { pImpl->insert(v); }
    double ckms_lbq::quantile(double phi) const { return pImpl->quantile(phi); }

}
