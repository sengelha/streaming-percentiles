var chromedriver = require('chromedriver');
var http = require('http-server');

module.exports = {
    before: function(done) {
	this.server = http.createServer();
	this.server.listen(8080);
	chromedriver.start();
	done();
    },
    after: function(done) {
	this.server.close();
	chromedriver.stop();
	done();
    }
};
