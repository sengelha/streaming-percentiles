"use strict";

var express = require("express");

module.exports = function (on, config) {
    var app = express();
    app.use('/static', express.static('js/test/browser/static'));
    app.use('/streamingPercentiles.v1.min.js', express.static('js/streamingPercentiles.v1.min.js'));
    var port = 3000;
    app.listen(port);
    config.baseUrl = "http://localhost:".concat(port);
    return config;
};