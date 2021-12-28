"use strict";

var express = require("express");

module.exports = function (on, config) {
    var app = express();
    app.get('/', function (req, res) {
        res.send('<html><body>hello-world</body></html>');
    });
    var port = 3000;
    app.listen(port);
    config.baseUrl = "http://localhost:".concat(port);
    return config;
};