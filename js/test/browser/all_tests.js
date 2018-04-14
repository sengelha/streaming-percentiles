module.exports = {
    'GK Sanity' : function (client) {
	client
	    .url('http://localhost:8080/gk_sanity.html')
	    .getLogTypes(function(result) {
		console.log(result);
	    })
	    .getLog('browser', function(result) {
		console.log(result);
	    })
	    .waitForElementVisible('body', 1000)
	    .assert.title('GK Sanity')
	    .pause(1000)
	    .assert.containsText('#result', '0.4948999999999618')
	    .end();
    }
};
