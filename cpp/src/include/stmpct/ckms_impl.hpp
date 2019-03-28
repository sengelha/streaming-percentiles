#pragma once

#include <vector>
#include <cmath>

namespace stmpct {

    template <typename T>
    class ckms_impl {
    public:
        ckms_impl() : m_S(), m_n(0) {}
        virtual ~ckms_impl() {}

        ckms_impl(const ckms_impl&) = default;
        ckms_impl& operator=(const ckms_impl&) = default;
        ckms_impl(ckms_impl&&) = default;
        ckms_impl& operator=(ckms_impl&&) = default;

        void insert(T v)
        {
            do_insert(v);
            if (compress_condition())
                compress();
        }

        T quantile(double phi) const {
            if (m_S.empty())
                return T{};

            double phin = phi * m_n;
            // TODO: f(phin -- that's not right is it?  The first param is r_i...)
            double comp = phin + f(phin, m_n) / 2;

            int r_i = 0;
            typename tuples_t::const_iterator it = m_S.cbegin();
            typename tuples_t::const_iterator end = m_S.cend();
            assert(it != end); // This is guaranteed by the m_S.empty() check above

            typename tuples_t::const_iterator it_prev = it;
            ++it;
            for (; it != end; ++it, ++it_prev) {
                r_i += it_prev->g;
                if (r_i + it->g + it->delta > comp)
                    return it_prev->v;
            }
            return it_prev->v;
        }

    protected:
        struct tuple {
            T v;
            int g;
            int delta;

            tuple(T v, int g, int delta)
                : v(v), g(g), delta(delta) {}
        };
        // TODO: Evaluate replacing the below with multiset
        typedef std::vector<tuple> tuples_t;

        virtual bool compress_condition() const = 0;
        virtual double f(double r_i, int n) const = 0;

        tuples_t m_S;
        int m_n;

    private:
        void do_insert(T v)
        {
            // TODO: Some algorithms (e.g. ckms_uq) do not require
            // r_i, so calculating r_i is inefficient here... can it
            // be removed?
            int r_i = 0;
            typename tuples_t::iterator it = m_S.begin();
            // Use it->v < v rather than v >= it->v to minimize the requirements on T
            while (it != m_S.end() && it->v < v) {
                r_i += it->g;
                ++it;
            }
            int delta = (int)std::floor(f(r_i, m_n)) - 1;
            // The below isn't in the paper
            if (delta < 0)
                delta = 0;
            tuple t(v, 1, delta);
            m_S.insert(it, t);
            ++m_n;
        }

        void compress()
        {
            if (m_S.empty())
                return;

            // TODO: Some algorithms (e.g. ckms_uq) do not require
            // r_i, can we avoid calculating it?
            int r_i = 0;
            typename tuples_t::iterator it;
            for (it = m_S.begin(); it != m_S.end(); ++it) {
                r_i += it->g;
            }
            --it;
            if (it == m_S.begin())
                return;
            --it;

            for (; it != m_S.begin(); --it) {
                typename tuples_t::iterator it2 = next(it);
                r_i -= it->g;
                if (it->g + it2->g + it2->delta <= f(r_i, m_n)) {
                    merge(it, it2);
                }
            }
        }

        void merge(typename tuples_t::iterator it1, typename tuples_t::iterator it2)
        {
            it1->v = it2->v;
            it1->g = it1->g + it2->g;
            it1->delta = it2->delta;
            m_S.erase(it2);
        }
    };

}