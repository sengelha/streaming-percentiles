"use strict";

var tape = require('tape');
var sp = require('../../streamingPercentiles.js');

tape("ckms_tq e=0.1 quantiles", function (test) {
    var seq = [];
    for (var i = 0; i < 100000; ++i)
        seq.push(Math.random());

    var tqs = [
        { phi: 0.125, epsilon: 0.02 },
        { phi: 0.375, epsilon: 0.02 },
        { phi: 0.75, epsilon: 0.04 },
        { phi: 0.875, epsilon: 0.01 }
    ];
    var gk = new sp.CKMS_TQ(tqs);
    for (var i = 0; i < seq.length; ++i)
        gk.insert(seq[i]);
    test.ok(gk.quantile(0.1) >= 0.07 && gk.quantile(0.1) <= 0.13);
    test.ok(gk.quantile(0.5) >= 0.47 && gk.quantile(0.5) <= 0.53);
    test.ok(gk.quantile(0.9) >= 0.87 && gk.quantile(0.9) <= 0.93);
    test.end();
});
