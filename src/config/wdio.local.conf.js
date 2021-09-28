const {config} = require('./wdio.shared.conf')
const caps = require('./caps');

const drivers = {
    chrome: {version: '93.0.4577.63'}, // https://chromedriver.chromium.org/
    //firefox: { version: '0.29.0' }, // https://github.com/mozilla/geckodriver/releases
    // chromiumedge: { version: '85.0.564.70' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
}

caps.currentCaps =
    {
        //android: caps.android,
        //iOS: caps.iOS,
        chrome: caps.chrome,
    }

exports.config = {
    ...config,
    ...{
        services: [
            ['webdriver', {
                protocol: 'http',
                hostname: 'localhost',
                port: 4444,
                path: '/',
                logFileName: 'wdio-chromedriver.log',
                outputDir: 'driver-logs',
                args: {
                    seleniumArgs: ['-host', 'localhost', '-port', '4444',]
                },
            }],
            ['geckodriver', {
                installArgs: {
                    version: "3.141.59",
                    baseURL: "https://selenium-release.storage.googleapis.com",
                    drivers: {
                        firefoxOptions: {
                            version: "0.29.0",
                            arch: process.arch,
                            baseURL: "https://chromedriver.storage.googleapis.com"
                        }
                    }
                },
                args: {
                    seleniumArgs: ['-host', 'localhost', '-port', '4464'],
                    drivers
                },
            }],
            ['appium', {
                command: 'appium',
                args: {
                    debugLogSpacing: true,
                    sessionOverride: true,
                    port: 4748
                },
            }]
        ],
        capabilities: caps.currentCaps
    }
}
