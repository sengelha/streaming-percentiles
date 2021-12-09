"use strict";

var tape = require('tape');
var factory = require('../../js.js');

tape("qdigest cf=100 quantiles", function (test) {
    factory().then((sp) => {
        var seq = [];
        for (var i = 0; i < 100000; ++i)
            seq.push(1000 * Math.random());

        var gk = new sp.QDigest(100);
        for (var i = 0; i < seq.length; ++i)
            gk.insert(seq[i]);
        test.ok(gk.quantile(0.1) >= 70 && gk.quantile(0.1) <= 130);
        test.ok(gk.quantile(0.5) >= 470 && gk.quantile(0.5) <= 530);
        test.ok(gk.quantile(0.9) >= 870 && gk.quantile(0.9) <= 930);
        test.end();
    });
});
