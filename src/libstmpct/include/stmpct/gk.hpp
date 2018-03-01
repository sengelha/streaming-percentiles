#pragma once

// The Greenwald-Khanna algorithm as defined in the paper
// Space-Efficient Online Computation of Quantile Summaries
#include <iosfwd>
#include <vector>
#include "stmpct.hpp"

namespace stmpct {

class gk : public stmpctalg
{
public:
    gk(double epsilon);
    virtual void accumulate(double val) final;
    virtual double quantile(double q) final;    
    friend std::ostream& operator<<(std::ostream&, const gk&);

private:
    void insert(double val);
    void compress();
    std::vector<int> construct_band_lookup(int two_epsilon_n);
    int delete_tuples(int start_indx, int end_indx);
    void delete_tuple(int i);
#ifndef NDEBUG
    void assert_invariants();
#endif

    struct tuple {
        double v;
        int g;
        int delta;
    };

    double m_epsilon;
    int m_n;
    int m_rebalanceFreq;
    std::vector<tuple> m_tuples;
#ifndef NDEBUG
    double m_min;
    double m_max;
#endif
};

std::ostream& operator<<(std::ostream& os, const gk& g);

};