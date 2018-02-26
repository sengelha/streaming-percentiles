#include <algorithm>
#include <cmath>
#include <iostream>
#include "gk.hpp"

using namespace std;

gk::gk(double epsilon) :
    m_epsilon(epsilon), m_n(0), m_rebalanceFreq((int)(1/(2*epsilon)))
{
}

void gk::insert(double v)
{
    if (m_n % m_rebalanceFreq == 0)
        compress();

    auto it1 = m_tuples.begin();
    while (it1 != m_tuples.end() &&
           it1->v <= v) {
        ++it1;
    }

    tuple t;
    t.v = v;
    t.g = 1;
    t.delta = floor(2 * m_epsilon * m_n);
    m_tuples.insert(it1, t);
    ++m_n;
}

double gk::quantile(double q)
{
    double r = ceil(q * m_n);

    double rmin = 0;
    double rmax = 0;
    for (auto it = m_tuples.begin(); it != m_tuples.end(); ++it) {
        rmin += it->g;
        rmax = it->delta + rmin;
        if (r - rmin <= m_epsilon * m_n && rmax - r <= m_epsilon * m_n)
            return it->v;
    }

    return 0;
}

void gk::compress()
{
    cout << "COMPRESSING!\n";
}

ostream& operator<<(ostream& os, const gk& gk)
{
    os << "{epsilon: " << gk.m_epsilon << ", "
       << "n: " << gk.m_n << ", "
       << "tuples: [";
    for (auto it = gk.m_tuples.begin(); it != gk.m_tuples.end(); ++it) {
        if (it != gk.m_tuples.begin())
            os << ", ";
        os << "{v: " << it->v << ", g: " << it->g << ", delta: " << it->delta << "}";
    }
    os << "]}";
    return os;
}
