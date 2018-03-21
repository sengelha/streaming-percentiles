#include <emscripten/bind.h>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/gk.hpp>

using namespace emscripten;
using namespace stmpct;

EMSCRIPTEN_BINDINGS(streaming_percentiles) {
    class_<gk>("GK")
        .constructor<double>()
        .function("insert", &gk::insert)
        .function("quantile", &gk::quantile);

    class_<ckms>("CKMS")
        .constructor<double>()
        .function("quantile", &ckms_lbq::quantile);
//        .function("insert", &ckms_lbq::insert)
//        .function("quantile", &ckms_lbq::quantile);
}