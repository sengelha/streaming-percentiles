#pragma once

#include <algorithm>
#include <memory>
#include <sstream>
#include "binary_tree.hpp"

// A Q-Digest is actually a summary data structure
// which can be built frmo a set of observations.
//
// The Q-Digest streaming percentile algorithm is
// an algorithm which builds & merges summaries
// as needed.
//
// Q-Digest is defined in the paper Medians
// and Beyond: New Aggregation Techniques
// for Sensor Networks

namespace stmpct {

    class qdigest_summary
    {
    public:
        class builder {
        private:
            int m_k;
            std::vector<std::pair<int, int>> m_vals;

        public:
            builder(int k) : m_k(k) {}

            builder& insert(int v, int count = 1) {
                if (v < 0)
                    throw std::out_of_range("v must be >= 0");

                m_vals.push_back(std::make_pair(v, count));
                return *this;
            }

            qdigest_summary build() {
                std::sort(m_vals.begin(), m_vals.end());
                int max = m_vals.back().first;

                qdigest_summary s(m_k, max);
                std::for_each(m_vals.begin(), m_vals.end(), [&](const std::pair<int, int>& v) { s.insert(v.first, v.second); });
                s.compress();
                return s;
            }
        };

    private:
        struct node_data {
            int lb; // lower bound inclusive
            int ub; // upper bound inclusive
            int count;

            node_data(int _lb, int _ub) : lb(_lb), ub(_ub), count(0) {}

            friend std::ostream& operator<<(std::ostream& os, const node_data& d) {
                os << "(" << d.lb << ", " << d.ub << ", " << d.count << ")";
                return os;
            }
        };
        int m_k;
        int m_n;
        binary_tree_node<node_data> m_root;

        // This uses a stateful predicate trick from http://www.informit.com/articles/article.aspx?p=25142&seqNum=4
        class find_by_rank_pred {
        private:
            struct find_state {
                int curr_rank;
                double desired_rank;

                find_state(double desired_rank_)
                    : curr_rank(0)
                    , desired_rank(desired_rank_)
                {}
            };

        public:
            find_by_rank_pred(double desired_rank)
                : m_pimpl(std::make_shared<find_state>(desired_rank)) {}

            bool operator()(const binary_tree_node<node_data>* n) {
                assert(n);
                m_pimpl->curr_rank += n->data.count;
                return m_pimpl->curr_rank >= m_pimpl->desired_rank;
            }

        private:
            std::shared_ptr<find_state> m_pimpl;
        };

        qdigest_summary(int k, int max)
            : m_k(k)
            , m_n(0)
            , m_root(node_data(0, max)) {}

        void insert(int v, int count = 1) {
            if (v < 0 || v > m_root.data.ub)
                throw std::out_of_range("v out of range");

            binary_tree_node<node_data>* n = &m_root;
            while (n->data.lb != n->data.ub) {
                int mid = n->data.lb + (n->data.ub - n->data.lb) / 2;
                if (v <= mid) {
                    if (!n->left) {
                        n->left.reset(new binary_tree_node<node_data>(node_data(n->data.lb, mid)));
                    }
                    n = n->left.get();
                } else {
                    assert(mid + 1 <= n->data.ub);
                    if (!n->right) {
                        n->right.reset(new binary_tree_node<node_data>(node_data(mid + 1, n->data.ub)));
                    }
                    n = n->right.get();
                }
            }
            assert(n->data.lb == v);
            assert(n->data.ub == v);
            n->data.count += count;
            m_n += count;
        }

        void compress() {
            compress_node(&m_root);
        }

        void compress_node(binary_tree_node<node_data>* n)
        {
            if (n->is_leaf())
                return;

            if (n->left)
                compress_node(n->left.get());
            if (n->right)
                compress_node(n->right.get());

            int subtree_count = n->data.count + (n->left ? n->left->data.count : 0) + (n->right ? n->right->data.count : 0);
            int n_over_k = (int)std::floor(m_n / (double)m_k);
            if (subtree_count < n_over_k) {
                n->data.count = subtree_count;
                if (n->left) {
                    if (n->left->is_leaf())
                        n->left.reset();
                    else
                        n->left->data.count = 0;
                }
                if (n->right) {
                    if (n->right->is_leaf())
                        n->right.reset();
                    else
                        n->right->data.count = 0;
                }
            }
        }

    public:
        int quantile(double phi) const {
            if (phi < 0.0 || phi > 1.0)
                throw std::out_of_range("phi must be between 0.0 and 1.0");

            auto n = postorder_find_if(&m_root, find_by_rank_pred(m_n * phi));
            assert(n);
            return n->data.ub;
        }

        friend std::ostream& operator<<(std::ostream& os, const qdigest_summary& q) {
            os << q.m_root;
            return os;
        }
    };

    class qdigest
    {
    private:
        qdigest_summary::builder m_builder;

    public:
        explicit qdigest(int compression_factor)
            : m_builder(compression_factor) {}

        void insert(int v, int count = 1) {
            m_builder.insert(v, count);
        }

        int quantile(double phi) {
            return m_builder.build().quantile(phi);
        }
    };
}
