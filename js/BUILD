load("@rules_emscripten//emscripten:def.bzl", "emcc_library")

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
    visibility = ["//visibility:public"],
)