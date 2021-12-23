load("@rules_emscripten//emscripten:def.bzl", "emcc_library")
load("@npm//@bazel/terser:terser_minified.bzl", "terser_minified")

emcc_library(
    name = "streamingPercentiles.v1",
    srcs = [
        "src/stmpct.cpp",
        "//cpp:hdrs",
    ],
    modularize = False,
    emit_wasm = False,
    extern_pre_js = "src/umdprefix.js",
    extern_post_js = "src/umdsuffix.js",
    linkopts = ["--bind"],
    visibility = ["//visibility:public"],
)

terser_minified(
    name = "streamingPercentiles.v1.min",
    src = ":streamingPercentiles.v1",
    visibility = ["//visibility:public"],
)