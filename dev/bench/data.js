window.BENCHMARK_DATA = {
  "lastUpdate": 1639031652231,
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
          "id": "73af414955da2fc0a36cb405a8986ff5d73079a1",
          "message": "fix: Change reference from master to main branch",
          "timestamp": "2021-12-07T16:33:04-06:00",
          "tree_id": "ab265007ed2df726641a541f66b4dacf0efede3a",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/73af414955da2fc0a36cb405a8986ff5d73079a1"
        },
        "date": 1638916468286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 37860.58561093228,
            "unit": "ns/iter",
            "extra": "iterations: 17918\ncpu: 37859.159895077566 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 81063.85920927461,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 81064.0845844013 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 126649.85353396035,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 126640.96183071216 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 120622.21709680078,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 120615.26707545559 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 390445.30279511306,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 390320.0129799892 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 1059248.5806956794,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1058748.844720497 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 4335219.477429802,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 4334584.697530864 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 7773835.171935379,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7773000.709677424 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3772861.8173038256,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3772369.6310160453 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 11490127.870014736,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 11489099.017857138 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 61036500.063809484,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 60785727.18181813 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 322009444.2367554,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 322000922.5 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 38167.70817853649,
            "unit": "ns/iter",
            "extra": "iterations: 17914\ncpu: 38161.8959473038 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 82855.45488409215,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82849.97726737341 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 122791.75518838424,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 122790.05820203893 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 120526.92568489989,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 120507.47031879805 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 382432.61130966624,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 382427.6550772616 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 1069453.0275132922,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1069245.9640522858 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 4382578.141850197,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 4381851.5398773 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 7685783.061575382,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 7684857.0425532 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3873007.4530062466,
            "unit": "ns/iter",
            "extra": "iterations: 184\ncpu: 3872864.5489130504 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 11777911.269873904,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 11775640.999999963 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 60088336.46774292,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 60084905.41666648 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 324468493.4616089,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 324427916.0000012 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 27058.88750815835,
            "unit": "ns/iter",
            "extra": "iterations: 25221\ncpu: 27055.968082153657 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 48275.71524815126,
            "unit": "ns/iter",
            "extra": "iterations: 14080\ncpu: 48268.34850852259 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 107907.94752440578,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 107903.95791583188 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 96290.88024892434,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 96285.00243539434 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 302897.4432870093,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 302851.23949211923 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 618099.1350985728,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 618061.7465397925 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 2036652.5650024414,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2036479.2399999993 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 6248437.932559422,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6248163.910714271 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 3107710.3680729317,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 3107457.1935484 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 7086510.243623153,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7085933.913043526 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 29956340.789794922,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 29953579.545454677 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 130039739.60876465,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 130036560.40000066 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 45150.971721926224,
            "unit": "ns/iter",
            "extra": "iterations: 15187\ncpu: 45144.88852307928 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 38656.8287637882,
            "unit": "ns/iter",
            "extra": "iterations: 17965\ncpu: 38655.055496799556 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 94609.93112153784,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 94597.13104203787 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 94096.44067547728,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 94087.28820960718 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 856987.9159049458,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 856946.4703656993 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 328930.2074799632,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 328912.4039671048 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1411640.5260444868,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1411259.4673267407 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 5771471.608069635,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 5770439.129032258 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 30785539.8758598,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30784800.21739137 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 3001414.8886273014,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3001117.0041493652 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 10783937.242296007,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 10783408.587301545 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 93590587.37754822,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 93582393.12499972 ns\nthreads: 1"
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
          "id": "3af3c8c2b8925a2982ceda8201fa3881d80b8347",
          "message": "fix: Tag untagged tests",
          "timestamp": "2021-12-07T16:35:26-06:00",
          "tree_id": "1dffbd207fd46e1716c0182b85beac7baf1d078d",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/3af3c8c2b8925a2982ceda8201fa3881d80b8347"
        },
        "date": 1638916608162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 33256.62631743752,
            "unit": "ns/iter",
            "extra": "iterations: 20260\ncpu: 33232.74531095754 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 70722.93294189159,
            "unit": "ns/iter",
            "extra": "iterations: 9964\ncpu: 70715.78703331995 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 117179.99003488624,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117171.10307201618 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 103704.15075857082,
            "unit": "ns/iter",
            "extra": "iterations: 6403\ncpu: 103696.93596751515 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 340226.80197941797,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 340191.6652502359 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 962938.7588202565,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 962922.3415906132 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 3847178.2142347326,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 3846894.846994537 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 6710821.932012385,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6710745.627272719 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3387758.0359792025,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 3387681.7368421056 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 10168058.284814807,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10167555.913043467 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 53600384.638859674,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 53591917.384615466 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 318346858.02459717,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 298827131.5000004 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 36499.74906802127,
            "unit": "ns/iter",
            "extra": "iterations: 18936\ncpu: 36497.54905999151 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 72179.20792495579,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 72171.04908726622 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 110524.91277810317,
            "unit": "ns/iter",
            "extra": "iterations: 6566\ncpu: 110512.07554066407 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 108771.165798511,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 108770.31129151281 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 346861.333440352,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 346850.4853857213 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 950456.1575111693,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 950447.8280605215 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 3811173.9688449437,
            "unit": "ns/iter",
            "extra": "iterations: 171\ncpu: 3811142.8596491213 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 6543638.489463112,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6543115.718181818 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3410470.317786848,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3410326.9906103336 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 10017514.2288208,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 10016362.847222194 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 52893143.43379094,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 52877475.615384445 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 290520429.61120605,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 290482053.99999994 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 24874.230318291244,
            "unit": "ns/iter",
            "extra": "iterations: 26875\ncpu: 24872.067423255798 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 42171.561822425734,
            "unit": "ns/iter",
            "extra": "iterations: 15980\ncpu: 42165.19774718392 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 95288.52181548726,
            "unit": "ns/iter",
            "extra": "iterations: 7481\ncpu: 95280.44058280971 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 84720.33265155883,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 84719.6004255825 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 274715.11114778084,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 274709.1528861152 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 543475.535608107,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 543476.9177419352 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1875152.811408043,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 1874999.9036458319 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 5639566.749822898,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5639131.737704913 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 2684568.329680738,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 2684249.021582732 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 6084077.378623506,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 6083762.521367524 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 26609457.456148587,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 26606569.115384623 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 113574062.07493374,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 113564641.14285712 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 39444.58476331968,
            "unit": "ns/iter",
            "extra": "iterations: 18173\ncpu: 39440.12887250309 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 32976.64587874375,
            "unit": "ns/iter",
            "extra": "iterations: 21154\ncpu: 32973.81450316712 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 80193.11538595238,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 80190.78049117008 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 84312.31844620868,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 84308.40552881599 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 787081.8432145015,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 787012.3458475544 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 288493.44329133746,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 288472.4872757598 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1242513.6392133948,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1242446.5145985326 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 5188840.022985486,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 5188456.340579703 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 28051008.78079732,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 28048927.04166691 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 2786734.0650714813,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 2786500.778688541 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 9467740.853627523,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9466825.708333362 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 86540430.78422546,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 86532038.62500013 ns\nthreads: 1"
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
          "id": "23eee246f78647acb61dd8754ef585c66ff22444",
          "message": "chg: Disable windows in CI",
          "timestamp": "2021-12-07T16:54:08-06:00",
          "tree_id": "7d1979d2c4bb831b35a22b13c9f80a6def1ce980",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/23eee246f78647acb61dd8754ef585c66ff22444"
        },
        "date": 1638917729257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 31614.931718669046,
            "unit": "ns/iter",
            "extra": "iterations: 22015\ncpu: 31611.32078128549 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 66334.13069730916,
            "unit": "ns/iter",
            "extra": "iterations: 10545\ncpu: 66331.47017543859 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 100783.00316670442,
            "unit": "ns/iter",
            "extra": "iterations: 6940\ncpu: 100778.2354466859 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 98702.63480521305,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 98698.7029200169 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 317788.037465552,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 317774.37284287007 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 855682.2326285708,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 855618.3030674848 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 3202616.62159491,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 3202466.3807339473 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 5743837.747417512,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5743585.540983603 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3126880.952290126,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3126852.83928571 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 9327033.360799154,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9326342.30666667 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 45379241.3075765,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45249181.266666725 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 216989517.21191406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 216978034.6666664 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 31540.63578427179,
            "unit": "ns/iter",
            "extra": "iterations: 22181\ncpu: 31540.08092511611 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 66337.34325769331,
            "unit": "ns/iter",
            "extra": "iterations: 10553\ncpu: 66333.85160617834 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 100816.4692021227,
            "unit": "ns/iter",
            "extra": "iterations: 6941\ncpu: 100814.49013110508 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 98745.46558144332,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 98742.51721704767 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 317714.93260959967,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 317706.11524501006 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 857542.9543306308,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 856272.9804400954 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 3254946.147170022,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 3254717.9018691657 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 5742444.366705222,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5742295.7704917975 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3125985.818249839,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3125906.4062499898 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 9311278.661092123,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9310742.453333348 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 44020503.759384155,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 44016482.81250004 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 215312719.34509277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 215289494.00000033 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 21393.993565523408,
            "unit": "ns/iter",
            "extra": "iterations: 32656\ncpu: 21392.47537971584 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 40138.81766572997,
            "unit": "ns/iter",
            "extra": "iterations: 17418\ncpu: 40137.775576989305 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 88054.86058124906,
            "unit": "ns/iter",
            "extra": "iterations: 7888\ncpu: 88048.64059330629 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 79444.10556510162,
            "unit": "ns/iter",
            "extra": "iterations: 8814\ncpu: 79440.53505786274 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 240372.48235740478,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 240360.3551818808 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 519904.65813193243,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 519885.12258543976 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1577905.1694784078,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 1577851.7454955005 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 5808942.574114839,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 5808832.892561978 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 2535992.7744105244,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2535950.289855082 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 5940950.52298853,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 5937545.864406771 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 24189200.89458597,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24187547.586206943 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 128424263.00048828,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 128413737.19999893 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 38733.32063154433,
            "unit": "ns/iter",
            "extra": "iterations: 18044\ncpu: 38730.66005320338 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 31636.166350515337,
            "unit": "ns/iter",
            "extra": "iterations: 22118\ncpu: 31634.116059318185 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 77538.62122501072,
            "unit": "ns/iter",
            "extra": "iterations: 9032\ncpu: 77534.60794951355 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 76953.4879371239,
            "unit": "ns/iter",
            "extra": "iterations: 9098\ncpu: 76950.95405583669 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 763397.8303932182,
            "unit": "ns/iter",
            "extra": "iterations: 917\ncpu: 763383.5517993412 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 271697.5013107937,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 270883.34930448217 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1168608.4664524696,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1168564.9699499216 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 4965569.11062687,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 4965507.212765937 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 26993412.237900954,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 26993309.846153907 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 2542830.380526456,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 2542751.6618181947 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 9196576.31924278,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9196252.078947347 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 80959161.12263997,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 80955283.44444445 ns\nthreads: 1"
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
          "id": "ae70a0c23febb864e709036d05ef1639f82044d6",
          "message": "Merge pull request #48 from sengelha/add_js_targets\n\nnew: Add JavaScript build targets",
          "timestamp": "2021-12-08T22:20:50-06:00",
          "tree_id": "ec89024850ac8cd88356bbb9307b5bf20bc31918",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/ae70a0c23febb864e709036d05ef1639f82044d6"
        },
        "date": 1639023868152,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 30546.49990040192,
            "unit": "ns/iter",
            "extra": "iterations: 22744\ncpu: 30541.96746394653 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 66325.41541253142,
            "unit": "ns/iter",
            "extra": "iterations: 10394\ncpu: 66310.65085626322 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 100891.87770502112,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 100871.80732093961 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 98795.779759226,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 98795.09837685253 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 311487.504444479,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 311484.53428317 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 855816.3141563061,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 855770.6992665032 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 3264979.0177322887,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3264880.2816901403 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 5734353.769020956,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5733991.245901643 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3131574.5794185074,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 3131394.3139013476 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 9210658.700842606,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9210200.407894734 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 45402510.96089681,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45400431.19999997 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 214121182.75960287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 214102091.33333305 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 30478.736106496886,
            "unit": "ns/iter",
            "extra": "iterations: 22969\ncpu: 30476.713483390657 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 66285.12704250534,
            "unit": "ns/iter",
            "extra": "iterations: 10564\ncpu: 66271.37750851957 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 100833.51151736827,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 100829.17211580006 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 98776.62217250289,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 98775.97262207168 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 311579.88670457725,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 311580.0008896791 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 856182.712382173,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 856140.1982864132 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 3191721.4937950377,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 3191648.9543378977 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 5732786.46000096,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5732533.770491804 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3133310.8033452714,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3133124.6473214375 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 9209334.85031128,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9208935.80263156 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 45104935.76526642,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 45102267.12499987 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 214281082.1533203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 214267436.66666684 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 22151.58742496824,
            "unit": "ns/iter",
            "extra": "iterations: 32578\ncpu: 21465.47614954882 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 40282.76339044488,
            "unit": "ns/iter",
            "extra": "iterations: 17350\ncpu: 40281.13573487017 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 87969.88048776843,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 87964.94207278693 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 79561.70781063267,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 79559.0901238779 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 239761.96981456183,
            "unit": "ns/iter",
            "extra": "iterations: 2920\ncpu: 239750.01130136967 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 521884.6457345145,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 521881.8624060141 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1579332.5669609397,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 1579214.9729119653 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 5821857.849756877,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 5821385.075000022 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 2538284.529810366,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2538165.641304357 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 5941997.140140857,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 5941599.271186442 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 24198038.82467336,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24196893.586206965 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 128466510.77270508,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 128462219.60000007 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 39712.54424416689,
            "unit": "ns/iter",
            "extra": "iterations: 17621\ncpu: 39710.76987685159 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 31703.550792117796,
            "unit": "ns/iter",
            "extra": "iterations: 22049\ncpu: 31701.90375980761 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 77551.9319926014,
            "unit": "ns/iter",
            "extra": "iterations: 9013\ncpu: 77551.99711527793 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 77084.9748283883,
            "unit": "ns/iter",
            "extra": "iterations: 9002\ncpu: 77081.41779604541 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 774125.8735150363,
            "unit": "ns/iter",
            "extra": "iterations: 904\ncpu: 774076.2831858442 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 271178.6579541167,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 271166.5423925659 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1168662.598216673,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1168590.4474123614 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 4965663.801693747,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 4965352.333333349 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 27097344.398498535,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 27095692.8076924 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 2545438.2462935015,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 2545327.5563636553 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 9237992.136101974,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9237399.710526336 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 81191751.69203016,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 81187846.44444412 ns\nthreads: 1"
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
          "id": "fa0e23d3d521426f194b560add12b83c70e66a7c",
          "message": "chg: Change JS module packaging to be unchanged from 3.1.0",
          "timestamp": "2021-12-09T00:29:30-06:00",
          "tree_id": "93519def96337f602c09e68f06ff8ddf6b5a43ef",
          "url": "https://github.com/sengelha/streaming-percentiles/commit/fa0e23d3d521426f194b560add12b83c70e66a7c"
        },
        "date": 1639031651366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ckms_hbq/8/512",
            "value": 38643.83927027847,
            "unit": "ns/iter",
            "extra": "iterations: 17867\ncpu: 38633.71881121621 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/512",
            "value": 81494.09221762283,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81489.55416763952 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/512",
            "value": 123555.83734000729,
            "unit": "ns/iter",
            "extra": "iterations: 5816\ncpu: 123543.14666437412 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/512",
            "value": 123697.9279968096,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 123693.13306177869 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/4096",
            "value": 389994.4071867028,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 389968.8196359623 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/4096",
            "value": 1054267.7651986987,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1054212.2678018576 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/4096",
            "value": 4311214.258641372,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 4310956.45679012 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/4096",
            "value": 7791961.9424002515,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7791601.043956052 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/8/32768",
            "value": 3785579.474930911,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 3784333.015463915 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/64/32768",
            "value": 11448498.695127426,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11447729.435483884 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/512/32768",
            "value": 60826241.970062256,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 60154671.83333337 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_hbq/4096/32768",
            "value": 316902875.90026855,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 316830329.00000006 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/512",
            "value": 38177.924731430365,
            "unit": "ns/iter",
            "extra": "iterations: 17963\ncpu: 38177.26125925515 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/512",
            "value": 81410.63022231965,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 81406.70651918094 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/512",
            "value": 125717.00344001669,
            "unit": "ns/iter",
            "extra": "iterations: 5675\ncpu: 125669.70061673992 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/512",
            "value": 119547.47738426334,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 119538.70354658084 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/4096",
            "value": 379734.3306637695,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 379726.3677032197 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/4096",
            "value": 1068835.150926633,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1068745.6060150343 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/4096",
            "value": 4401092.818289092,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 4400877.733333325 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/4096",
            "value": 7714364.263746474,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 7712265.922222232 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/8/32768",
            "value": 3796390.1247297013,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 3792223.5439560353 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/64/32768",
            "value": 11290214.100822074,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 11289624.344262332 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/512/32768",
            "value": 58630247.91081747,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 58627673.41666657 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_lbq/4096/32768",
            "value": 321613788.6047363,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 321596809.99999905 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/512",
            "value": 26387.9927643601,
            "unit": "ns/iter",
            "extra": "iterations: 25747\ncpu: 26387.494426535242 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/512",
            "value": 47208.07309544859,
            "unit": "ns/iter",
            "extra": "iterations: 14771\ncpu: 47204.74118204583 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/512",
            "value": 107013.88272586459,
            "unit": "ns/iter",
            "extra": "iterations: 6473\ncpu: 107008.99258458239 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/512",
            "value": 95478.60270672834,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95475.24015801636 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/4096",
            "value": 303842.2357788894,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 303810.2280546967 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/4096",
            "value": 623183.817888873,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 621544.5657193582 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/4096",
            "value": 1966842.7745947677,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 1966599.8258427053 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/4096",
            "value": 6158706.304189322,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 6158323.801801792 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/8/32768",
            "value": 3052299.48278059,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 3051592.1666666693 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/64/32768",
            "value": 6932581.313932785,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 6930291.343434306 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/512/32768",
            "value": 29718130.826950073,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29714460.208333608 ns\nthreads: 1"
          },
          {
            "name": "BM_ckms_uq/4096/32768",
            "value": 133521413.80310059,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 133519148.59999993 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/512",
            "value": 44427.56544233797,
            "unit": "ns/iter",
            "extra": "iterations: 15526\ncpu: 44421.10543604283 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/512",
            "value": 39049.194356096734,
            "unit": "ns/iter",
            "extra": "iterations: 17409\ncpu: 39039.10322247104 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/512",
            "value": 92014.38523838748,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 91999.34128440407 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/512",
            "value": 91594.88159243531,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 91594.24058577427 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/4096",
            "value": 865309.2502367379,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 865122.8366336626 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/4096",
            "value": 337013.8135690852,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 336997.1061124676 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/4096",
            "value": 1423905.3519284702,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1423778.2938856035 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/4096",
            "value": 5748006.164050493,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5745404.000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/8/32768",
            "value": 32340364.022688434,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32337692.49999987 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/64/32768",
            "value": 3063379.672535679,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 3062921.4035087735 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/512/32768",
            "value": 11413192.749023438,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 11411780.969230825 ns\nthreads: 1"
          },
          {
            "name": "BM_gk/4096/32768",
            "value": 96039499.55531529,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 96025307.57142854 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}