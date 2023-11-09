workspace(
    name = "streaming-percentiles",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# --- Begin build_bazel_rules_nodejs (must be loaded before rules_emscripten)
http_archive(
    name = "build_bazel_rules_nodejs",
    # Below is 5.8.0, latest as of 2023-01-24
    sha256 = "dcc55f810142b6cf46a44d0180a5a7fb923c04a5061e2e8d8eb05ccccc60864b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.0/rules_nodejs-5.8.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

# fetches nodejs, npm, and yarn
load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")
node_repositories()

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

# --- Begin googletest
http_archive(
    name = "gtest",
    sha256 = "ad7fdba11ea011c1d925b3289cf4af2c66a352e18d4c7264392fead75e919363",
    strip_prefix = "googletest-1.13.0",
    url = "https://github.com/google/googletest/archive/refs/tags/v1.13.0.tar.gz",
)
# --- End googletest

# Begin google benchmark
http_archive(
    name = "benchmark",
    # 1.7.1, latest as of 2023-01-24
    sha256 = "6430e4092653380d9dc4ccb45a1e2dc9259d581f4866dc0759713126056bc1d7",
    strip_prefix = "benchmark-1.7.1",
    url = "https://github.com/google/benchmark/archive/refs/tags/v1.7.1.tar.gz",
)
# End google benchmark