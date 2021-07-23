#include "abs.hpp"
#include "custom_number_type.hpp"
#include "minimal_number_type.hpp"
#include <gtest/gtest.h>
#include <iostream>
#include <random>
#include <stmpct/ckms_hbq.hpp>
#include <type_traits>
#include <vector>

#ifndef ARRAYSIZE
#define ARRAYSIZE(x) (sizeof(x) / sizeof(x[0]))
#endif

using namespace std;
using namespace stmpct;

TEST(ckms_hbq, double) {
    ckms_hbq<double> c(0.01);
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    double p95 = c.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(ckms_hbq, float) {
    ckms_hbq<float> c(0.01);
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    float p95 = c.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(ckms_hbq, long_double) {
    ckms_hbq<long double> c(0.01);
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    long double p95 = c.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(ckms_hbq, custom_number_type) {
    ckms_hbq<custom_number_type> c(0.01);
    for (int i = 1; i <= 100; ++i) {
        c.insert(custom_number_type(i));
    }
    custom_number_type p95 = c.quantile(0.95);
    ASSERT_LT(abs(custom_number_type(95) - p95), custom_number_type(0.01));
}

// Validates that stmpct::ckms_hbq works on a number type with the absolute
// minimal number of requirements.  We can't use ASSERT_NEAR
// because that imposes all sorts of additional requirements on
// the number type.
TEST(ckms_hbq, minimal_number_type) {
    ckms_hbq<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    minimal_number_type p95 = g.quantile(0.95);
    ASSERT_LT(minimal_number_type(94), p95);
    ASSERT_LT(p95, minimal_number_type(96));
}

TEST(ckms_hbq, stress) {
    std::uniform_real_distribution<double> unif(0, 1);
    std::default_random_engine re;

    for (double epsilon = 0.01; epsilon <= 0.1; epsilon += 0.01) {
        ckms_hbq<double> c(epsilon);

        // Seed ckms_hbq so it becomes stable
        for (int i = 0; i < (int)1 / (2 * epsilon); ++i) {
            c.insert(unif(re));
        }

        for (int i = 0; i < 1000; ++i) {
            c.insert(unif(re));
            for (double phi = 0.01; phi < 1; phi += 0.01) {
                double q = c.quantile(phi);
                ASSERT_GT(q, 0);
                ASSERT_LT(q, 1);
            }
        }
    }
}

TEST(ckms_hbq, can_be_put_in_continer) {
    std::vector<ckms_hbq<minimal_number_type>> v;
    v.emplace_back(0.001);
    v.emplace_back(0.0001);
    for (auto it = v.begin(); it != v.end(); ++it) {
        for (int i = 1; i <= 100; ++i) {
            it->insert(minimal_number_type(i));
        }

        minimal_number_type p95 = it->quantile(0.95);
        ASSERT_LT(minimal_number_type(94), p95);
        ASSERT_LT(p95, minimal_number_type(96));
    }
}

TEST(ckms_hbq, is_copy_constructible) {
    ckms_hbq<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    ckms_hbq<minimal_number_type> g2(g);
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_LT(minimal_number_type(94), p95);
    ASSERT_LT(p95, minimal_number_type(96));
}

TEST(ckms_hbq, is_assignable) {
    ckms_hbq<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    ckms_hbq<minimal_number_type> g2 = g;
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_LT(minimal_number_type(94), p95);
    ASSERT_LT(p95, minimal_number_type(96));
}

TEST(ckms_hbq, is_movable) {
    ckms_hbq<minimal_number_type> c(0.0005);
    for (int i = 1; i <= 100; ++i) {
        c.insert(minimal_number_type(i));
    }
    ckms_hbq<minimal_number_type> c2 = std::move(c);
    minimal_number_type p95 = c2.quantile(0.95);
    ASSERT_LT(minimal_number_type(94), p95);
    ASSERT_LT(p95, minimal_number_type(96));
}

TEST(ckms_hbq, type_traits) {
    ASSERT_TRUE(std::is_move_constructible<ckms_hbq<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<ckms_hbq<double>>::value);
    ASSERT_TRUE(
        std::is_move_constructible<ckms_hbq<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<
                ckms_hbq<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_move_assignable<ckms_hbq<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_assignable<ckms_hbq<double>>::value);
    ASSERT_TRUE(std::is_move_assignable<ckms_hbq<minimal_number_type>>::value);
    ASSERT_TRUE(
        std::is_nothrow_move_assignable<ckms_hbq<minimal_number_type>>::value);
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
TEST(ckms_hbq, inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13,
16, 17}; ckms_hbq c(0.1); for (int i = 0; i < ARRAYSIZE(seq); ++i)
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
