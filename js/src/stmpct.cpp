#include <emscripten/bind.h>
#include <stmpct/ckms_hbq.hpp>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/ckms_uq.hpp>
#include <stmpct/gk.hpp>

using namespace emscripten;
using namespace stmpct;

EMSCRIPTEN_BINDINGS(streaming_percentiles) {
    class_<gk>("GK")
        .constructor<double>()
        .function("insert", &gk::insert)
        .function("quantile", &gk::quantile);

    class_<ckms_hbq>("CKMS_HBQ")
        .constructor<double>()
        .function("insert", &ckms_hbq::insert)
        .function("quantile", &ckms_hbq::quantile);

    class_<ckms_lbq>("CKMS_LBQ")
        .constructor<double>()
        .function("insert", &ckms_lbq::insert)
        .function("quantile", &ckms_lbq::quantile);

    class_<ckms_uq>("CKMS_UQ")
        .constructor<double>()
        .function("insert", &ckms_uq::insert)
        .function("quantile", &ckms_uq::quantile);
}
