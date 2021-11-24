window.BENCHMARK_DATA = {
  "lastUpdate": 1637735197845,
  "repoUrl": "https://github.com/sengelha/streaming-percentiles",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db06cac0cb7bf4de24039d7230be324f4d3275d3",
          "message": "Merge pull request #46 from sengelha/add_benchmark_to_pipeline\n\nnew: Add performance benchmarks to CI pipeline",
          "timestamp": "2021-11-24T00:25:58-06:00",
          "tree_id": "1c66a5846a433dff50bcd2de1ab3dc9f15d5236d",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/db06cac0cb7bf4de24039d7230be324f4d3275d3"
        },
        "date": 1637735197417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq",
            "value": 930781364.440918,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 907025531.0000001 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq",
            "value": 904191493.9880371,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 904138330.0000001 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq",
            "value": 399383664.13116455,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 399366959.5 ns\nthreads: 1"
          },
          {
            "name": "BM_gk",
            "value": 158983230.5908203,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 158980804.7500001 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}