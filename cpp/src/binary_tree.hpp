#pragma once

#include <sstream>
#include "string_utils.hpp"

namespace stmpct {

template <class T> struct binary_tree_node {
    T data;
    std::unique_ptr<binary_tree_node> left;
    std::unique_ptr<binary_tree_node> right;

    binary_tree_node(const T &_data) : data(_data) {}

    bool is_leaf() const { return !left && !right; }

    friend std::ostream &operator<<(std::ostream &os,
                                    const binary_tree_node &n) {
        os << n.data;
        if (n.left) {
            std::stringstream ss;
            ss << *n.left;
            os << "\n"
               << "+- "
               << replace_all(ss.str(), "\n", n.right ? "\n|  " : "\n  ");
        }
        if (n.right) {
            std::stringstream ss;
            ss << *n.right;
            os << "\n";
            if (!n.left) {
                os << "+- \n";
            }
            os << "`- " << replace_all(ss.str(), "\n", "\n   ");
        }
        return os;
    }
};

template <class T, class UnaryPredicate>
const binary_tree_node<T> *postorder_find_if(const binary_tree_node<T> *n,
                                             UnaryPredicate p) {
    if (!n)
        return nullptr;
    const binary_tree_node<T> *l = postorder_find_if(n->left.get(), p);
    if (l)
        return l;
    const binary_tree_node<T> *r = postorder_find_if(n->right.get(), p);
    if (r)
        return r;
    return p(n) ? n : nullptr;
}
} // namespace stmpct