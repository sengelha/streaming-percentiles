#pragma once

// The Greenwald-Khanna algorithm as defined in the paper
// Space-Efficient Online Computation of Quantile Summaries
#include <iosfwd>
#include <list>
#include <vector>
#include "stmpct.hpp"

namespace stmpct {

class gk : public stmpctalg
{
public:
    // TODO: Make the below constant private but allow unit testing
    static const int MAX_BAND = 999999;

    gk(double epsilon);
    virtual void insert(double v) final;
    virtual double quantile(double phi) final;
    // TODO: Make the below function private but allow unit testing
    static std::vector<int> construct_band_lookup(int two_epsilon_n);
    friend std::ostream& operator<<(std::ostream&, const gk&);

private:
    struct tuple {
        double v;
        int g;
        int delta;
    };
    typedef std::vector<tuple> tuples_t;

    void do_insert(double v);
    tuples_t::iterator find_insertion_index(double v);
    int determine_delta(tuples_t::iterator it);
    void compress();

    double m_epsilon;
    int m_one_over_2e;
    tuples_t m_S;
    int m_n;
};

std::ostream& operator<<(std::ostream& os, const gk& g);

};