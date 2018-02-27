#include <boost/test/unit_test.hpp>
#include <stmpct/gk.hpp>

using namespace stmpct;

BOOST_AUTO_TEST_CASE(gk_algorithm)
{
    gk g(0.0005);
    for (int i = 1; i <= 100; ++i) {
        g.insert(i);
    }
    double q95 = g.quantile(0.95);
    BOOST_CHECK_EQUAL(95, q95);
}
