require('@wdio/allure-reporter')
const appiumController = require("appium-controller");

exports.config = {

    runner: 'local',
    port: '4444',
    path: '/',
    webDriverType: 'chromedriver',

    specs: [
         // './src/specs/test-template.js',
         // './src/specs/add-user-spec.js',
        // './src/specs/add-inventory-spec.js',
        //  './src/specs/add-gift-card-spec.js',
         // './src/specs/add-contact-spec.js',
          './src/specs/add-service-provider-spec.js',
    ],

    exclude: [

    ],
    maxInstances: 15,
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'https://supplier.rezgo.com/',
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


