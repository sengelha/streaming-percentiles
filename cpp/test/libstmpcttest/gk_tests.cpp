#include <complex>
#include <gtest/gtest.h>
#include <random>
class gk_unit_tests;
#include "abs.hpp"
#include "custom_number_type.hpp"
#include "minimal_number_type.hpp"
#include <stmpct/gk.hpp>

#ifndef ARRAYSIZE
#define ARRAYSIZE(x) (sizeof(x) / sizeof(x[0]))
#endif

using namespace stmpct;

TEST(gk, double) {
    gk<double> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    double p95 = g.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(gk, float) {
    gk<float> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    float p95 = g.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(gk, long_double) {
    gk<long double> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    long double p95 = g.quantile(0.95);
    ASSERT_NEAR(95, p95, 0.01);
}

TEST(gk, custom_number_type) {
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
TEST(gk, minimal_number_type) {
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    minimal_number_type p95 = g.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, stress) {
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

TEST(gk, can_be_put_in_continer) {
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

TEST(gk, is_copy_constructible) {
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    gk<minimal_number_type> g2(g);
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, is_assignable) {
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    gk<minimal_number_type> g2 = g;
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, is_movable) {
    gk<minimal_number_type> g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(minimal_number_type(i));
    }
    gk<minimal_number_type> g2 = std::move(g);
    minimal_number_type p95 = g2.quantile(0.95);
    ASSERT_TRUE(minimal_number_type(94) < p95);
    ASSERT_TRUE(p95 < minimal_number_type(96));
}

TEST(gk, type_traits) {
    ASSERT_TRUE(std::is_move_constructible<gk<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_constructible<gk<double>>::value);
    ASSERT_TRUE(std::is_move_constructible<gk<minimal_number_type>>::value);
    ASSERT_TRUE(
        std::is_nothrow_move_constructible<gk<minimal_number_type>>::value);
    ASSERT_TRUE(std::is_move_assignable<gk<double>>::value);
    ASSERT_TRUE(std::is_nothrow_move_assignable<gk<double>>::value);
    ASSERT_TRUE(std::is_move_assignable<gk<minimal_number_type>>::value);
    ASSERT_TRUE(
        std::is_nothrow_move_assignable<gk<minimal_number_type>>::value);
}

static std::vector<int> construct_band_lookup(int two_epsilon_n)
{
    gk_bands bands(two_epsilon_n);
    std::vector<int> result;
    for (int i = 0; i <= two_epsilon_n; ++i) {
        result.push_back(bands[i]);
    }
    return result;
}

TEST(gk_bands, array_index) {
    {
        std::vector<int> expected{0};
        std::vector<int> actual = construct_band_lookup(0);
        ASSERT_EQ(actual, expected);
    }
    {
        std::vector<int> expected{std::numeric_limits<int>::max(), 0};
        std::vector<int> actual = construct_band_lookup(1);
        ASSERT_EQ(actual, expected);
    }
    {
        std::vector<int> expected{std::numeric_limits<int>::max(), 1, 0};
        std::vector<int> actual = construct_band_lookup(2);
        ASSERT_EQ(actual, expected);
    }
    {
        std::vector<int> expected{std::numeric_limits<int>::max(), 3, 3, 3, 3, 2, 2, 1, 0};
        std::vector<int> actual = construct_band_lookup(8);
        ASSERT_EQ(actual, expected);
    }
    {
        std::vector<int> expected{std::numeric_limits<int>::max(), 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 0};
        std::vector<int> actual = construct_band_lookup(16);
        ASSERT_EQ(actual, expected);
    }
    {
        std::vector<int> expected{std::numeric_limits<int>::max(), 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1, 0};
        std::vector<int> actual = construct_band_lookup(25);
        ASSERT_EQ(actual, expected);
    }
}