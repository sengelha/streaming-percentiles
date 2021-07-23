#pragma once

class minimal_number_type {
  public:
    minimal_number_type() = default;
    explicit minimal_number_type(double v) : m_d(v) {}
    constexpr minimal_number_type(minimal_number_type const &) noexcept =
        default;
    minimal_number_type &
    operator=(minimal_number_type const &) noexcept = default;

    friend bool operator<(const minimal_number_type &t1,
                          const minimal_number_type &t2) {
        return t1.m_d < t2.m_d;
    }

  private:
    double m_d;
};