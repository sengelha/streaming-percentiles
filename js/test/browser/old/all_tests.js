module.exports = {
    'CKMS_HBQ Sanity': function (client) {
        client
            .url('http://localhost:8080/ckms_hbq_sanity.html')
            .getLogTypes(function (result) {
                console.log(result);
            })
            .getLog('browser', function (result) {
                console.log(result);
            })
            .waitForElementVisible('body', 1000)
            .assert.title('CKMS_HBQ Sanity')
            .pause(1000)
            .assert.containsText('#result', '0.4997999999999613')
            .end();
    },
    'GK Sanity': function (client) {
        client
            .url('http://localhost:8080/gk_sanity.html')
            .getLogTypes(function (result) {
                console.log(result);
            })
            .getLog('browser', function (result) {
                console.log(result);
            })
            .waitForElementVisible('body', 1000)
            .assert.title('GK Sanity')
            .pause(1000)
            .assert.containsText('#result', '0.4948999999999618')
            .end();
    },
    'RequireJS Test': function (client) {
        client
            .url('http://localhost:8080/requirejs_test.html')
            .getLogTypes(function (result) {
                console.log(result);
            })
            .getLog('browser', function (result) {
                console.log(result);
            })
            .waitForElementVisible('body', 1000)
            .assert.title('RequireJS Test')
            .pause(1000)
            .assert.containsText('#result', '0.4948999999999618')
            .end();
    }
};
