load("@rules_emscripten//emscripten:def.bzl", "emcc_library")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

emcc_library(
    name = "streamingPercentiles",
    srcs = [
        "src/stmpct.cpp",
        "//cpp:hdrs",
    ],
    modularize = False,
    emit_wasm = False,
    extern_pre_js = "src/umdprefix.js",
    extern_post_js = "src/umdsuffix.js",
    linkopts = ["--bind"],
)

NODE_TESTS=["ckms_hbq", "ckms_lbq", "ckms_tq", "ckms_uq", "gk", "qdigest"]
[nodejs_test(
    name = "{}_tests".format(x),
    entry_point = "test/node/{}_tests.js".format(x),
    data = [
        ":streamingPercentiles",
        "@npm//tape",
    ],
    tags = ["L0"],
) for x in NODE_TESTS]