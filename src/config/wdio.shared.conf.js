require('@wdio/allure-reporter')
const appiumController = require("appium-controller");

exports.config = {

    runner: 'local',
    port: '4444',
    path: '/',
    webDriverType: 'chromedriver',

    specs: [
          './src/specs/test-template.js'
    ],

    exclude: [

    ],
    maxInstances: 15,
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'https://leaveboard.com//',
    waitforTimeout: 20000,
    connectionRetryTimeout: 900000,
    connectionRetryCount: 0,
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 900000,
      compilers: ['js:@babel/register'],
    },

    before: function (capabilities, specs) {
    },

    onComplete : function (){
        appiumController.stopAppium ({
            port: '4728'

        })
    },

    afterTest: function (
        test,
        context,
        { error, result, duration, passed, retries }
    ) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
    }]]
}


