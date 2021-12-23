load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")

filegroup(
    name = "hdrs",
    srcs = glob(["src/*.hpp"]),
    visibility = ["//visibility:public"],
)

cc_library(
    name = "cpp",
    hdrs = [":hdrs"],
    include_prefix = "stmpct",
    linkopts = select({
        "@platforms//os:linux": ["-lm"],
        "@platforms//os:osx": ["-lm"],
        "@platforms//os:windows": [],
    }),
    strip_include_prefix = "src",
    visibility = ["//visibility:public"],
)

cc_binary(
    name = "benchmark",
    srcs = glob(["bmark/*.cpp"]),
    deps = [
        ":cpp",
        "@benchmark//:benchmark",
    ],
)

cc_binary(
    name = "testconsole",
    srcs = glob(["test/testconsole/**"]),
    deps = [
        ":cpp",
    ],
)

cc_test(
    name = "test_cpp",
    srcs = glob(["test/libstmpcttest/*"]),
    deps = [
        ":cpp",
        "@gtest",
        "@gtest//:gtest_main",
    ],
    tags = ["L0"],
)

pkg_tar(
    name = "streaming_percentiles-cpp",
    srcs = glob(["src/*.hpp"]),
    extension = "tar.gz",
    package_dir = "include/stmpct",
)

sh_test(
    name = "test_pkg",
    srcs = ["test/test_pkg.sh"],
    data = ["streaming_percentiles-cpp.tar.gz"],
    tags = ["L0"],
)
