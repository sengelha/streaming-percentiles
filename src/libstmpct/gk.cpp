#include <algorithm>
#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/gk.hpp>

using namespace std;

template<typename T>
void splice(std::vector<T>& v, int indx, int how_many, const T& t)
{
    assert(indx >= 0 && indx < v.size());
    assert(indx + how_many >= 0 && indx + how_many - 1 < v.size());
    v[indx] = t;
    if (how_many > 1) {
        auto start = v.begin() + indx + 1;
        auto end = start + (how_many - 1);
        v.erase(start, end);
    }
}

namespace stmpct {

gk::gk(double epsilon) :
    m_epsilon(epsilon), m_one_over_2e((int)(1/(2 * epsilon))), m_n(0)
{
}

void gk::insert(double v)
{
    if (m_n % m_one_over_2e == 0)
        compress();
    do_insert(v);
    ++m_n;
}

double gk::quantile(double phi)
{
    double en = m_epsilon * m_n;
    int r = (int)ceil(phi * m_n);
    double rmin = 0;
    for (auto it = m_S.begin(); it != m_S.end(); ++it) {
        rmin += it->g;
        double rmax = rmin + it->delta;
        if (r - rmin <= en && rmax - r <= en)
            return it->v;
    }

    throw std::runtime_error("Could not resolve quantile");
}

std::vector<int> gk::construct_band_lookup(int two_epsilon_n)
{
    std::vector<int> bands(two_epsilon_n + 1);
    bands[0] = MAX_BAND; // delta = 0 is its own band
    bands[two_epsilon_n] = 0; // delta = two_epsilon_n is band 0 by definition

    for (int alpha = 1; alpha <= ceil(log2(two_epsilon_n)); ++alpha) {
        int two_alpha_minus_1 = (1 << (alpha-1));
        int two_alpha = two_alpha_minus_1 << 1;
        int lower = two_epsilon_n - two_alpha - (two_epsilon_n % two_alpha);
        if (lower < 0)
            lower = 0;
        int upper = two_epsilon_n - two_alpha_minus_1 - (two_epsilon_n % two_alpha_minus_1);
        for (int  i = lower + 1; i <= upper; ++i) {
            bands[i] = alpha;
        }
    }
    
    return bands;
}

ostream& operator<<(ostream& os, const gk& gk)
{
    os << "{epsilon: " << gk.m_epsilon << ", "
       << "n: " << gk.m_n << ", "
       << "one_over_2e: " << gk.m_one_over_2e << ", "
       << "S: [";
    for (auto it = gk.m_S.begin(); it != gk.m_S.end(); ++it) {
        if (it != gk.m_S.begin())
            os << ", ";
        os << "{v: " << it->v << ", g: " << it->g << ", delta: " << it->delta << "}";
    }
    os << "]}";
    return os;
}

void gk::do_insert(double v)
{
    auto it = find_insertion_index(v);
    tuple t;
    t.v = v;
    t.g = 1;
    t.delta = determine_delta(it);
    m_S.insert(it, t);
}

gk::tuples_t::iterator gk::find_insertion_index(double v)
{
    gk::tuples_t::iterator it = m_S.begin();
    while (it != m_S.end() && v >= it->v)
        ++it;
    return it;
}

int gk::determine_delta(gk::tuples_t::iterator it)
{
    if (m_n < m_one_over_2e)
        return 0;
    else if (it == m_S.begin() || it == m_S.end())
        return 0;
    else
        return (int)floor(2 * m_epsilon * m_n) - 1;
}

void gk::compress()
{
    if (m_S.empty())
        return;

    int two_epsilon_n = (int)(2 * m_epsilon * m_n);
    std::vector<int> bands = construct_band_lookup(two_epsilon_n);
    for (int i = (int)m_S.size() - 2; i >= 1; --i) {
        if (bands[m_S[i].delta] <= bands[m_S[i+1].delta]) {
            int start_indx = i;
            int g_i_star = m_S[i].g;
            while (start_indx >= 2 && bands[m_S[start_indx-1].delta] < bands[m_S[i].delta]) {
                --start_indx;
                g_i_star += m_S[start_indx].g;
            }
            if ((g_i_star + m_S[i+1].g + m_S[i+1].delta) < two_epsilon_n) {
                tuple merged;
                merged.v = m_S[i+1].v;
                merged.g = g_i_star + m_S[i+1].g;
                merged.delta = m_S[i+1].delta;
                splice(m_S, start_indx, 2 + (i - start_indx), merged);
                i = start_indx;
            }
        }
    }
}

};