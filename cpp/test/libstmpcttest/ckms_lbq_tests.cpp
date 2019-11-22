#include <iostream>
#include <random>
#include <gtest/gtest.h>
class ckms_lbq_unit_tests;
#include <stmpct/ckms_lbq.hpp>
#include "abs.hpp"
#include "custom_number_type.hpp"
#include "minimal_number_type.hpp"

#ifndef ARRAYSIZE
# define ARRAYSIZE(x) (sizeof(x)/sizeof(x[0]))
#endif

using namespace std;
using namespace stmpct;

TEST(ckms_lbq, double)
{
    ckms_lbq<double> c(0.01);
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    double p95 = c.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(ckms_lbq, custom_number_type)
{
    ckms_lbq<custom_number_type> c(0.01);
    for (int i = 1; i <= 100; ++i) {
        c.insert(custom_number_type(i));
    }
    custom_number_type p95 = c.quantile(0.95);
    ASSERT_LT(abs(custom_number_type(95) - p95), custom_number_type(0.01));
}

// Validates that stmpct::ckms_lbq works on a number type with the absolute
// minimal number of requirements.  We can't use ASSERT_NEAR
// because that imposes all sorts of additional requirements on
// the number type.
TEST(ckms_lbq, minimal_number_type)
{
    ckms_lbq<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    minimal_number_type p95 = g.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(ckms_lbq, stress)
{
    std::uniform_real_distribution<double> unif(0, 1);
    std::default_random_engine re;

    for (double epsilon = 0.01; epsilon <= 0.1; epsilon += 0.01) {
        ckms_lbq<double> c(epsilon);

        // Seed ckms_lbq so it becomes stable
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

TEST(ckms_lbq, can_be_put_in_continer)
{
    std::vector<ckms_lbq<minimal_number_type>> v;
    v.emplace_back(0.001);
    v.emplace_back(0.0001);
    for (auto it = v.begin(); it != v.end(); ++it) {
        for (int i = 1; i <= 100; ++i) {
            it->insert(minimal_number_type(i));
        }

        minimal_number_type p95 = it->quantile(0.95);
        ASSERT_TRUE(minimal_number_type(94) < p95);
        ASSERT_TRUE(p95 < minimal_number_type(96));
    }
}

TEST(ckms_lbq, is_copy_constructible)
{
    ckms_lbq<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    ckms_lbq<minimal_number_type> g2(g);
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(ckms_lbq, is_assignable)
{
    ckms_lbq<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    ckms_lbq<minimal_number_type> g2 = g;
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(ckms_lbq, is_movable)
{
    ckms_lbq<minimal_number_type> c(0.0005);
    for (int i = 1; i <= 100; ++i) {
        c.insert(minimal_number_type(i));
    }
    ckms_lbq<minimal_number_type> c2 = std::move(c);
    minimal_number_type p95 = c2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(ckms_lbq, type_traits)
{
    ASSERT_TRUE(std::is_move_constructible<ckms_lbq<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<ckms_lbq<double>>::value);
    ASSERT_TRUE(std::is_move_constructible<ckms_lbq<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<ckms_lbq<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_move_assignable<ckms_lbq<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_assignable<ckms_lbq<double>>::value);
    ASSERT_TRUE(std::is_move_assignable<ckms_lbq<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_nothrow_move_assignable<ckms_lbq<minimal_number_type>>::value);
}

// TODO: Re-enable internal implementation tests
/*
// This is a friend class to stmpct::ckms_lbq and provides methods
// to allow access to private members of ckms_lbq from unit tests.
class ckms_lbq_unit_tests
{
public:
    typedef typename ckms_lbq::tuples_t tuples_t;
    static double epsilon(const ckms_lbq& c) { return c.m_epsilon; }
    static int one_over_2e(const ckms_lbq& c) { return c.m_one_over_2e; }
    static int n(const ckms_lbq& c) { return c.m_n; }
    static tuples_t S(const ckms_lbq& c) { return c.m_S; }
};

TEST(ckms_lbq, inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13, 16, 17};
    ckms_lbq c(0.1);
    for (int i = 0; i < ARRAYSIZE(seq); ++i)
        c.insert(seq[i]);
    ASSERT_TRUE_EQUAL(ckms_lbq_unit_tests::epsilon(c), 0.1);
    ASSERT_TRUE_EQUAL(ckms_lbq_unit_tests::one_over_2e(c), 5);
    ckms_lbq_unit_tests::tuples_t expectedS {
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
    ASSERT_TRUE_EQUAL(ckms_lbq_unit_tests::S(c), expectedS);
    ASSERT_TRUE_EQUAL(ckms_lbq_unit_tests::n(c), ARRAYSIZE(seq));
}

*/
