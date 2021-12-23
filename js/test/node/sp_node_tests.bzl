load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

def expand_template_impl(ctx):
    ctx.actions.expand_template(
        template = ctx.file.template,
        output = ctx.outputs.out,
        substitutions = {
            k: ctx.expand_location(v, ctx.attr.data)
            for k, v in ctx.attr.substitutions.items()
        },
        is_executable = ctx.attr.is_executable,
    )

expand_template = rule(
    implementation = expand_template_impl,
    attrs = {
        "template": attr.label(mandatory = True, allow_single_file = True),
        "substitutions": attr.string_dict(mandatory = True),
        "out": attr.output(mandatory = True),
        "is_executable": attr.bool(default = False, mandatory = False),
        "data": attr.label_list(allow_files = True),
    },
)

def sp_node_tests():
    for sptgt in ["streamingPercentiles.v1", "streamingPercentiles.v1.min"]:
        for alg in ["ckms_hbq", "ckms_lbq", "ckms_tq", "ckms_uq", "gk", "qdigest"]:
            expand_template(
                name = "{alg}_{sptgt}_tests_js".format(alg=alg, sptgt=sptgt.replace(".", "_")),
                template = "{alg}_tests.js".format(alg=alg),
                out = "{alg}_{sptgt}_tests.js".format(alg=alg, sptgt=sptgt.replace(".", "_")),
                substitutions = {
                    "{sptgt}": "../../{sptgt}.js".format(sptgt=sptgt),
                },
                data = [
                    "//js:{sptgt}".format(sptgt=sptgt),
                ],
            )

            nodejs_test(
                name = "test_{alg}_{sptgt}".format(alg=alg, sptgt=sptgt.replace(".", "_")),
                entry_point = "{alg}_{sptgt}_tests.js".format(alg=alg, sptgt=sptgt.replace(".", "_")),
                data = [
                    "//js:{sptgt}".format(sptgt=sptgt),
                    "@npm//tape",
                ],
                tags = ["L0"],
            )
