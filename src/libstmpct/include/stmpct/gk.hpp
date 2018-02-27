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
    void compress();

    struct tuple {
        double v;
        double g;
        double delta;
    };

    double m_epsilon;
    int m_n;
    int m_rebalanceFreq;
    std::vector<tuple> m_tuples;
};

std::ostream& operator<<(std::ostream& os, const gk& g);

};