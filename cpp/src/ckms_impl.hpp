#pragma once

#include <vector>

// TODO: Replace virtual function calls with
// something that can be inlined, e.g. templated
// functors
class ckms_impl {
public:
    ckms_impl() : m_n(0) {}
    virtual ~ckms_impl() = default;
    void insert(double v);
    double quantile(double phi);

protected:
    virtual bool compress_condition() const = 0;
    virtual double f(double r_i, int n) const = 0;

    int m_n;

private:
    struct tuple {
        double v;
        int g;
        int delta;

        tuple(double v, int g, int delta)
            : v(v), g(g), delta(delta) {}
    };

    // TODO: Evaluate replacing the below with multiset
    typedef std::vector<tuple> tuples_t;
    tuples_t m_S;

    void do_insert(double v);
    void compress();
    void merge(tuples_t::iterator it1, tuples_t::iterator it2);
};
