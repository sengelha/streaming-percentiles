#include <random>
#include <complex>
#include <gtest/gtest.h>
class gk_unit_tests;
#include <stmpct/gk.hpp>
#include "abs.hpp"
#include "custom_number_type.hpp"
#include "minimal_number_type.hpp"

#ifndef ARRAYSIZE
# define ARRAYSIZE(x) (sizeof(x)/sizeof(x[0]))
#endif

using namespace stmpct;

TEST(gk, double)
{
    gk<double> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    double p95 = g.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(gk, float)
{
    gk<float> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    float p95 = g.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(gk, long_double)
{
    gk<long double> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    long double p95 = g.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(gk, custom_number_type)
{
    gk<custom_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(custom_number_type(i));
    }
    custom_number_type p95 = g.quantile(0.95);
    ASSERT_LT(abs(custom_number_type(95) - p95), custom_number_type(0.01));
}

// Validates that stmpct::gk works on a number type with the absolute
// minimal number of requirements.  We can't use ASSERT_NEAR
// because that imposes all sorts of additional requirements on
// the number type.
TEST(gk, minimal_number_type)
{
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    minimal_number_type p95 = g.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, stress)
{
    std::uniform_real_distribution<double> unif(0, 1);
    std::default_random_engine re;

    for (double epsilon = 0.01; epsilon <= 0.1; epsilon += 0.01) {
        gk<double> g(epsilon);

        // Seed gk so it becomes stable
        for (int i = 0; i < (int)1 / (2 * epsilon); ++i) {
            g.insert(unif(re));
        }

        for (int i = 0; i < 1000; ++i) {
            g.insert(unif(re));
            for (double phi = 0.01; phi < 1; phi += 0.01) {
                double q = g.quantile(phi);
                ASSERT_GT(q, 0);
                ASSERT_LT(q, 1);
            }
        }
    }
}

TEST(gk, can_be_put_in_continer)
{
    std::vector<gk<minimal_number_type>> v;
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

TEST(gk, is_copy_constructible)
{
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    gk<minimal_number_type> g2(g);
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, is_assignable)
{
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    gk<minimal_number_type> g2 = g;
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, is_movable)
{
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    gk<minimal_number_type> g2 = std::move(g);
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, type_traits)
{
    ASSERT_TRUE(std::is_move_constructible<gk<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<gk<double>>::value);
    ASSERT_TRUE(std::is_move_constructible<gk<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<gk<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_move_assignable<gk<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_assignable<gk<double>>::value);
    ASSERT_TRUE(std::is_move_assignable<gk<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_nothrow_move_assignable<gk<minimal_number_type>>::value);
}

// TODO: Re-enable internal implementation tests
/*

// This is a friend class to stmpct::gk and provides methods
// to allow access to private members of gk from unit tests.
class gk_unit_tests
{
public:
    typedef typename gk::tuples_t tuples_t;
    static std::vector<int> construct_band_lookup(int i) { return gk::construct_band_lookup(i); }
    static double epsilon(const gk& g) { return g.m_epsilon; }
    static int max_band() { return gk::MAX_BAND; }
    static int n(const gk& g) { return g.m_n; }
    static int one_over_2e(const gk& g) { return g.m_one_over_2e; }
    static gk::tuples_t S(const gk& g) { return g.m_S; }
};

TEST(gk, construct_band_lookup)
{
    { std::vector<int> v{0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(0) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(1) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(2) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 3, 3, 3, 3, 2, 2, 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(8) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(16) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(25) == v); }
}

TEST(gk, inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13, 16, 17};
    gk g(0.1);
    for (int i = 0; i < ARRAYSIZE(seq); ++i)
        g.insert(seq[i]);
    ASSERT_TRUE_EQUAL(gk_unit_tests::epsilon(g), 0.1);
    ASSERT_TRUE_EQUAL(gk_unit_tests::one_over_2e(g), 5);
    gk_unit_tests::tuples_t expectedS {
        { 1, 1, 0 },
        { 3, 2, 0 },
        { 5, 2, 0 },
        { 7, 1, 2 },
        { 8, 2, 0 },
        { 9, 1, 2 },
        { 11, 2, 0 },
        { 12, 1, 0 },
        { 13, 1, 2 },
        { 14, 1, 1 },
        { 16, 1, 2 },
        { 17, 1, 2 },
        { 18, 2, 0 },
        { 20, 2, 0 },
    };
    BOOST_TEST(gk_unit_tests::S(g) == expectedS);
    ASSERT_TRUE_EQUAL(gk_unit_tests::n(g), ARRAYSIZE(seq));
}

*/
