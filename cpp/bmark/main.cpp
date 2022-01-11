#include <benchmark/benchmark.h>
#include <stmpct/gk.hpp>
#include <stmpct/ckms_hbq.hpp>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/ckms_uq.hpp>

enum class data_order {
  sorted,
  random,
};

template <class ...Args>
static void BM_ckms_hbq(benchmark::State& state, Args&&... args) {
  auto tuple = std::forward_as_tuple(std::forward<Args>(args)...);
  double epsilon = std::get<0>(tuple);
  int n = std::get<1>(tuple);
  data_order order = std::get<2>(tuple);

  for (auto _ : state) {
    srand(12345);
    stmpct::ckms_hbq<double> g(epsilon);
    for (int i = 1; i <= n; ++i) {
      switch (order) {
        case data_order::sorted:
          g.insert(i);
          break;
        case data_order::random:
          g.insert(rand());
          break;
      }
    }
    benchmark::DoNotOptimize(g.quantile(0.95));
  }
  state.counters["Rate"] = benchmark::Counter(n, benchmark::Counter::kIsRate);
}

template <class ...Args>
static void BM_ckms_lbq(benchmark::State& state, Args&&... args) {
  auto tuple = std::forward_as_tuple(std::forward<Args>(args)...);
  double epsilon = std::get<0>(tuple);
  int n = std::get<1>(tuple);
  data_order order = std::get<2>(tuple);

  for (auto _ : state) {
    srand(12345);
    stmpct::ckms_lbq<double> g(epsilon);
    for (int i = 1; i <= n; ++i) {
      switch (order) {
        case data_order::sorted:
          g.insert(i);
          break;
        case data_order::random:
          g.insert(rand());
          break;
      }
    }
    benchmark::DoNotOptimize(g.quantile(0.95));
  }
  state.counters["Rate"] = benchmark::Counter(n, benchmark::Counter::kIsRate);
}

template <class ...Args>
static void BM_ckms_uq(benchmark::State& state, Args&&... args) {
  auto tuple = std::forward_as_tuple(std::forward<Args>(args)...);
  double epsilon = std::get<0>(tuple);
  int n = std::get<1>(tuple);
  data_order order = std::get<2>(tuple);

  for (auto _ : state) {
    srand(12345);
    stmpct::ckms_uq<double> g(epsilon);
    for (int i = 1; i <= n; ++i) {
      switch (order) {
        case data_order::sorted:
          g.insert(i);
          break;
        case data_order::random:
          g.insert(rand());
          break;
      }
    }
    benchmark::DoNotOptimize(g.quantile(0.95));
  }
  state.counters["Rate"] = benchmark::Counter(n, benchmark::Counter::kIsRate);
}

template <class ...Args>
static void BM_gk(benchmark::State& state, Args&&... args) {
  auto tuple = std::forward_as_tuple(std::forward<Args>(args)...);
  double epsilon = std::get<0>(tuple);
  int n = std::get<1>(tuple);
  data_order order = std::get<2>(tuple);

  for (auto _ : state) {
    srand(12345);
    stmpct::gk<double> g(epsilon);
    for (int i = 1; i <= n; ++i) {
      switch (order) {
        case data_order::sorted:
          g.insert(i);
          break;
        case data_order::random:
          g.insert(rand());
          break;
      }
    }
    benchmark::DoNotOptimize(g.quantile(0.95));
  }
  state.counters["Rate"] = benchmark::Counter(n, benchmark::Counter::kIsRate);
}

BENCHMARK_CAPTURE(BM_ckms_hbq, e0_1_n1000000_sorted, 0.1, 1000000, data_order::sorted)->Name("ckms_hbq e=0.1 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_hbq, e0_01_n1000000_sorted, 0.01, 1000000, data_order::sorted)->Name("ckms_hbq e=0.01 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_hbq, e0_001_n1000000_sorted, 0.001, 1000000, data_order::sorted)->Name("ckms_hbq e=0.001 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_hbq, e0_1_n1000000_random, 0.1, 1000000, data_order::random)->Name("ckms_hbq e=0.1 n=1000000 random");
BENCHMARK_CAPTURE(BM_ckms_hbq, e0_01_n1000000_random, 0.01, 1000000, data_order::random)->Name("ckms_hbq e=0.01 n=1000000 random");
BENCHMARK_CAPTURE(BM_ckms_hbq, e0_001_n1000000_random, 0.001, 1000000, data_order::random)->Name("ckms_hbq e=0.001 n=1000000 random");
// BENCHMARK_CAPTURE(BM_ckms_lbq, e0_1_n1000000_sorted, 0.1, 1000000)->Name("ckms_lbq e=0.1 n=1000000 sorted");
// BENCHMARK_CAPTURE(BM_ckms_lbq, e0_01_n1000000_sorted, 0.01, 1000000)->Name("ckms_lbq e=0.01 n=1000000 sorted");
// BENCHMARK_CAPTURE(BM_ckms_lbq, e0_001_n1000000_sorted, 0.001, 1000000)->Name("ckms_lbq e=0.001 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_uq, e0_1_n1000000_sorted, 0.1, 1000000, data_order::sorted)->Name("ckms_uq e=0.1 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_uq, e0_01_n1000000_sorted, 0.01, 1000000, data_order::sorted)->Name("ckms_uq e=0.01 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_uq, e0_001_n1000000_sorted, 0.001, 1000000, data_order::sorted)->Name("ckms_uq e=0.001 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_ckms_uq, e0_1_n1000000_sorted, 0.1, 1000000, data_order::random)->Name("ckms_uq e=0.1 n=1000000 random");
BENCHMARK_CAPTURE(BM_ckms_uq, e0_01_n1000000_sorted, 0.01, 1000000, data_order::random)->Name("ckms_uq e=0.01 n=1000000 random");
BENCHMARK_CAPTURE(BM_ckms_uq, e0_001_n1000000_sorted, 0.001, 1000000, data_order::random)->Name("ckms_uq e=0.001 n=1000000 random");
BENCHMARK_CAPTURE(BM_gk, e0_1_n1000000_sorted, 0.1, 1000000, data_order::sorted)->Name("gk e=0.1 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_gk, e0_01_n1000000_sorted, 0.01, 1000000, data_order::sorted)->Name("gk e=0.01 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_gk, e0_001_n1000000_sorted, 0.001, 1000000, data_order::sorted)->Name("gk e=0.001 n=1000000 sorted");
BENCHMARK_CAPTURE(BM_gk, e0_1_n1000000_sorted, 0.1, 1000000, data_order::random)->Name("gk e=0.1 n=1000000 random");
BENCHMARK_CAPTURE(BM_gk, e0_01_n1000000_sorted, 0.01, 1000000, data_order::random)->Name("gk e=0.01 n=1000000 random");
BENCHMARK_CAPTURE(BM_gk, e0_001_n1000000_sorted, 0.001, 1000000, data_order::random)->Name("gk e=0.001 n=1000000 random");

BENCHMARK_MAIN();