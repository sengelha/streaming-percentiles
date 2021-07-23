#pragma once

#include <iostream>

class custom_number_type {
  public:
    custom_number_type() : m_d(0) {}
    constexpr custom_number_type(double v) : m_d(v) {}
    custom_number_type &
    operator=(custom_number_type const &) noexcept = default;
    constexpr custom_number_type(custom_number_type const &) noexcept = default;

    custom_number_type operator-() { return custom_number_type(-m_d); }

    custom_number_type &operator-=(const custom_number_type &rhs) {
        m_d -= rhs.m_d;
        return *this;
    }

    custom_number_type &operator*=(const custom_number_type &rhs) {
        m_d *= rhs.m_d;
        return *this;
    }

    custom_number_type &operator/=(const custom_number_type &rhs) {
        m_d /= rhs.m_d;
        return *this;
    }

    friend bool operator==(const custom_number_type &t1,
                           const custom_number_type &t2) {
        return t1.m_d == t2.m_d;
    }

    friend bool operator<(const custom_number_type &t1,
                          const custom_number_type &t2) {
        return t1.m_d < t2.m_d;
    }

    friend std::ostream &operator<<(std::ostream &os,
                                    const custom_number_type &obj) {
        os << obj.m_d;
        return os;
    }

  private:
    double m_d;
};

inline bool operator>(const custom_number_type &lhs,
                      const custom_number_type &rhs) {
    return rhs < lhs;
}
inline bool operator<=(const custom_number_type &lhs,
                       const custom_number_type &rhs) {
    return !(lhs > rhs);
}
inline bool operator>=(const custom_number_type &lhs,
                       const custom_number_type &rhs) {
    return !(lhs < rhs);
}
inline custom_number_type operator-(custom_number_type lhs,
                                    const custom_number_type &rhs) {
    return lhs -= rhs;
}
inline custom_number_type operator*(custom_number_type lhs,
                                    const custom_number_type &rhs) {
    return lhs *= rhs;
}
inline custom_number_type operator/(custom_number_type lhs,
                                    const custom_number_type &rhs) {
    return lhs /= rhs;
}
