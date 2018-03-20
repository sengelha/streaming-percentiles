#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/ckms.hpp>

using namespace std;

namespace stmpct {

ckms::ckms() : m_n(0) {}

void ckms::insert(double v)
{
    do_insert(v);
    if (compress_condition())
        compress();
}

double ckms::quantile(double phi)
{
    if (m_S.empty())
        throw std::runtime_error("Could not resolve quantile -- empty set");

    double phin = phi * m_n;
    double comp = phin + f(phin, m_n) / 2;

    int r_i = 0;
    tuples_t::iterator it = m_S.begin();
    assert(it != m_S.end()); // This is guaranteed by the m_S.empty() check above

    tuples_t::iterator it_prev = it;
    ++it;
    for (; it != m_S.end(); ++it, ++it_prev) {
        r_i += it_prev->g;
        if (r_i + it->g + it->delta > comp)
            return it_prev->v;
    }
    return it_prev->v;
}

void ckms::do_insert(double v)
{
    int r_i = 0;
    tuples_t::iterator it = m_S.begin();
    while (it != m_S.end() && v >= it->v) {
        r_i += it->g;
        ++it;
    }
    int delta = (int)floor(f(r_i, m_n)) - 1;
    // The below isn't in the paper
    if (delta < 0)
        delta = 0;
    tuple t(v, 1, delta);
    m_S.insert(it, t);
    ++m_n;
}

void ckms::compress() {
    if (m_S.empty())
        return;

    int r_i = 0;
    tuples_t::iterator it;
    for (it = m_S.begin(); it != m_S.end(); ++it) {
        r_i += it->g;
    }
    --it;
    if (it == m_S.begin())
        return;
    --it;

    for (; it != m_S.begin(); --it) {
        tuples_t::iterator it2 = next(it);
        r_i -= it->g;
        if (it->g + it2->g + it2->delta <= f(r_i, m_n)) {
            merge(it, it2);
        }
    }
}

void ckms::merge(tuples_t::iterator it1, tuples_t::iterator it2)
{
    it1->v = it2->v;
    it1->g = it1->g + it2->g;
    it1->delta = it2->delta;
    m_S.erase(it2);
}

ostream& operator<<(ostream& os, const ckms& c)
{
    os << "{"
       << "n: " << c.m_n
       << ", S: " << c.m_S
       << "}";
    return os;
}

ostream& operator<<(ostream& os, const ckms::tuples_t& tuples)
{
    os << "[";
    for (auto it = tuples.begin(); it != tuples.end(); ++it) {
        if (it != tuples.begin())
            os << ", ";
        os << *it;
    }
    os << "]";
    return os;
}

ostream& operator<<(ostream& os, const ckms::tuple& t)
{
    os << "{v: " << t.v
       << ", g: " << t.g
       << ", delta: " << t.delta
       << "}";
    return os;
}

}