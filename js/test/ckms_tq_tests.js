"use strict";
var test = require('unit.js');
var sp = require('../src/streamingPercentiles.v1.min.js');

describe('ckms_tq_tests', function() {
    it('sanity', function() {
        var tqs = [
            { phi: 0.125, epsilon: 0.02 },
            { phi: 0.375, epsilon: 0.02 },
            { phi: 0.75, epsilon: 0.04 },
            { phi: 0.875, epsilon: 0.01 }
        ];
        var c = new sp.CKMS_TQ(tqs);
        for (var i = 0; i < 1000; ++i)
            c.insert(Math.random());
        var p50 = c.quantile(0.5); // Approx. median
        test.number(p50).isApprox(0.5, 0.15);
        var p95 = c.quantile(0.95); // Approx. 95th percentile
        test.number(p95).isApprox(0.95, 0.15);
    });

    it('stress', function() {
        this.timeout(60000); // Extend timeout to 60s

        for (var i = 0; i < 10; ++i) {
            var ntqs = 1 + 10 * Math.random();
            var tqs = [];
            for (var j = 0; j < ntqs; ++j) {
                tqs.push({phi: Math.random(), epsilon: 0.01 + Math.random() / 10});
            }
            var c = new sp.CKMS_TQ(tqs);

            // Seed c so it becomes stable
            for (var j = 0; j < 1000; ++j) {
                c.insert(Math.random());
            }

            for (var j = 0; j < 1000; ++j) {
                c.insert(Math.random());
                for (var phi = 0.01; phi < 1; phi += 0.01) {
                    var q = c.quantile(phi);
                    test.number(q).isApprox(phi, 0.2);
                }
            }
        }
    });
})
