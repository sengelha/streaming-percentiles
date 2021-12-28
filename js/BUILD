load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")
load("@rules_emscripten//emscripten:def.bzl", "emcc_library")
load("@yarn//@bazel/terser:terser_minified.bzl", "terser_minified")

emcc_library(
    name = "streamingPercentiles.v1",
    srcs = [
        "src/stmpct.cpp",
        "//cpp:hdrs",
    ],
    modularize = False,
    emit_wasm = False,
    emit_memory_init_file = False,
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

pkg_tar(
    name = "streaming_percentiles-js",
    extension = "tar.gz",
    package_dir = "js",
    srcs = [
        ":streamingPercentiles.v1",
        ":streamingPercentiles.v1.min",
    ]   
)

sh_test(
    name = "test_tar_pkg",
    srcs = ["test/test_tar_pkg.sh"],
    data = [":streaming_percentiles-js.tar.gz"],
    tags = ["L0"],
)