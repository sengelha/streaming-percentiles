#include <random>
#include <iostream> // TODO: Remove
#include <boost/test/unit_test.hpp>
#include <stmpct/gk.hpp>

#ifndef ARRAYSIZE
# define ARRAYSIZE(x) (sizeof(x)/sizeof(x[0]))
#endif

using namespace stmpct;

BOOST_AUTO_TEST_CASE(gk_algorithm)
{
    gk g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    double p95 = g.quantile(0.95);
    BOOST_CHECK_CLOSE(95, p95, 0.01);
}

BOOST_AUTO_TEST_CASE(gk_construct_band_lookup)
{
    { std::vector<int> v{0}; BOOST_TEST(gk::construct_band_lookup(0) == v); }
    { std::vector<int> v{gk::MAX_BAND, 0}; BOOST_TEST(gk::construct_band_lookup(1) == v); }
    { std::vector<int> v{gk::MAX_BAND, 1, 0}; BOOST_TEST(gk::construct_band_lookup(2) == v); }
    { std::vector<int> v{gk::MAX_BAND, 3, 3, 3, 3, 2, 2, 1, 0}; BOOST_TEST(gk::construct_band_lookup(8) == v); }
    { std::vector<int> v{gk::MAX_BAND, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 0}; BOOST_TEST(gk::construct_band_lookup(16) == v); }
    { std::vector<int> v{gk::MAX_BAND, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1, 0}; BOOST_TEST(gk::construct_band_lookup(25) == v); }
}

BOOST_AUTO_TEST_CASE(gk_inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13, 16, 17};
    gk g(0.1);
    for (int i = 0; i < ARRAYSIZE(seq); ++i)
        g.insert(seq[i]);
    BOOST_CHECK_EQUAL(g.m_epsilon, 0.1);
    BOOST_CHECK_EQUAL(g.m_one_over_2e, 5);
    gk::tuples_t expectedS {
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
    std::cout << "g = " << g << "\n";
    BOOST_TEST(g.m_S == expectedS);
    BOOST_CHECK_EQUAL(g.m_n, ARRAYSIZE(seq));
}

BOOST_AUTO_TEST_CASE(gk_stress)
{
    std::uniform_real_distribution<double> unif(0, 1);
    std::default_random_engine re;

    for (double epsilon = 0.01; epsilon <= 0.1; epsilon += 0.01) {
        gk g(epsilon);

        // Seed gk so it becomes stable
        for (int i = 0; i < (int)1 / (2 * epsilon); ++i) {
            g.insert(unif(re));
        }

        for (int i = 0; i < 1000; ++i) {
            g.insert(unif(re));
            for (double phi = 0.01; phi < 1; phi += 0.01) {
                double q = g.quantile(phi);
                BOOST_CHECK_GT(q, 0);
                BOOST_CHECK_LT(q, 1);
            }
        }
    }
}