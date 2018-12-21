#define BOOST_TEST_MODULE ckms_hbq_tests
#include <boost/test/unit_test.hpp>
#include <iostream>
#include <random>
class ckms_tq_unit_tests;
#include <stmpct/ckms_tq.hpp>
#include "custom_number_type.hpp"
#include "minimal_number_type.hpp"

#ifndef ARRAYSIZE
# define ARRAYSIZE(x) (sizeof(x)/sizeof(x[0]))
#endif

using namespace std;
using namespace stmpct;

BOOST_AUTO_TEST_CASE(ckms_tq_double)
{
    std::vector<targeted_quantile> tqs;
    tqs.emplace_back(0.125, 0.02);
    tqs.emplace_back(0.375, 0.02);
    tqs.emplace_back(0.75, 0.04);
    tqs.emplace_back(0.875, 0.01);
    ckms_tq<double> c(tqs.begin(), tqs.end());
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    double p95 = c.quantile(0.95);
    BOOST_CHECK_CLOSE(95, p95, 0.01);
}

BOOST_AUTO_TEST_CASE(ckms_tq_custom_number_type)
{
    std::vector<targeted_quantile> tqs;
    tqs.emplace_back(0.125, 0.02);
    tqs.emplace_back(0.375, 0.02);
    tqs.emplace_back(0.75, 0.04);
    tqs.emplace_back(0.875, 0.01);
    ckms_tq<custom_number_type> c(tqs.begin(), tqs.end());
    for (int i = 1; i <= 100; ++i) {
        c.insert(custom_number_type(i));
    }
    custom_number_type p95 = c.quantile(0.95);
    BOOST_CHECK_CLOSE(custom_number_type(95), p95, custom_number_type(0.01));
}

// Validates that stmpct::ckms_tq works on a number type with the absolute
// minimal number of requirements.  We can't use BOOST_CHECK_CLOSE
// because that imposes all sorts of additional requirements on
// the number type.
BOOST_AUTO_TEST_CASE(ckms_tq_minimal_number_type)
{
    std::vector<targeted_quantile> tqs;
    tqs.emplace_back(0.125, 0.02);
    tqs.emplace_back(0.375, 0.02);
    tqs.emplace_back(0.75, 0.04);
    tqs.emplace_back(0.875, 0.01);
    ckms_tq<minimal_number_type> c(tqs.begin(), tqs.end());
    for (int i = 1; i <= 100; ++i) {
        c.insert(minimal_number_type(i));
    }
    minimal_number_type p95 = c.quantile(0.95);
    // Supress unused variable warning
    p95 = p95;
}

BOOST_AUTO_TEST_CASE(ckms_tq_stress)
{
    std::uniform_int_distribution<> ntq_dist(1, 10);
    std::uniform_real_distribution<double> phi_dist(0, 1);
    std::uniform_real_distribution<double> epsilon_dist(0.01, 0.1);
    std::uniform_real_distribution<double> val_dist(0, 1);
    std::default_random_engine re;

    for (int i = 0; i < 10; ++i) {
        int ntqs = ntq_dist(re);
        std::vector<targeted_quantile> tqs;
        for (int j = 0; j < ntqs; ++j) {
            tqs.emplace_back(phi_dist(re), epsilon_dist(re));
        }
        ckms_tq<double> c(tqs.begin(), tqs.end());

        // Seed ckms_hbq so it becomes stable
        for (int j = 0; j < 100; ++j) {
            c.insert(val_dist(re));
        }

        for (int j = 0; j < 1000; ++j) {
            c.insert(val_dist(re));
            for (double phi = 0.01; phi < 1; phi += 0.01) {
                double q = c.quantile(phi);
                BOOST_CHECK_GT(q, 0);
                BOOST_CHECK_LT(q, 1);
            }
        }
    }
}


// TODO: Re-enable internal implementation tests
/*
// This is a friend class to stmpct::ckms_hbq and provides methods
// to allow access to private members of ckms_hbq from unit tests.
class ckms_hbq_unit_tests
{
public:
    typedef typename ckms_hbq::tuples_t tuples_t;
    static double epsilon(const ckms_hbq& c) { return c.m_epsilon; }
    static int one_over_2e(const ckms_hbq& c) { return c.m_one_over_2e; }
    static int n(const ckms_hbq& c) { return c.m_n; }
    static tuples_t S(const ckms_hbq& c) { return c.m_S; }
};
*/

/*
BOOST_AUTO_TEST_CASE(ckms_hbq_inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13, 16, 17};
    ckms_hbq c(0.1);
    for (int i = 0; i < ARRAYSIZE(seq); ++i)
        c.insert(seq[i]);
    BOOST_CHECK_EQUAL(ckms_hbq_unit_tests::epsilon(c), 0.1);
    BOOST_CHECK_EQUAL(ckms_hbq_unit_tests::one_over_2e(c), 5);
    ckms_hbq_unit_tests::tuples_t expectedS {
        { 1, 1, 0 },
        { 2, 1, 0 },
        { 3, 1, 0 },
        { 4, 1, 0 },
        { 5, 1, 0 },
        { 6, 1, 0 },
        { 7, 1, 0 },
        { 8, 1, 0 },
        { 9, 1, 0 },
        { 11, 2, 0 },
        { 13, 1, 1 },
        { 14, 2, 0 },
        { 16, 1, 1 },
        { 18, 3, 0 },
        { 20, 2, 0 },
    };
    BOOST_CHECK_EQUAL(ckms_hbq_unit_tests::S(c), expectedS);
    BOOST_CHECK_EQUAL(ckms_hbq_unit_tests::n(c), ARRAYSIZE(seq));
}
*/
