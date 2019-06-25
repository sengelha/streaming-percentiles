#include <algorithm>
#include <iostream>
#include <random>       // std::default_random_engine
#include <cassert>
#include <stmpct/gk.hpp>
#include <stmpct/ckms_hbq.hpp>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/ckms_uq.hpp>
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

    gk<double> gk(0.1);
    for_each(vals.begin(), vals.end(), [&](double v) {
        gk.insert(v);
    });
    cout << "10% = " << gk.quantile(0.1) << "\n"
         << "50% = " << gk.quantile(0.5) << "\n"
         << "90% = " << gk.quantile(0.9) << "\n";
}

static void algorithm_comparison()
{
    std::vector<double> vals;
    for (int i = 0; i != 10000; ++i) {
        vals.push_back(rand() % 100 + 1);
    }

    gk<double> gk(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { gk.insert(v); });
    cout << "GK algorithm (epsilon = 0.01):\n"
         << "50% = " << gk.quantile(0.5) << "\n"
         << "90% = " << gk.quantile(0.9) << "\n"
         << "95% = " << gk.quantile(0.95) << "\n"
         << "99% = " << gk.quantile(0.99) << "\n";

    ckms_uq<double> ckms_uq(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { ckms_uq.insert(v); });
    cout << "CKMS_UQ algorithm (epsilon = 0.01):\n"
         << "50% = " << ckms_uq.quantile(0.5) << "\n"
         << "90% = " << ckms_uq.quantile(0.9) << "\n"
         << "95% = " << ckms_uq.quantile(0.95) << "\n"
         << "99% = " << ckms_uq.quantile(0.99) << "\n";

    ckms_lbq<double> ckms_lbq(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { ckms_lbq.insert(v); });
    cout << "CKMS_LBQ algorithm (epsilon = 0.01):\n"
         << "50% = " << ckms_lbq.quantile(0.5) << "\n"
         << "90% = " << ckms_lbq.quantile(0.9) << "\n"
         << "95% = " << ckms_lbq.quantile(0.95) << "\n"
         << "99% = " << ckms_lbq.quantile(0.99) << "\n";

    // Exact (do this last, because it sorts the array)
    sort(vals.begin(), vals.end());
    cout << "Exact:\n"
         << "50% = " << vals[(int)(vals.size() * 0.5)] << "\n"
         << "90% = " << vals[(int)(vals.size() * 0.9)] << "\n"
         << "95% = " << vals[(int)(vals.size() * 0.95)] << "\n"
         << "99% = " << vals[(int)(vals.size() * 0.99)] << "\n";
}

template <typename stmpct_alg>
static long measure_perf(stmpct_alg& alg, const std::vector<double>& vals)
{
    struct timeval start;
    gettimeofday(&start, NULL);

    for_each(vals.begin(), vals.end(), [&](double v) { alg.insert(v); });

    struct timeval end;
    gettimeofday(&end, NULL);

    long start_us = ((unsigned long long)start.tv_sec * 1000000) + start.tv_usec;
    long end_us = ((unsigned long long)end.tv_sec * 1000000) + end.tv_usec;
    return end_us - start_us;
}

static void perf_comparison()
{
    cout << "Running performance comparison...\n";

    cout << "N,Algorithm,Epsilon,Duration (us),#/sec\n";
    int ns[] = { 1000, 10000, 100000 };
    for (size_t i = 0; i != ARRAYSIZE(ns); ++i) {
        int n = ns[i];

        std::vector<double> vals;
        vals.reserve(n);
        for (int j = 0; j != n; ++j) {
            vals.push_back(rand() % 100 + 1);
        }

        double epsilons[] = { 0.1, 0.05, 0.01, 0.005, 0.001 };
        for (size_t j = 0; j != ARRAYSIZE(epsilons); ++j) {
            double epsilon = epsilons[j];

            {
                gk<double> gk(epsilon);
                long duration_us = measure_perf(gk, vals);
                double n_per_s = n / (duration_us / 1000000.0);
                cout << vals.size() << ",GK," << epsilon << "," << duration_us << "," << n_per_s << "\n";
            }

            {
                ckms_uq<double> ckms_uq(epsilon);
                long duration_us = measure_perf(ckms_uq, vals);
                double n_per_s = n / (duration_us / 1000000.0);
                cout << vals.size() << ",CKMS_UQ," << epsilon << "," << duration_us << "," << n_per_s << "\n";
            }

            {
                ckms_hbq<double> ckms_hbq(epsilon);
                long duration_us = measure_perf(ckms_hbq, vals);
                double n_per_s = n / (duration_us / 1000000.0);
                cout << vals.size() << ",CKMS_HBQ," << epsilon << "," << duration_us << "," << n_per_s << "\n";
            }

            {
                ckms_lbq<double> ckms_lbq(epsilon);
                long duration_us = measure_perf(ckms_lbq, vals);
                double n_per_s = n / (duration_us / 1000000.0);
                cout << vals.size() << ",CKMS_LBQ," << epsilon << "," << duration_us << "," << n_per_s << "\n";
            }

        }
    }
}

int main(void)
{
    srand(12345);
    explore_gk();
    algorithm_comparison();
    perf_comparison();
    return 0;
}

