#include <cassert>
#include <cmath>
#include "ckms_impl.hpp"

using namespace std;

void ckms_impl::insert(double v)
{
    do_insert(v);
    if (compress_condition())
        compress();
}

double ckms_impl::quantile(double phi) const
{
    if (m_S.empty())
        return nan("");

    double phin = phi * m_n;
    // TODO: f(phin -- that's not right is it?  The first param is r_i...)
    double comp = phin + f(phin, m_n) / 2;

    int r_i = 0;
    tuples_t::const_iterator it = m_S.cbegin();
    tuples_t::const_iterator end = m_S.cend();
    assert(it != end); // This is guaranteed by the m_S.empty() check above

    tuples_t::const_iterator it_prev = it;
    ++it;
    for (; it != end; ++it, ++it_prev) {
        r_i += it_prev->g;
        if (r_i + it->g + it->delta > comp)
            return it_prev->v;
    }
    return it_prev->v;
}

void ckms_impl::do_insert(double v)
{
    // TODO: Some algorithms (e.g. ckms_uq) do not require
    // r_i, so calculating r_i is inefficient here... can it
    // be removed?
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

void ckms_impl::compress()
{
    if (m_S.empty())
        return;

    // TODO: Some algorithms (e.g. ckms_uq) do not require
    // r_i, can we avoid calculating it?
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

void ckms_impl::merge(tuples_t::iterator it1, tuples_t::iterator it2)
{
    it1->v = it2->v;
    it1->g = it1->g + it2->g;
    it1->delta = it2->delta;
    m_S.erase(it2);
}

