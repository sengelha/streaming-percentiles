#include "custom_number_type.hpp"
#include "minimal_number_type.hpp"
#include <gtest/gtest.h>
#include <iostream>
#include <random>
#include <stmpct/qdigest.hpp>
#include <type_traits>
#include <vector>

#ifndef ARRAYSIZE
#define ARRAYSIZE(x) (sizeof(x) / sizeof(x[0]))
#endif

using namespace std;
using namespace stmpct;

TEST(qdigest_summary, builds_correctly) {
    qdigest_summary summary = qdigest_summary::builder(5)
                                  .insert(0)
                                  .insert(2, 4)
                                  .insert(3, 6)
                                  .insert(4, 1)
                                  .insert(5, 1)
                                  .insert(6, 1)
                                  .insert(7, 1)
                                  .build();
    std::stringstream ss;
    ss << summary;
    ASSERT_EQ(ss.str(), R"EOF((0, 7, 1)
+- (0, 3, 0)
|  +- 
|  `- (2, 3, 0)
|     +- (2, 2, 4)
|     `- (3, 3, 6)
`- (4, 7, 0)
   +- (4, 5, 2)
   `- (6, 7, 2))EOF");
}

TEST(qdigest, example_from_paper) {
    qdigest c(5);
    c.insert(0);
    c.insert(2, 4);
    c.insert(3, 6);
    c.insert(4, 1);
    c.insert(5, 1);
    c.insert(6, 1);
    c.insert(7, 1);
    int p50 = c.quantile(0.5);
    ASSERT_EQ(3, p50);
}

TEST(qdigest, hundred_int) {
    qdigest c(100);
    for (int i = 1; i <= 100; ++i) {
        c.insert(i);
    }
    int p95 = c.quantile(0.95);
    ASSERT_EQ(p95, 95);
}