window.BENCHMARK_DATA = {
  "lastUpdate": 1638916368683,
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
          "id": "7192050ce2bba4a5dd200aa09004430a44571776",
          "message": "Merge pull request #47 from sengelha/benchmark_multiple_quantiles\n\nchg: Test multiple epsilons and counts in benchmarks",
          "timestamp": "2021-11-24T18:30:12-06:00",
          "tree_id": "f6d8e65648515687e539d7d09a95a7324650e187",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/7192050ce2bba4a5dd200aa09004430a44571776"
        },
        "date": 1637800297935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 39123.24673758234,
            "unit": "ns/iter",
            "extra": "iterations: 17333\ncpu: 39119.253966422424 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 84865.14690221698,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 84512.802026013 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 126411.69006855342,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 126379.85304990753 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 122189.87801347807,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 122175.12146247138 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 399490.105940999,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 399451.2350230415 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 1066792.1051265686,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1066795.7385826774 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 3869017.638729117,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3868633.8248587586 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 7132399.2131830575,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7132311.747252754 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3933538.447369586,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 3933496.7032967038 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 11350897.050672961,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11350434.451612886 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 59666505.22672213,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 59549110.84615384 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 270859082.5398763,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 269919985.0000002 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 39446.30312324659,
            "unit": "ns/iter",
            "extra": "iterations: 18073\ncpu: 39445.913351408155 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 80979.51265740371,
            "unit": "ns/iter",
            "extra": "iterations: 7944\ncpu: 80972.74018126892 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 125722.33764898716,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 125714.88411481552 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 122737.62377087749,
            "unit": "ns/iter",
            "extra": "iterations: 5669\ncpu: 122728.69095078472 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 387218.7300161882,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 387197.90397727257 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 1050797.6392844527,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1050479.501519756 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 3857212.5964694554,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 3856925.2722222363 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 7006642.842056728,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 7006099.861386154 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3848978.9270155923,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 3848619.502793304 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 11146564.637461016,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11145787.499999994 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 53634093.3579665,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 53634275.38461543 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 262224912.64343262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 262216400.6666665 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 27115.86932346672,
            "unit": "ns/iter",
            "extra": "iterations: 25687\ncpu: 27115.586872737207 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 50478.66752356861,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 50475.097691819166 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 109805.94275452454,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 109806.3032370672 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 96741.86621143282,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 96742.22666853237 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 295110.4519198322,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 295111.44275123446 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 643997.8735787527,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 643964.0638095259 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1997829.7935737357,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 1997696.2527472512 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 7057711.31829901,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7057356.0439560255 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 3076871.2361653647,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 3076658.4311110987 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 7305737.623234385,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 7305371.773195828 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 30213773.250579834,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 30212111.58333337 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 158334970.47424316,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 158331511.49999836 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 47823.904842760225,
            "unit": "ns/iter",
            "extra": "iterations: 14711\ncpu: 47820.541363605385 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 37488.79985447591,
            "unit": "ns/iter",
            "extra": "iterations: 17822\ncpu: 37486.36365166646 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 93333.91790656473,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 93328.91747888215 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 94135.60739340492,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 94134.90977635774 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 920079.3380538622,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 920029.7291666697 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 330755.9473685249,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 330747.6073903023 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1425354.7618482832,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1425272.0414847247 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 6029429.944973548,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 6028978.2233009925 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 33937442.87036714,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33935565.23809525 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 3064101.675282354,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 3061733.617391312 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 11293442.018570438,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11291488.129032245 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 99273511.34163992,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 99266413.28571455 ns\nthreads: 1"
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
          "id": "c823564449e4acafc6444c6972b8d02033cc04c6",
          "message": "chg: Upgrade bazel version to 4.2.1",
          "timestamp": "2021-11-28T21:46:24-06:00",
          "tree_id": "c4702fe29fd335fb23caf62f219eda1ac50fcbfe",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/c823564449e4acafc6444c6972b8d02033cc04c6"
        },
        "date": 1638157846483,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 38033.91351468842,
            "unit": "ns/iter",
            "extra": "iterations: 18414\ncpu: 38030.22710980775 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 79637.34057300446,
            "unit": "ns/iter",
            "extra": "iterations: 8787\ncpu: 79632.93524524871 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 121034.08966380807,
            "unit": "ns/iter",
            "extra": "iterations: 5788\ncpu: 121026.48617829989 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 118374.20374650665,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 118368.73912313119 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 381217.39047768986,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 381196.9443535188 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 1023523.302843971,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1023475.9153284664 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 3756202.677244781,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 3755956.451612903 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 6886151.757570776,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 6886097.019801977 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3869021.1364577487,
            "unit": "ns/iter",
            "extra": "iterations: 181\ncpu: 3868846.9226519363 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 11097968.57076978,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 11097882.253968256 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 52244406.480055586,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 52242074.92307692 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 257059176.76289877,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 257030903.66666713 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 37863.756014080216,
            "unit": "ns/iter",
            "extra": "iterations: 18276\ncpu: 37863.78742613263 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 79599.02083654644,
            "unit": "ns/iter",
            "extra": "iterations: 8814\ncpu: 79595.74347628775 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 120915.30510763623,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 120908.79398548206 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 118211.96567386943,
            "unit": "ns/iter",
            "extra": "iterations: 5910\ncpu: 118207.00203045683 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 381616.8248588554,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 381601.2415669203 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 1022137.5822153328,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1022081.9868995645 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 3758063.880346155,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 3757803.4247311726 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 6876001.263609027,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 6875667.712871282 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3872283.9144711993,
            "unit": "ns/iter",
            "extra": "iterations: 181\ncpu: 3872122.850828737 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 11073411.457122318,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 11072892.666666644 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 52335812.49530499,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 52329926.69230759 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 256983121.23616537,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 256981033.00000003 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 25725.263790351706,
            "unit": "ns/iter",
            "extra": "iterations: 27175\ncpu: 25725.005998160024 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 48077.813587087774,
            "unit": "ns/iter",
            "extra": "iterations: 14549\ncpu: 48076.40380782169 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 106035.11453408847,
            "unit": "ns/iter",
            "extra": "iterations: 6659\ncpu: 106033.7927616761 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 95178.05599522653,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 95174.18404823892 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 290191.5198045153,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 290177.89377593395 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 626225.9984594792,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 626203.5247079949 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1894910.2711033176,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 1894726.2810810802 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 6972678.984054412,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 6972327.474747488 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 3087042.7119049206,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 3086865.7444934035 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 7121942.48121612,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 7121804.306122439 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 29989646.82869289,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 29989231.521739155 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 153545808.79211426,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 153543566.00000045 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 46336.31304664127,
            "unit": "ns/iter",
            "extra": "iterations: 15104\ncpu: 46334.46517478856 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 37927.077177571606,
            "unit": "ns/iter",
            "extra": "iterations: 18419\ncpu: 37925.3631576089 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 93069.57200268561,
            "unit": "ns/iter",
            "extra": "iterations: 7526\ncpu: 93066.05939410077 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 92220.03000556142,
            "unit": "ns/iter",
            "extra": "iterations: 7591\ncpu: 92218.0295086282 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 914829.829342994,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 914786.7663185346 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 323438.53377410816,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 323421.9791183307 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1400769.7105407715,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1400732.3259999964 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 5941115.892850435,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 5940791.854700884 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 32388405.3663774,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32386659.227272738 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 3045685.394950535,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 3045548.700000003 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 11013999.581336975,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 11013500.031250011 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 96669163.02272251,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 96665213.99999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "steven.engelhardt@relativity.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "committer": {
            "email": "steven.engelhardt@relativity.com",
            "name": "Steven Engelhardt",
            "username": "sengelha"
          },
          "distinct": true,
          "id": "49ba2308ea75de25f8626751e25ab6d0ef94d1da",
          "message": "chg: Adjust CI to be more efficient",
          "timestamp": "2021-12-07T16:31:25-06:00",
          "tree_id": "b102768972d565eb0ceae3c2415118996a03c2f4",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/49ba2308ea75de25f8626751e25ab6d0ef94d1da"
        },
        "date": 1638916368206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 31463.0311110924,
            "unit": "ns/iter",
            "extra": "iterations: 22185\ncpu: 31462.677845391023 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 66481.67006841967,
            "unit": "ns/iter",
            "extra": "iterations: 10529\ncpu: 66477.80482476969 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 100888.44717184656,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 100880.53545690399 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 99238.98981843618,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 99017.8753177069 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 317528.81002881104,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 317467.76192639687 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 851431.6122607304,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 851391.4245742087 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 3183101.0624214453,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 3182966.6342592593 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 5804992.112957063,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5740166.688524588 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3138179.73628707,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 3137905.1973094177 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 9261849.679444965,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9261586.960526323 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 45329284.66796875,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45088397.46666667 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 214123805.363973,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 214119372.33333352 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 31455.90729026235,
            "unit": "ns/iter",
            "extra": "iterations: 22218\ncpu: 31455.64677288686 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 66507.65374215027,
            "unit": "ns/iter",
            "extra": "iterations: 10518\ncpu: 66505.20621791219 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 101169.08789506007,
            "unit": "ns/iter",
            "extra": "iterations: 6936\ncpu: 100913.35510380633 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 98832.64577166634,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 98828.62323546021 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 317132.7326129006,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 317079.18284936534 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 850828.2079475952,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 850753.5042630944 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 3255652.2724240324,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 3244060.0697674365 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 5737627.83334275,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 5737111.917355382 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3137373.603512888,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 3137221.7354260166 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 9254932.403564453,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9254664.473684253 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 44713214.03980255,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 44711122.37500008 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 213929971.05916342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 213921402.66666713 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 21684.349941900156,
            "unit": "ns/iter",
            "extra": "iterations: 32288\ncpu: 21682.517560703596 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 40308.61797188941,
            "unit": "ns/iter",
            "extra": "iterations: 17373\ncpu: 40306.06297127722 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 88401.10500153126,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 88399.87808564225 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 79639.47535943372,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 79633.21962032474 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 247816.34332777167,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 247805.14989369255 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 521021.88195437746,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 520995.04237918236 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1582165.1096257688,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 1582085.255656114 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 5812021.096547444,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 5811870.275000016 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 2581050.035258501,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2580970.0479704784 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 5941340.4788001105,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 5941169.762711855 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 24169650.571099643,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24169075.31034475 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 128603696.82312012,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 128594877.80000052 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 38893.40263470746,
            "unit": "ns/iter",
            "extra": "iterations: 17965\ncpu: 38889.97406067382 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 31605.770145606133,
            "unit": "ns/iter",
            "extra": "iterations: 22100\ncpu: 31604.3522171943 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 77562.42526258473,
            "unit": "ns/iter",
            "extra": "iterations: 8911\ncpu: 77558.0958366064 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 77173.00067446972,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 77169.07494222518 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 764454.11233341,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 764420.7494553357 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 270502.7763334284,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 270484.028196215 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1171266.8726108219,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1171165.8993288625 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 4963778.434915746,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 4963526.687943252 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 27035190.508915827,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 27033706.269230824 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 2546447.7746383003,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2545543.9094202924 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 9200645.12052034,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9200477.144736882 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 80819156.4348009,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 80814083.66666666 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}