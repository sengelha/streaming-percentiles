#include <benchmark/benchmark.h>
#include <stmpct/gk.hpp>
#include <stmpct/ckms_hbq.hpp>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/ckms_uq.hpp>

static void BM_ckms_hbq(benchmark::State& state) {
  for (auto _ : state) {
    stmpct::ckms_hbq<double> g(0.0005);
    for (int i = 1; i <= 100000; ++i) {
        g.insert(i);
    }
    g.quantile(0.95);
  }
}

static void BM_ckms_lbq(benchmark::State& state) {
  for (auto _ : state) {
    stmpct::ckms_hbq<double> g(0.0005);
    for (int i = 1; i <= 100000; ++i) {
        g.insert(i);
    }
    g.quantile(0.95);
  }
}

static void BM_ckms_uq(benchmark::State& state) {
  for (auto _ : state) {
    stmpct::ckms_uq<double> g(0.0005);
    for (int i = 1; i <= 100000; ++i) {
        g.insert(i);
    }
    g.quantile(0.95);
  }
}

static void BM_gk(benchmark::State& state) {
  for (auto _ : state) {
    stmpct::gk<double> g(0.0005);
    for (int i = 1; i <= 100000; ++i) {
        g.insert(i);
    }
    g.quantile(0.95);
  }
}

BENCHMARK(BM_ckms_hbq);
BENCHMARK(BM_ckms_lbq);
BENCHMARK(BM_ckms_uq);
BENCHMARK(BM_gk);

BENCHMARK_MAIN();