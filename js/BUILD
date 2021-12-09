load("@rules_emscripten//emscripten:def.bzl", "emcc_module")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

emcc_module(
    name = "js",
    srcs = [
        "src/stmpct.cpp",
        "//cpp:hdrs",
    ],
    linkopts = ["--bind"],
)

NODE_TESTS=["ckms_hbq", "ckms_lbq", "ckms_tq", "ckms_uq", "gk", "qdigest"]
[nodejs_test(
    name = "{}_tests".format(x),
    entry_point = "test/node/{}_tests.js".format(x),
    data = [
        ":js",
        "@npm//tape",
    ],
    tags = ["L0"],
) for x in NODE_TESTS]