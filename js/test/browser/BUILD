load("@yarn//@bazel/cypress:index.bzl", "cypress_web_test")

cypress_web_test(
    name = "test",
    srcs = [
        "hello.spec.js",
    ],
    config_file = "cypress.json",
    data = ["@yarn//express"],
    plugin_file = "plugin.js",
)
