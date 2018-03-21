"use strict";
var test = require('unit.js');
var sp = require('../src/streamingPercentiles.v1.min.js');

describe('ckms_lbq_tests', function() {
    it('sanity', function() {
        var c = new sp.CKMS_LBQ(0.1);
        for (var i = 0; i < 1000; ++i)
            c.insert(Math.random());
        var p50 = c.quantile(0.5); // Approx. median
        test.number(p50).isApprox(0.5, 0.15);
        var p95 = c.quantile(0.95); // Approx. 95th percentile
        test.number(p95).isApprox(0.95, 0.15);
    });

    it('stress', function() {
        this.timeout(60000); // Extend timeout to 60s

        for (var epsilon = 0.01; epsilon <= 0.1; epsilon += 0.01) {
            var c = new sp.CKMS_LBQ(epsilon);
    
            // Seed gk so it becomes stable
            for (var i = 0; i < 1000; ++i) {
                c.insert(Math.random());
            }
    
            for (var i = 0; i < 1000; ++i) {
                c.insert(Math.random());
                for (var phi = 0.01; phi < 1; phi += 0.01) {
                    var q = c.quantile(phi);
                    test.number(q).isApprox(phi, 0.15);
                }
            }
        }
    });
})