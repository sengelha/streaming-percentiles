#include <algorithm>
#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/gk.hpp>

using namespace std;

namespace stmpct {

gk::gk(double epsilon) :
    m_epsilon(epsilon), m_n(0), m_rebalanceFreq((int)(1/(2*epsilon)))
{
}

void gk::accumulate(double v)
{
    if (m_n > 0 && m_n % m_rebalanceFreq == 0)
        compress();
    insert(v);
    ++m_n;
}

double gk::quantile(double q)
{
    double r = ceil(q * m_n);

    double rmin = 0;
    double rmax = 0;
    double epsilon_n = m_epsilon * m_n;
    for (auto it = m_tuples.begin(); it != m_tuples.end(); ++it) {
        rmin += it->g;
        rmax = rmin + it->delta;
        if (r - rmin <= epsilon_n && rmax - r <= epsilon_n)
            return it->v;
    }

    // TODO: Set error policy, return error
    return 0;
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
    t.delta = (it1 == m_tuples.begin() || it1 == m_tuples.end()) ? 0 : floor(2 * m_epsilon * m_n);
    m_tuples.insert(it1, t);
}

void gk::compress()
{
    int two_epsilon_n = (int)(2 * m_epsilon * m_n);
    assert(two_epsilon_n == 2 * m_epsilon * m_n); // The arithmetic should be exact
    std::vector<int> bands = construct_band_lookup(two_epsilon_n);

    for (int i = m_tuples.size() - 2; i >= 0; --i) {
        int delta_i = m_tuples[i].delta;
        int delta_ip1 = m_tuples[i+1].delta;
        int g_i = m_tuples[i].g;
        int g_ip1 = m_tuples[i+1].g;
        assert(delta_i >= 0 && delta_i < bands.size());
        int band_i = bands[delta_i];
        assert(delta_ip1 >= 0 && delta_ip1 < bands.size());
        int band_ip1 = bands[delta_ip1];

        if ((band_i <= band_ip1) && (g_i + g_ip1 + delta_ip1 < two_epsilon_n)) {
            // TODO: Delete all descendants of i
            // Delete i itself
            delete_tuple(i);
        }
    }
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

void gk::delete_tuple(int i)
{
    cout << "Deleting tuple at index " << i << "\n";
    assert(i >= 0 && i < m_tuples.size() - 1);
    m_tuples[i].v = m_tuples[i + 1].v;
    m_tuples[i].g += m_tuples[i + 1].g;
    m_tuples[i].delta = m_tuples[i + 1].delta;
    m_tuples.erase(m_tuples.begin() + i + 1);
}

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