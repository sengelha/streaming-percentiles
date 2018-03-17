"use strict";
var test = require('unit.js');
var sp = require('streaming-percentiles');

describe('gk_unit_tests', function() {
    it('sanity', function() {
        var gk = new sp.GK(0.1);
        for (var i = 0; i < 1000; ++i)
            gk.insert(Math.random());
        var p50 = gk.quantile(0.5); // Approx. median
        test.number(p50).isApprox(0.5, 0.1);
        var p95 = gk.quantile(0.95); // Approx. 95th percentile
        test.number(p95).isApprox(0.95, 0.1);
    });
})