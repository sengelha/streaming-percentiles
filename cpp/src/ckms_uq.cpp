#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/ckms_uq.hpp>
#include "ckms_impl.hpp"

using namespace std;

namespace stmpct {

    class ckms_uq::impl : public ckms_impl {
    public:
        impl(double epsilon)
            : m_epsilon(epsilon)
            , m_one_over_2e((int)(1/(2*epsilon)))
        {}

    protected:
        bool compress_condition() const override final {
            assert(m_one_over_2e > 0);
            return (m_n % m_one_over_2e) == 0;
        }

        double f(double r_i, int n) const override final {
            return 2 * m_epsilon * n;
        }

    private:
        double m_epsilon;
        int m_one_over_2e;
    };

    ckms_uq::ckms_uq(double epsilon) : pImpl(new impl(epsilon)) {}
    ckms_uq::~ckms_uq() {}
    void ckms_uq::insert(double v) { pImpl->insert(v); }
    double ckms_uq::quantile(double phi) { return pImpl->quantile(phi); }

}
