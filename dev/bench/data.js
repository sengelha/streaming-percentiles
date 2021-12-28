window.BENCHMARK_DATA = {
  "lastUpdate": 1640731307113,
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
      },
      {
        "commit": {
          "author": {
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "committer": {
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "distinct": true,
          "id": "718bf9dc8696eb6dc5ecec3ea3ec0e39eeb52dc3",
          "message": "chg: Add .bazelignore file",
          "timestamp": "2021-12-23T12:46:01-06:00",
          "tree_id": "ee8807f365cb9715c37db7650f2f177cd061e893",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/718bf9dc8696eb6dc5ecec3ea3ec0e39eeb52dc3"
        },
        "date": 1640285361767,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 129883003.23486328,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 129866180 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 565906763.0767822,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 564672599.9999998 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4123791933.0596924,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4120705799.9999995 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 108100930.8497111,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108094300.00000001 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 383400559.425354,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 383384249.99999976 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3105692386.6271973,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3104180100.0000005 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18652771.648607757,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18651950.00000003 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77069547.44127062,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77069144.44444439 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 539319753.6468506,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 539283400.0000004 ns\nthreads: 1"
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
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "distinct": true,
          "id": "600051aa7f59da48391a16132b057d08279856ab",
          "message": "chg: Upgrade rules_nodejs to 4.5.1",
          "timestamp": "2021-12-23T12:47:13-06:00",
          "tree_id": "1ca3e9c702c684114381ab39c9edaae18a4b98c7",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/600051aa7f59da48391a16132b057d08279856ab"
        },
        "date": 1640285431333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 139423322.6776123,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 139411220.00000003 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 633601903.9154053,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 633563300 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 5537941217.422485,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5537622499.999999 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 103851420.53876604,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 103841542.8571428 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 385056853.29437256,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 385039700.0000001 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 2761298656.463623,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2759004400.0000005 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 21868191.65945053,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21863990.624999996 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 72838597.82748753,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 72831122.22222224 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 539130210.8764648,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 538935300.0000004 ns\nthreads: 1"
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
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "distinct": true,
          "id": "a54e0563e4bea2872cbdc72f6987807a5b2a661b",
          "message": "chg: Move node tests to js/test/node BUILD file",
          "timestamp": "2021-12-23T12:48:38-06:00",
          "tree_id": "8b5e108bdfafef9ac16b4faa511d55bbe76ad6fc",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/a54e0563e4bea2872cbdc72f6987807a5b2a661b"
        },
        "date": 1640285536227,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 155645072.46017456,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 155559800.00000003 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 676157236.0992432,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 675909899.9999998 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4924543142.318726,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4923619400 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 130668020.24841309,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 130647399.99999997 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 458740949.6307373,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 458650700.00000066 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3703817367.553711,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3692820100.0000005 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 22330084.154682774,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22327645.161290318 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 92549145.2217102,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 92534275 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 643108844.7570801,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 642998700.0000014 ns\nthreads: 1"
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
          "id": "a54223166759ed09e388a6c39076571829cfc331",
          "message": "Merge pull request #57 from sengelha/add_minify_target\n\nnew: Add minified JS target and tests",
          "timestamp": "2021-12-23T13:27:03-06:00",
          "tree_id": "e681956e38d7e9554cd40e3eff9321c0f24881a5",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/a54223166759ed09e388a6c39076571829cfc331"
        },
        "date": 1640287808405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 130777025.22277832,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 129778180 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 564129829.4067383,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 563910599.9999998 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4119153261.1846924,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4116658900 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 108921527.86254883,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108911683.33333331 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 383706450.4623413,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 383695000.00000036 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3135199308.3953857,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3080166999.9999995 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18599903.261339344,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18595629.729729746 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77524529.5630561,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77518499.99999985 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 541021108.6273193,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 540980299.9999993 ns\nthreads: 1"
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
          "id": "ab26f5f6212a24e90fb6c802f523c949879daeea",
          "message": "Merge pull request #58 from sengelha/add_packages\n\nnew: Add JS and C++ .tar.gz packages",
          "timestamp": "2021-12-23T13:53:50-06:00",
          "tree_id": "16d640cd7e7d3a07983d63a97c69d13cca5c71ca",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/ab26f5f6212a24e90fb6c802f523c949879daeea"
        },
        "date": 1640289410237,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 129874324.79858398,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 129806260 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 564385414.1235352,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 563934700.0000001 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4116161346.435547,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4115684099.9999995 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 108055075.0096639,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108050650.00000001 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 383515954.01763916,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 383505800 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3097706556.3201904,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3088398700.000001 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18596926.250973262,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18592400.000000007 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77352576.78561741,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77346677.77777776 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 539572000.50354,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 539529899.9999998 ns\nthreads: 1"
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
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "distinct": true,
          "id": "2a0b7248fb6d31dc5c9ffd778db33f8ea87a4598",
          "message": "fix: Fix builds on Mac OS X due to missing mapfile",
          "timestamp": "2021-12-23T14:08:02-06:00",
          "tree_id": "d849c17b9c589744554d848edcd2da392f8ff277",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/2a0b7248fb6d31dc5c9ffd778db33f8ea87a4598"
        },
        "date": 1640290263141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 130557918.54858398,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 129736379.99999996 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 563403129.5776367,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 563337299.9999999 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4115057468.4143066,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4114847300 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 107978502.90934245,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 107971933.33333333 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 383358836.17401123,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 383341450.00000006 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3081534624.0997314,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3077515100.000001 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18633578.95299008,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18630134.210526314 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77473719.91475423,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77469955.55555555 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 540861606.5979004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 540844200.0000005 ns\nthreads: 1"
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
          "id": "489b871dd511ec564e6bed6d2685ca754f19f544",
          "message": "Merge pull request #59 from sengelha/upgrade_rules_emscripten\n\nchg: Upgrade rules_emscripten to 1.4.0",
          "timestamp": "2021-12-26T14:11:00-06:00",
          "tree_id": "296e7b9cea906082625a7da86edaad5152e0ea14",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/489b871dd511ec564e6bed6d2685ca754f19f544"
        },
        "date": 1640549645289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 130437278.7475586,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 130394959.99999997 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 563503742.2180176,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 563187399.9999999 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4115438938.140869,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4115068400 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 108259280.52266438,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108254833.33333324 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 384473323.8220215,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 384428149.99999976 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3087294340.133667,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3086048500.0000005 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18941488.530900743,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 18940461.1111111 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77191352.84423828,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77188155.55555558 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 539515495.300293,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 539479899.9999999 ns\nthreads: 1"
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
          "id": "22e6502da8f5a780a21f57496e8e1a994cbabcd7",
          "message": "Merge pull request #60 from sengelha/refactor_node_tests\n\nchg: Refactor node tests",
          "timestamp": "2021-12-27T21:23:50-06:00",
          "tree_id": "1320934cb07abe8fd5028356a6b031343eccd7e4",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/22e6502da8f5a780a21f57496e8e1a994cbabcd7"
        },
        "date": 1640662006004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 130404281.61621094,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 129946520 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 564312458.0383301,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 564151600 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 4114039421.081543,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4112986800 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 108201185.86222331,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108197116.66666664 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 382592201.23291016,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 382580199.9999996 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 3095921039.581299,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3085767799.999999 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 18557774.39318205,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18557055.263157893 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 77460289.00146484,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 77457422.22222221 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 539474964.1418457,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 539469699.9999998 ns\nthreads: 1"
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
            "email": "sengelha@gmail.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "distinct": true,
          "id": "dafb82399036f1a5da30da9507b972a6a4c6b5c6",
          "message": "chg: Remove map file from js package",
          "timestamp": "2021-12-28T16:38:32-06:00",
          "tree_id": "b3918d061a1cd052464f788411cdb337b0503e25",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/dafb82399036f1a5da30da9507b972a6a4c6b5c6"
        },
        "date": 1640731306285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ckms_hbq e=0.1 n=1000000 sorted",
            "value": 143716573.71520996,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 143677300 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.01 n=1000000 sorted",
            "value": 628407239.9139404,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 628234400.0000002 ns\nthreads: 1"
          },
          {
            "name": "ckms_hbq e=0.001 n=1000000 sorted",
            "value": 5536299228.668213,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5535623800 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.1 n=1000000 sorted",
            "value": 111328125,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 111316483.33333348 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.01 n=1000000 sorted",
            "value": 375164985.6567383,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 374330399.9999998 ns\nthreads: 1"
          },
          {
            "name": "ckms_uq e=0.001 n=1000000 sorted",
            "value": 2715191364.28833,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2649020999.9999995 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.1 n=1000000 sorted",
            "value": 19977930.613926478,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 19974094.285714272 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.01 n=1000000 sorted",
            "value": 71271586.41815186,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 71261689.99999987 ns\nthreads: 1"
          },
          {
            "name": "gk e=0.001 n=1000000 sorted",
            "value": 510833859.44366455,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 510771949.99999964 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}