load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")

cc_library(
    name = "cpp",
    hdrs = glob(["src/*.hpp"]),
    include_prefix = "stmpct",
    linkopts = ["-lm"],
    strip_include_prefix = "src",
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
)

pkg_tar(
    name = "pkg",
    srcs = glob(["src/*.hpp"]),
    extension = "tar.gz",
    package_dir = "include/stmpct",
)

sh_test(
    name = "test_pkg",
    srcs = ["test_pkg.sh"],
    data = ["pkg.tar.gz"],
)
