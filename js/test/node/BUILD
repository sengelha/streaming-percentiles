load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

NODE_TESTS=["ckms_hbq", "ckms_lbq", "ckms_tq", "ckms_uq", "gk", "qdigest"]
[nodejs_test(
    name = "{}_tests".format(x),
    entry_point = "{}_tests.js".format(x),
    data = [
        "//js:streamingPercentiles",
        "@npm//tape",
    ],
    tags = ["L0"],
) for x in NODE_TESTS]