workspace(
    name = "streaming-percentiles",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# --- Begin build_bazel_rules_nodejs (must be loaded before rules_emscripten)
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "f0f76a06fd6c10e8fb9a6cb9389fa7d5816dbecd9b1685063f89fb20dc6822f3",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.5.1/rules_nodejs-4.5.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)
# --- End build_bazel_rules_nodejs

# --- Begin rules_python
http_archive(
    name = "rules_python",
    sha256 = "a30abdfc7126d497a7698c29c46ea9901c6392d6ed315171a6df5ce433aa4502",
    # Latest as of 2022-01-08
    strip_prefix = "rules_python-0.6.0",
    url = "https://github.com/bazelbuild/rules_python/archive/0.6.0.tar.gz",
)
# --- End rules_python

# --- Begin rules_emscripten
http_archive(
    name = "rules_emscripten",
    # Version 1.6.0, latest as of 2022-01-08
    sha256 = "facd744bddd64f3e1bbb5c07175644cdaf9ed908136fd0a0319488951772da4c",
    urls = ["https://github.com/sengelha/rules_emscripten/releases/download/v1.6.0/rules_emscripten-1.6.0.zip"],
)

load("@rules_emscripten//emscripten:deps.bzl", "emscripten_rules_dependencies")

emscripten_rules_dependencies()

load("@rules_emscripten//emscripten:def.bzl", "emscripten_setup")

emscripten_setup(version = "3.1.0")
# --- End rules_emscripten

http_archive(
    name = "gtest",
    sha256 = "9dc9157a9a1551ec7a7e43daea9a694a0bb5fb8bec81235d8a1e6ef64c716dcb",
    strip_prefix = "googletest-release-1.10.0",
    url = "https://github.com/google/googletest/archive/refs/tags/release-1.10.0.tar.gz",
)

http_archive(
    name = "benchmark",
    sha256 = "1f71c72ce08d2c1310011ea6436b31e39ccab8c2db94186d26657d41747c85d6",
    strip_prefix = "benchmark-1.6.0",
    url = "https://github.com/google/benchmark/archive/refs/tags/v1.6.0.tar.gz",
)
