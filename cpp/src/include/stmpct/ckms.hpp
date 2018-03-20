#pragma once

// The base implementation of the Cormode-Korn-Muthukrishnan-Srivastava algorithm
// as defined in the paper Effective Computation of Biased Quantiles over Data Streams
#include <iosfwd>
#include <list>
#include <vector>
#include "stmpct.hpp"

namespace stmpct {

class ckms : public stmpctalg
{
public:
    ckms();
    virtual ~ckms() = default;
    virtual void insert(double v) final;
    virtual double quantile(double phi) final;

protected:
    virtual bool compress_condition() const = 0;
    virtual double f(double r_i, int n) const = 0;

    struct tuple {
        double v;
        int g;
        int delta;

        tuple(double v, int g, int delta) : v(v), g(g), delta(delta) {}

        bool operator==(const tuple& rhs) const {
            return v == rhs.v && g == rhs.g && delta == rhs.delta;
        }
    };

    typedef std::vector<tuple> tuples_t;
    tuples_t m_S;
    int m_n;

private:
    friend std::ostream& operator<<(std::ostream&, const ckms&);
    friend std::ostream& operator<<(std::ostream&, const ckms::tuples_t&);
    friend std::ostream& operator<<(std::ostream&, const ckms::tuple&);

    void do_insert(double v);
    void compress();
    void merge(tuples_t::iterator it1, tuples_t::iterator it2);
};

std::ostream& operator<<(std::ostream& os, const ckms& c);
std::ostream& operator<<(std::ostream& os, const ckms::tuples_t& c);
std::ostream& operator<<(std::ostream& os, const ckms::tuple& t);

}
