window.BENCHMARK_DATA = {
  "lastUpdate": 1640207371369,
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
          "id": "b42047727f6bb86b6a3bd4d8f60ee3183e013f53",
          "message": "Merge pull request #53 from sengelha/redo_bmarks\n\nchg: Rewrite benchmarks to be clearer about what they are testing",
          "timestamp": "2021-12-22T11:50:30-06:00",
          "tree_id": "0fa5e0f8c81517f70eea21a544cf99fe539a9f7e",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/b42047727f6bb86b6a3bd4d8f60ee3183e013f53"
        },
        "date": 1640195662031,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 154327583.31298828,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 154272440 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 662258625.0305176,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 662125800.0000001 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4710682868.95752,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4710012100 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 123083074.88759358,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 123068916.66666682 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 441854357.7194214,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 441792650 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3579751968.383789,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3566156599.9999995 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 24036393880.844116,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 24028236099.999996 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 331135034.5611572,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 331093550.0000021 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 621391773.223877,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 621306799.9999993 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "5cce259a7537407db575b88223d57bd0447bbfd8",
          "message": "Merge pull request #54 from sengelha/move_bands_to_class\n\nchg: Move gk band calculation into separate class",
          "timestamp": "2021-12-22T14:11:30-06:00",
          "tree_id": "53f26a09bca3082509006a8c40fca042527c2060",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/5cce259a7537407db575b88223d57bd0447bbfd8"
        },
        "date": 1640204105432,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 131036520.00427246,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 131029720 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 567529916.7633057,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 567359999.9999999 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4033338308.3343506,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4033036400.0000005 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 115935961.4054362,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 115927983.33333324 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 387908339.50042725,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 387891149.99999976 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3105040550.2319336,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3096187199.999999 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 20681261301.04065,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 20675363200 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 286401987.07580566,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 286364400.00000006 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 531089782.71484375,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 531057399.9999946 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "905e9b8991c908ee08eb15c16dbd93b6c0a2cbfa",
          "message": "Merge pull request #55 from sengelha/optimize_gk\n\nnew: Significantly speed up gk for small epsilon",
          "timestamp": "2021-12-22T14:53:26-06:00",
          "tree_id": "12c68f3bf23cfbae2dedceb801e57ccd87c9857e",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/905e9b8991c908ee08eb15c16dbd93b6c0a2cbfa"
        },
        "date": 1640206612177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 130252313.6138916,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 130225920 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 564686536.7889404,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 564658100 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4121505975.7232666,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4121231799.9999995 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 108129779.4977824,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108119299.99999996 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 384816408.15734863,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 384803300.0000002 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3118571996.688843,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3106635000.0000005 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18680848.573383532,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18675942.10526318 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77588134.34176975,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77580622.2222223 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 540161848.0682373,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 540114400.0000002 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "2d6d0ef0a7ee3df31ab92dd6573c8351cf089690",
          "message": "Merge pull request #56 from sengelha/document_perf\n\ndoc: Add performance table to README",
          "timestamp": "2021-12-22T15:06:20-06:00",
          "tree_id": "9d705c44f5efcbea171fd1f674a2f1c33275d684",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/2d6d0ef0a7ee3df31ab92dd6573c8351cf089690"
        },
        "date": 1640207370921,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 129933738.7084961,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 129927040.00000003 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 564045667.6483154,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 563988799.9999998 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4127355098.724365,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4119812700.0000005 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 107920606.93105061,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 107908999.99999996 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 383029460.9069824,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 382993449.9999998 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3132116079.3304443,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3101128299.999999 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18851492.85599992,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18846529.72972974 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77153815.1635064,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77146133.33333334 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 540539026.260376,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 540528600 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}