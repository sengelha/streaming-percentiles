#include <algorithm>
#include <iostream>
#include <random>       // std::default_random_engine
#include <cassert>
#include <stmpct/gk.hpp>
#include "compat/gettimeofday.h"

#ifndef ARRAYSIZE
# define ARRAYSIZE(x) (sizeof(x) / sizeof(x[0]))
#endif

using namespace std;
using namespace stmpct;

static void explore_gk()
{
    std::vector<double> vals;
    for (int i = 1; i <= 10; ++i) {
        vals.push_back(i);
    }
    shuffle(vals.begin(), vals.end(), default_random_engine(12345));

    gk gk(0.1);
    int i = 0;
    //std::cout << "Initial state: " << gk << "\n";
    for_each(vals.begin(), vals.end(), [&](double v) {
        gk.insert(v);
        std::cout << "After inserting " << v << ": " << gk << "\n";
    });
    std::cout << "10% = " << gk.quantile(0.1) << "\n"
              << "50% = " << gk.quantile(0.5) << "\n"
              << "90% = " << gk.quantile(0.9) << "\n";
}

static void algorithm_comparison()
{
    std::vector<double> vals;
    for (int i = 0; i != 100000; ++i) {
        vals.push_back(rand() % 100 + 1);
    }

    gk gk(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { gk.insert(v); });
    cout << "GK algorithm:\n"
         << "50% = " << gk.quantile(0.5) << "\n"
         << "90% = " << gk.quantile(0.9) << "\n"
         << "95% = " << gk.quantile(0.95) << "\n"
         << "99% = " << gk.quantile(0.99) << "\n";

    // Exact (do this last, because it sorts the array)
    sort(vals.begin(), vals.end());
    cout << "Exact:\n"
         << "50% = " << vals[(int)(vals.size() * 0.5)] << "\n"
         << "90% = " << vals[(int)(vals.size() * 0.9)] << "\n"
         << "95% = " << vals[(int)(vals.size() * 0.95)] << "\n"
         << "99% = " << vals[(int)(vals.size() * 0.99)] << "\n";
}

static void gk_perf()
{
    std::vector<double> vals;
    for (int i = 0; i != 1000000; ++i) {
        vals.push_back(rand() % 100 + 1);
    }

    double epsilons[] = { 0.1, 0.05, 0.01, 0.005, 0.001 };
    for (int i = 0; i < ARRAYSIZE(epsilons); ++i) {
        double epsilon = epsilons[i];

        struct timeval start;
        gettimeofday(&start, NULL);
        gk gk(epsilon);
        for_each(vals.begin(), vals.end(), [&](double v) { gk.insert(v); });
        cout << "p50 = " << gk.quantile(0.5) << "\n";

        struct timeval end;
        gettimeofday(&end, NULL);

        long start_us = ((unsigned long long)start.tv_sec * 1000000) + start.tv_usec;
        long end_us = ((unsigned long long)end.tv_sec * 1000000) + end.tv_usec;
        int n = (int)vals.size();
        long duration_us = end_us - start_us;
        double n_per_us = n / (double)duration_us;
        double n_per_ms = 1000 * n_per_us;
        double n_per_sec = 1000 * n_per_ms;
        cout << "epsilon: " << epsilon
            << ". # elems: " << n
            << ". Duration (us): " << duration_us
            << ". #/microsec: " << n_per_us
            << ". #/ms: " << n_per_ms
            << ". #/sec: " << n_per_sec
            << "\n";
    }
}

int main(void)
{
    srand(12345);
    explore_gk();
    algorithm_comparison();
    gk_perf();
    return 0;
}