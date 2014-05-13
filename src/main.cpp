#include <algorithm>
#include <iostream>
#include "gk.hpp"

using namespace std;

int main(void)
{
    std::vector<double> vals;
    for (int i = 0; i != 10000; ++i) {
        vals.push_back(rand() % 100 + 1);
    }

    gk gk(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { gk.insert(v); });

    //cout << gk << "\n";

    cout << "50% = " << gk.quantile(0.5) << "\n"
         << "90% = " << gk.quantile(0.9) << "\n"
         << "95% = " << gk.quantile(0.95) << "\n"
         << "99% = " << gk.quantile(0.99);

    return 0;
}