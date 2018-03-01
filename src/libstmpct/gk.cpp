#include <algorithm>
#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/gk.hpp>

using namespace std;

namespace stmpct {

gk::gk(double epsilon)
    : m_epsilon(epsilon)
    , m_n(0)
    , m_rebalanceFreq((int)(1/(2*epsilon)))
    , m_min(INT_MAX)
    , m_max(INT_MIN)
{
}

void gk::accumulate(double v)
{
    assert_invariants();
    if (m_n > 0 && m_n % m_rebalanceFreq == 0)
        compress();
    insert(v);
#ifndef NDEBUG
    m_min = min(v, m_min);
    m_max = max(v, m_max);
#endif
    ++m_n;
    assert_invariants();
}

double gk::quantile(double q)
{
    assert(m_n >= m_rebalanceFreq);
    assert_invariants();

    double r = ceil(q * m_n);

    double rmin = 0;
    double rmax = 0;
    int epsilon_n = m_epsilon * m_n;
    for (auto it = m_tuples.begin(); it != m_tuples.end(); ++it) {
        rmax = rmin + it->delta;
        if (r - rmin <= epsilon_n && rmax - r <= epsilon_n)
            return it->v;
        rmin += it->g;
    }

    assert(false);
    return -999;
}

void gk::insert(double v)
{
    auto it1 = m_tuples.begin();
    while (it1 != m_tuples.end() &&
           it1->v <= v) {
        ++it1;
    }

    tuple t;
    t.v = v;
    t.g = 1;
    // Use theoretical value
    //t.delta = (it1 == m_tuples.begin() || it1 == m_tuples.end()) ? 0 : floor(2 * m_epsilon * m_n);
    // Use Chandra Chekuri modifications
    if (it1 == m_tuples.begin() || it1 == m_tuples.end())
        t.delta = 0;
    else if (m_n <= m_rebalanceFreq)
        t.delta = 0;
    else
        t.delta = floor(2 * m_epsilon * m_n) - 1;
    // Use value from empirical measurements section
    //t.delta = (it1 == m_tuples.begin() || it1 == m_tuples.end()) ? 0 : it1->g + it1->delta - 1;
    assert(t.delta >= 0);
    m_tuples.insert(it1, t);
}

void gk::compress()
{
    assert_invariants();

    int two_epsilon_n = (int)(2 * m_epsilon * m_n);
    assert(two_epsilon_n == 2 * m_epsilon * m_n); // The arithmetic should be exact
    std::vector<int> bands = construct_band_lookup(two_epsilon_n);

    // TODO: I cannot delete node at index 0 because this would violate the invariant that
    // the minimum value is in the set.  This violates the paper. Why?
    for (int i = m_tuples.size() - 2; i >= 1; --i) {
        assert(i >= 0 && i < m_tuples.size() - 1);
        int delta_i = m_tuples[i].delta;
        int delta_ip1 = m_tuples[i+1].delta;
        // TODO: The below is wrong, g_istar is not g_i
        int g_i = m_tuples[i].g;
        int g_ip1 = m_tuples[i+1].g;
        assert(delta_i >= 0 && delta_i < bands.size());
        int band_i = bands[delta_i];
        assert(delta_ip1 >= 0 && delta_ip1 < bands.size());
        int band_ip1 = bands[delta_ip1];

        if ((band_i <= band_ip1) && (g_i + g_ip1 + delta_ip1 < two_epsilon_n)) {
            // TODO: Delete all child nodes as well
            // Go backwards looking for any elements which have a lower band
            // than band_i.  If they exist, we want to delete them.
            /*
            int end_indx = i;
            int start_indx = end_indx - 1;
            while (start_indx >= 1) {
                int band = bands[m_tuples[start_indx].delta];
                if (band >= band_i)
                    break;
                --start_indx;
            }
            ++start_indx;
            int before_size = m_tuples.size();
            int num_deleted = delete_tuples(start_indx, end_indx);
            assert(num_deleted >= 1);
            i -= (num_deleted - 1);
            */
            delete_tuple(i);
        }
    }

    assert_invariants();
}

std::vector<int> gk::construct_band_lookup(int two_epsilon_n)
{
    // Build array of bands, such that array[delta] = band
    std::vector<int> bands(two_epsilon_n + 1);
    bands[0] = -1; // delta = 0 is its own band
    bands[two_epsilon_n] = 0; // delta = two_epsilon_n is band = 0 by definition

    int p = floor(two_epsilon_n);
    for (int alpha = 1; alpha <= ceil(log(two_epsilon_n)); ++alpha) {
        int two_alpha_minus_1 = (1 << (alpha - 1));
        int two_alpha = two_alpha_minus_1 << 1;
        int lower = p - two_alpha - (p % two_alpha);
        if (lower < 0)
            lower = 0;
        int upper = p - two_alpha_minus_1 - (p % two_alpha_minus_1);
        for (int i = lower + 1; i <= upper; ++i) {
            assert(i >= 0 && i < bands.size());
            bands[i] = alpha;
        }
    }
    return bands;
}

int gk::delete_tuples(int start_indx, int end_indx)
{
    assert(start_indx >= 0 && start_indx <= end_indx);
    assert(end_indx >= 0 && end_indx < m_tuples.size() - 1);
    cout << "# tuples = " << m_tuples.size() << " ... Deleting tuples from [" << start_indx << ", " << end_indx << "]\n";
    int num_deleted = 0;
    for (int i = end_indx; i >= start_indx; --i) {
        delete_tuple(i);
        ++num_deleted;
    }
    return num_deleted;
}

void gk::delete_tuple(int i)
{
    assert(i >= 0 && i < m_tuples.size() - 1);
    cout << "Deleting tuple at index " << i << "\n";
    m_tuples[i].v = m_tuples[i + 1].v;
    m_tuples[i].g += m_tuples[i + 1].g;
    m_tuples[i].delta = m_tuples[i + 1].delta;
    m_tuples.erase(m_tuples.begin() + i + 1);
}

#ifndef NDEBUG

void gk::assert_invariants()
{
    // v0 must always be the minimum seen so far
    // vs-1 must always be the maximum seen so far
    // v's must be sorted
    // \sum_{i} (g_i) = n
    // max(g_i + delta_i) <= 2*epsilon_n
    if (m_tuples.size() == 0)
        return;
    assert(m_tuples[0].v == m_min);
    assert(m_tuples[m_tuples.size() - 1].v == m_max);
    for (int i = 1; i < m_tuples.size(); ++i) {
        assert(m_tuples[i].v >= m_tuples[i-1].v);
    }
    int sum_g = 0;
    for (int i = 0; i < m_tuples.size(); ++i) {
        sum_g += m_tuples[i].g;
    }
    assert(sum_g == m_n);

    // The below invariant only applies if m_n is large enough.
    if (m_n >= m_rebalanceFreq) {
        for (int i = 0; i < m_tuples.size(); ++i) {
            int sum = m_tuples[i].g + m_tuples[i].delta;
            //cout << "sum = " << sum << " 2en = " << 2 * m_epsilon * m_n << "\n";
            assert(sum <= 2 * m_epsilon * m_n);
        }
    }
}

#endif

ostream& operator<<(ostream& os, const gk& gk)
{
    os << "{epsilon: " << gk.m_epsilon << ", "
       << "n: " << gk.m_n << ", "
       << "rebalanceFreq: " << gk.m_rebalanceFreq << ", "
       << "tuples: [";
    for (auto it = gk.m_tuples.begin(); it != gk.m_tuples.end(); ++it) {
        if (it != gk.m_tuples.begin())
            os << ", ";
        os << "{v: " << it->v << ", g: " << it->g << ", delta: " << it->delta << "}";
    }
    os << "]}";
    return os;
}

};