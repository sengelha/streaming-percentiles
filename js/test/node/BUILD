load(":sp_node_tests.bzl", "sp_node_tests")
# load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

sp_node_tests()

# NODE_TESTS=["ckms_hbq", "ckms_lbq", "ckms_tq", "ckms_uq", "gk", "qdigest"]
# SP_TARGETS=["streamingPercentiles", "streamingPercentiles.v1.min"]

# [nodejs_test(
#     name = "{}_{}_tests".format(x, y),
#     entry_point = "{}_tests.js".format(x),
#     data = [
#         "//js:{}".format(y),
#         "@npm//tape",
#     ],
#     tags = ["L0"],
# ) for y in SP_TARGETS for x in NODE_TESTS]