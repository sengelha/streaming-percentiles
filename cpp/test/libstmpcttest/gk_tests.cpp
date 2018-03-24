#define BOOST_TEST_MODULE gk_tests
#include <boost/test/unit_test.hpp>
#include <random>
class gk_unit_tests;
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

BOOST_AUTO_TEST_CASE(gk_construct_band_lookup)
{
    { std::vector<int> v{0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(0) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(1) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(2) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 3, 3, 3, 3, 2, 2, 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(8) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(16) == v); }
    { std::vector<int> v{gk_unit_tests::max_band(), 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1, 0}; BOOST_TEST(gk_unit_tests::construct_band_lookup(25) == v); }
}

BOOST_AUTO_TEST_CASE(gk_inner_state)
{
    int seq[] = {11, 20, 18, 5, 12, 6, 3, 2, 1, 8, 14, 19, 15, 4, 10, 7, 9, 13, 16, 17};
    gk g(0.1);
    for (int i = 0; i < ARRAYSIZE(seq); ++i)
        g.insert(seq[i]);
    BOOST_CHECK_EQUAL(gk_unit_tests::epsilon(g), 0.1);
    BOOST_CHECK_EQUAL(gk_unit_tests::one_over_2e(g), 5);
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
    BOOST_CHECK_EQUAL(gk_unit_tests::n(g), ARRAYSIZE(seq));
}

*/
