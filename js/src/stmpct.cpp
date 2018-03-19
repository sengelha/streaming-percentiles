#include <emscripten/bind.h>
#include <stmpct/gk.hpp>

using namespace emscripten;
using namespace stmpct;

EMSCRIPTEN_BINDINGS(streaming_percentiles) {
    class_<gk>("GK")
        .constructor<double>()
        .function("insert", &gk::insert)
        .function("quantile", &gk::quantile);
}