#include <stmpct/ckms_lbq.hpp>
#include <cassert>
#include <iostream>

using namespace std;

namespace stmpct {

ckms_lbq::ckms_lbq(double epsilon)
    : m_epsilon(epsilon), m_one_over_2e((int)(1 / (2 * epsilon)))
{
}

bool ckms_lbq::compress_condition() const {
    return (m_n % m_one_over_2e) == 0;
}

double ckms_lbq::f(double r_i, int /*n*/) const {
    double result = 2 * m_epsilon * r_i;
    return result;
}

}