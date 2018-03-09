#include <algorithm>
#include <iostream>
#include <random>       // std::default_random_engine
#include <stmpct/gk.hpp>

using namespace std;
using namespace stmpct;

static void explore_gk()
{
    std::vector<double> vals;
    for (int i = 1; i <= 20; ++i) {
        vals.push_back(i);
    }
    shuffle(vals.begin(), vals.end(), default_random_engine(12345));

    gk gk(0.1);
    std::cout << "Initial state: " << gk << "\n";
    for_each(vals.begin(), vals.end(), [&](double v) {
        gk.insert(v);
        std::cout << "After inserting " << v << ": " << gk << "\n";
    });
    std::cout << "10% = " << gk.quantile(0.1) << "\n"
              << "50% = " << gk.quantile(0.5) << "\n"
              << "90% = " << gk.quantile(0.9) << "\n";
}

static void algorithm_comparison()
{
    std::vector<double> vals;
    for (int i = 0; i != 10000; ++i) {
        vals.push_back(rand() % 100 + 1);
    }

    gk gk(0.01);
    for_each(vals.begin(), vals.end(), [&](double v) { gk.insert(v); });
    cout << "GK algorithm:\n"
         << "50% = " << gk.quantile(0.5) << "\n"
         << "90% = " << gk.quantile(0.9) << "\n"
         << "95% = " << gk.quantile(0.95) << "\n"
         << "99% = " << gk.quantile(0.99) << "\n";

    // Exact (do this last, because it sorts the array)
    sort(vals.begin(), vals.end());
    cout << "Exact:\n"
         << "50% = " << vals[(int)(vals.size() * 0.5)] << "\n"
         << "90% = " << vals[(int)(vals.size() * 0.9)] << "\n"
         << "95% = " << vals[(int)(vals.size() * 0.95)] << "\n"
         << "99% = " << vals[(int)(vals.size() * 0.99)] << "\n";
}

int main(void)
{
    srand(12345);
    explore_gk();
    //algorithm_comparison();
    return 0;
}