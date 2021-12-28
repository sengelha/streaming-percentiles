load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")
load(":expand_template.bzl", "expand_template")

SP_TARGETS = [
    "streamingPercentiles.v1",
    "streamingPercentiles.v1.min",
]

ALGORITHMS = [
    "ckms_hbq",
    "ckms_lbq",
    "ckms_tq",
    "ckms_uq",
    "gk",
    "qdigest",
]

[
    expand_template(
        name = "{alg}_{sptgt}_tests_js".format(
            alg = alg,
            sptgt = sptgt.replace(".", "_"),
        ),
        out = "{alg}_{sptgt}_tests.js".format(
            alg = alg,
            sptgt = sptgt.replace(".", "_"),
        ),
        data = [
            "//js:{sptgt}".format(sptgt = sptgt),
        ],
        substitutions = {
            "{sptgt}": "../../{sptgt}.js".format(sptgt = sptgt),
        },
        template = "{alg}_tests.js".format(alg = alg),
    )
    for sptgt in SP_TARGETS
    for alg in ALGORITHMS
]

[
    nodejs_test(
        name = "test_{alg}_{sptgt}".format(
            alg = alg,
            sptgt = sptgt.replace(".", "_"),
        ),
        data = [
            "//js:{sptgt}".format(sptgt = sptgt),
            "@npm//tape",
        ],
        entry_point = "{alg}_{sptgt}_tests.js".format(
            alg = alg,
            sptgt = sptgt.replace(".", "_"),
        ),
        tags = ["L0"],
    )
    for sptgt in SP_TARGETS
    for alg in ALGORITHMS
]