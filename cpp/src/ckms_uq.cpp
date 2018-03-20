#include <stmpct/ckms_uq.hpp>
#include <cassert>
#include <iostream>

using namespace std;

namespace stmpct {

ckms_uq::ckms_uq(double epsilon)
    : m_epsilon(epsilon), m_one_over_2e((int)(1 / (2 * epsilon)))
{
}

bool ckms_uq::compress_condition() const {
    return (m_n % m_one_over_2e) == 0;
}

double ckms_uq::f(double /*r_i*/, int n) const {
    double result = 2 * m_epsilon * n;
    return result;
}

}