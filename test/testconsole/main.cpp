#include <algorithm>
#include <iostream>
#include <stmpct/gk.hpp>

using namespace std;
using namespace stmpct;

int main(void)
{
    std::vector<double> vals;
    for (int i = 0; i != 10000; ++i) {
        vals.push_back(rand() % 100 + 1);
    }

    gk gk(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { gk.accumulate(v); });
    cout << "GK algorithm:\n"
         << "50% = " << gk.quantile(0.5) << "\n"
         << "90% = " << gk.quantile(0.9) << "\n"
         << "95% = " << gk.quantile(0.95) << "\n"
         << "99% = " << gk.quantile(0.99) << "\n";

    // Exact (do this last, because it sorts the array)
    sort(vals.begin(), vals.end());
    cout << "Exact:\n"
         << "50% = " << vals[vals.size() * 0.5] << "\n"
         << "90% = " << vals[vals.size() * 0.9] << "\n"
         << "95% = " << vals[vals.size() * 0.95] << "\n"
         << "99% = " << vals[vals.size() * 0.99] << "\n";

    return 0;
}