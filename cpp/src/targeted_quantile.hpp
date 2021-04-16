#pragma once

namespace stmpct {

    struct targeted_quantile
    {
        double phi;
        double epsilon;

        targeted_quantile(double phi, double epsilon)
            : phi(phi), epsilon(epsilon) {}
    };

}