load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# --- Begin rules_emscripten
http_archive(
    name = "rules_emscripten",
    # Version 1.1.0, latest as of 2021-12-08
    sha256 = "059b4009bd0030fc842edb5f081c2bf88c32b7cb538d913eb54e98939f1fb294",
    urls = ["https://github.com/sengelha/rules_emscripten/archive/refs/tags/v1.1.0.tar.gz"],
    strip_prefix = "rules_emscripten-1.1.0",
)

load("@rules_emscripten//emscripten:deps.bzl", "emscripten_rules_dependencies")
emscripten_rules_dependencies()

load("@rules_emscripten//emscripten:def.bzl", "emscripten_setup")
emscripten_setup(version = "3.0.0")
# --- End rules_emscripten

# --- Begin build_bazel_rules_nodejs
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "cfc289523cf1594598215901154a6c2515e8bf3671fd708264a6f6aefe02bf39",
    # 4.4.6, latest as of 2021-12-08
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.4.6/rules_nodejs-4.4.6.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(package_json = ["//:package.json"])

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)
# --- End build_bazel_rules_nodejs

http_archive(
    name = "gtest",
    url = "https://github.com/google/googletest/archive/refs/tags/release-1.10.0.tar.gz",
    sha256 = "9dc9157a9a1551ec7a7e43daea9a694a0bb5fb8bec81235d8a1e6ef64c716dcb",
    strip_prefix = "googletest-release-1.10.0",
)

http_archive(
    name = "benchmark",
    url = "https://github.com/google/benchmark/archive/refs/tags/v1.6.0.tar.gz",
    sha256 = "1f71c72ce08d2c1310011ea6436b31e39ccab8c2db94186d26657d41747c85d6",
    strip_prefix = "benchmark-1.6.0",
)