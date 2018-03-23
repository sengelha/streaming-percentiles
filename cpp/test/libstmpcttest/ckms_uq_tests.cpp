#define BOOST_TEST_MODULE ckms_uq_tests
#include <boost/test/unit_test.hpp>
#include <iostream>
#include <random>
class ckms_uq_unit_tests;
#include <stmpct/ckms_uq.hpp>

#ifndef ARRAYSIZE
# define ARRAYSIZE(x) (sizeof(x)/sizeof(x[0]))
#endif

using namespace stmpct;

BOOST_AUTO_TEST_CASE(ckms_uq_sanity)
{
    ckms_uq c(0.001);
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    double p95 = c.quantile(0.95);
    BOOST_CHECK_CLOSE(95, p95, 0.01);
}


/*
using namespace std;

// This is a friend class to stmpct::ckms_uq and provides methods
// to allow access to private members of ckms_uq from unit tests.
class ckms_uq_unit_tests
{
public:
    typedef typename ckms_uq::tuples_t tuples_t;
    static double epsilon(const ckms_uq& c) { return c.m_epsilon; }
    static int one_over_2e(const ckms_uq& c) { return c.m_one_over_2e; }
    static int n(const ckms_uq& c) { return c.m_n; }
    static tuples_t S(const ckms_uq& c) { return c.m_S; }
};

BOOST_AUTO_TEST_CASE(ckms_uq_inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13, 16, 17};
    ckms_uq c(0.1);
    for (int i = 0; i < ARRAYSIZE(seq); ++i)
        c.insert(seq[i]);
    BOOST_CHECK_EQUAL(ckms_uq_unit_tests::epsilon(c), 0.1);
    BOOST_CHECK_EQUAL(ckms_uq_unit_tests::one_over_2e(c), 5);
    ckms_uq_unit_tests::tuples_t expectedS {
        { 1, 1, 0 },
        { 5, 4, 0 },
        { 8, 3, 0 },
        { 12, 4, 0 },
        { 15, 3, 1 },
        { 16, 1, 2 },
        { 20, 4, 0 }
    };
    BOOST_CHECK_EQUAL(ckms_uq_unit_tests::S(c), expectedS);
    BOOST_CHECK_EQUAL(ckms_uq_unit_tests::n(c), ARRAYSIZE(seq));
}

BOOST_AUTO_TEST_CASE(ckms_uq_stress)
{
    std::uniform_real_distribution<double> unif(0, 1);
    std::default_random_engine re;

    for (double epsilon = 0.01; epsilon <= 0.1; epsilon += 0.01) {
        ckms_uq c(epsilon);

        // Seed ckms_uq so it becomes stable
        for (int i = 0; i < (int)1 / (2 * epsilon); ++i) {
            c.insert(unif(re));
        }

        for (int i = 0; i < 1000; ++i) {
            c.insert(unif(re));
            for (double phi = 0.01; phi < 1; phi += 0.01) {
                double q = c.quantile(phi);
                BOOST_CHECK_GT(q, 0);
                BOOST_CHECK_LT(q, 1);
            }
        }
    }
}
*/
