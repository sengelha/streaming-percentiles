#include <vector>
#include <emscripten/bind.h>
#include <stmpct/ckms_hbq.hpp>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/ckms_tq.hpp>
#include <stmpct/ckms_uq.hpp>
#include <stmpct/gk.hpp>

using namespace emscripten;
using namespace std;
using namespace stmpct;

// Input must be of the form {phi: p1, epsilon: e1}
targeted_quantile to_targeted_quantile(const val& tq)
{
    return targeted_quantile(tq["phi"].as<double>(), tq["epsilon"].as<double>());
}

// Input must be of the form [{phi: p1, epsilon: e1}, {phi: p2, epsilon: e2}, ...]
vector<targeted_quantile> to_tq_vector(const val& tqs)
{
    auto l = tqs["length"].as<unsigned>();

    vector<targeted_quantile> v;
    v.reserve(l);
    for (unsigned i = 0; i < l; ++i) {
        v.push_back(to_targeted_quantile(tqs[i]));
    }

    return v;
}

// We need to wrap ckms_tq into something that can give
// us better Javascript semantics
class ckms_tq_wrapper {
public:
    ckms_tq_wrapper(val tqs) : m_tq(to_tq_vector(tqs)) {}
    void insert(double val) { m_tq.insert(val); }
    double quantile(double phi) { return m_tq.quantile(phi); }

private:
    ckms_tq m_tq;
};

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

    class_<ckms_tq_wrapper>("CKMS_TQ")
        .constructor<val>()
        .function("insert", &ckms_tq_wrapper::insert)
        .function("quantile", &ckms_tq_wrapper::quantile);

    class_<ckms_uq>("CKMS_UQ")
        .constructor<double>()
        .function("insert", &ckms_uq::insert)
        .function("quantile", &ckms_uq::quantile);
}
