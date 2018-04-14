"use strict";

var tape = require('tape');
var sp = require('../src/streamingPercentiles.v1.min.js');

tape("ckms_hbq e=0.1 quantiles", function(test) {
    var seq = [];
    for (var i = 0; i < 100000; ++i)
        seq.push(Math.random());

    var gk = new sp.CKMS_HBQ(0.01);
    for (var i = 0; i < seq.length; ++i)
        gk.insert(seq[i]);
    test.ok(gk.quantile(0.1) >= 0.07 && gk.quantile(0.1) <= 0.13);
    test.ok(gk.quantile(0.5) >= 0.47 && gk.quantile(0.5) <= 0.53);
    test.ok(gk.quantile(0.9) >= 0.87 && gk.quantile(0.9) <= 0.93);
    test.end();
});
