load("@yarn//@bazel/cypress:index.bzl", "cypress_web_test")

cypress_web_test(
    name = "test",
    srcs = [
        "all_tests.spec.js",
    ],
    config_file = "cypress.json",
    data = [
        "//js:streamingPercentiles.v1.min",
        "@yarn//express",
    ] + glob(["static/*"]),
    plugin_file = "plugin.js",
)
