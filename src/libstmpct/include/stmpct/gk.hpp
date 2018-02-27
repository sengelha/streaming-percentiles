// SpaceEfficient Online Computation of Quantile Summaries

#include <iosfwd>
#include <vector>

namespace stmpct {

class gk
{
public:
    gk(double epsilon);
    void insert(double val);
    double quantile(double q);
    friend std::ostream& operator<<(std::ostream&, const gk&);

private:
    void compress();

    struct tuple {
        double v;
        double g;
        double delta;
    };

    double m_epsilon;
    int m_n;
    int m_rebalanceFreq;
    std::vector<tuple> m_tuples;
};

std::ostream& operator<<(std::ostream& os, const gk& g);

};