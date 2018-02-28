#include <algorithm>
#include <cassert>
#include <cmath>
#include <iostream>
#include <stmpct/gk.hpp>

using namespace std;

static int band(int delta, double two_epsilon_n)
{
    cout << "Determining band for delta = " << delta << " and two_epsilon_n = " << two_epsilon_n << "...\n";

    // Build array of bands, such that array[delta] = band
    std::vector<int> bands;
    bands.push_back(0); // delta = 0 has special meaning

    int p = floor(two_epsilon_n);
    for (int alpha = 1; alpha <= ceil(log(two_epsilon_n)); ++alpha) {
        int two_alpha_minus_1 = (1 << (alpha - 1));
        int two_alpha = two_alpha_minus_1 << 1;
        int lower = p - two_alpha - (p % two_alpha);
        if (lower < 1)
            lower = 1;
        int upper = p - two_alpha_minus_1 - (p % two_alpha_minus_1);
        cout << "p = " << p << " alpha = " << alpha << " two_alpha = " << two_alpha << " two_alpha_minus_1 = " << two_alpha_minus_1 << " lower = " << lower << "\n";
        assert(lower >= 0);
        for (int i = lower + 1; i <= upper; ++i) {
            if (i >= bands.size())
                bands.resize(i + 1);
            cout << "Setting bands[" << i << "] to band #" << alpha << "\n";
            assert(i >= 0 && i < bands.size());
            bands[i] = alpha;
        }
    }

    assert(delta >= 0 && delta < bands.size());
    return bands[delta];

    /*
    if (delta == 0) {
        std::cout << "Special case: delta = 0 is band 0\n";
        return 0;
    }

    int p = floor(two_epsilon_n);
    for (int alpha = 1; alpha <= ceil(log(two_epsilon_n)); ++alpha) {
        int two_alpha = (1 << alpha);
        int two_alpha_minus_1 = (1 << (alpha - 1));
        double lower = p - two_alpha - (p % two_alpha);
        double upper = p - two_alpha_minus_1 - (p % two_alpha_minus_1);
        if (lower < delta && delta <= upper) {
            std::cout << "Calculating band for delta " << delta << " and 2en " << two_epsilon_n << " as " << alpha << "\n";
            return alpha;
        }
    }
    std::cout << "COULD NOT DETERMINE BAND RETURNING 0\n";
    return 0;
    */
    throw std::runtime_error("TODO");
}

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
    double two_epsilon_n = 2 * m_epsilon * m_n;
    for (int i = m_tuples.size() - 2; i >= 0; --i) {
        double delta_i = m_tuples[i].delta;
        double delta_ip1 = m_tuples[i+1].delta;
        double g_i = m_tuples[i].g;
        double g_ip1 = m_tuples[i+1].g;

        if ((band(delta_i, two_epsilon_n) <= band(delta_ip1, two_epsilon_n)) &&
            (g_i + g_ip1 + delta_ip1 < two_epsilon_n)) {
            std::cout << "DELETE!!!!\n";
        }
    }
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