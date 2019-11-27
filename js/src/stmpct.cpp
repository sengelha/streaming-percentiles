#include <vector>
#include <emscripten/bind.h>
#include <stmpct/ckms_hbq.hpp>
#include <stmpct/ckms_lbq.hpp>
#include <stmpct/ckms_tq.hpp>
#include <stmpct/ckms_uq.hpp>
#include <stmpct/gk.hpp>
#include <stmpct/qdigest.hpp>

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

// Wrap ckms_lbq into something where we can bind insert and
// quantile
class ckms_lbq_wrapper {
public:
    ckms_lbq_wrapper(double epsilon) : m_lbq(epsilon) {}
    void insert(double val) { m_lbq.insert(val); }
    double quantile(double phi) { return m_lbq.quantile(phi); }

private:
    ckms_lbq<double> m_lbq;
};

// Wrap ckms_hbq into something where we can bind insert and
// quantile
class ckms_hbq_wrapper {
public:
    ckms_hbq_wrapper(double epsilon) : m_hbq(epsilon) {}
    void insert(double val) { m_hbq.insert(val); }
    double quantile(double phi) { return m_hbq.quantile(phi); }

private:
    ckms_hbq<double> m_hbq;
};

// Wrap ckms_uq into something where we can bind insert and
// quantile
class ckms_uq_wrapper {
public:
    ckms_uq_wrapper(double epsilon) : m_uq(epsilon) {}
    void insert(double val) { m_uq.insert(val); }
    double quantile(double phi) { return m_uq.quantile(phi); }

private:
    ckms_uq<double> m_uq;
};

// We need to wrap ckms_tq into something that can give
// us better Javascript semantics
class ckms_tq_wrapper {
public:
    ckms_tq_wrapper(val tqs)
        : m_tqs(to_tq_vector(tqs))
        , m_c(m_tqs.begin(), m_tqs.end())
    {
    }
    void insert(double val) { m_c.insert(val); }
    double quantile(double phi) { return m_c.quantile(phi); }

private:
    std::vector<targeted_quantile> m_tqs;
    ckms_tq<double> m_c;
};

// Wrap qdigest into something where we can bind insert and
// quantile
class qdigest_wrapper {
public:
    qdigest_wrapper(int compression_factor) : m_q(compression_factor) {}
    void insert(int val) { m_q.insert(val); }
    int quantile(double phi) { return m_q.quantile(phi); }

private:
    qdigest m_q;
};

EMSCRIPTEN_BINDINGS(streaming_percentiles) {
    class_<gk<double>>("GK")
        .constructor<double>()
        .function("insert", &gk<double>::insert)
        .function("quantile", &gk<double>::quantile);

    class_<ckms_hbq_wrapper>("CKMS_HBQ")
        .constructor<double>()
        .function("insert", &ckms_hbq_wrapper::insert)
        .function("quantile", &ckms_hbq_wrapper::quantile);

    class_<ckms_lbq_wrapper>("CKMS_LBQ")
        .constructor<double>()
        .function("insert", &ckms_lbq_wrapper::insert)
        .function("quantile", &ckms_lbq_wrapper::quantile);

    class_<ckms_tq_wrapper>("CKMS_TQ")
        .constructor<val>()
        .function("insert", &ckms_tq_wrapper::insert)
        .function("quantile", &ckms_tq_wrapper::quantile);

    class_<ckms_uq_wrapper>("CKMS_UQ")
        .constructor<double>()
        .function("insert", &ckms_uq_wrapper::insert)
        .function("quantile", &ckms_uq_wrapper::quantile);

    class_<qdigest_wrapper>("QDigest")
        .constructor<int>()
        .function("insert", &qdigest_wrapper::insert)
        .function("quantile", &qdigest_wrapper::quantile);
}
