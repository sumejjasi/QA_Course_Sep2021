const caps = exports;
const path = require('path')

caps.firefox =
    {
        port: 4444,
        path: '/wd/hub',
        capabilities: {
            browserName: 'firefox',
        }
    }

caps.android =
    {
        port: 4748,
        path: '/',
        capabilities: {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:avd': 'Pixel',
            'appium:app': 'src/config/installationFiles/EnlilMRP-demo (1).apk',
            'appium:avdLaunchTimeout': 120000,
            'appium:avdReadyTimeout': 1000000,
            'appium:uiautomator2ServerInstallTimeout': 1000000,
            'appium:appWaitForLaunch': true,
            'appium:ensureWebviewsHavePages': true,
            'appium:disableWindowAnimation': true,
            'appium:autoGrantPermissions': true,
            'appium:clearSystemFiles': true,
            'appium:reset': true,
            'appium:reLaunch': true,
            'appium:agent': ({keepAlive: true}),
            'appium:nativeWebScreenshot': true,
            'appium:appPackage': 'com.enlil.enlilmrp',
            'appium:appActivity': 'com.enlil.enlilmrp.ui.activity.MainActivity'
        }
    }

caps.iOS =

    {
        port: 4728,
        path: '/',
        capabilities: {

            platformName: 'iOS',
            'appium:deviceName': 'iPhone 11',
            'appium:app': path.resolve(__dirname, '../config/installationFiles/SapphireFitness.zip'),
            'appium:automationName': 'XCUITest',
            //'appium:platformVersion': '14.2',
            'appium:avdLaunchTimeout': 1200000,
            'appium:reset': true,
            'appium:reLaunch': true,
            'appium:agent': ({keepAlive: true}),
            'appium:avdReadyTimeout': 1000000


        }
    }


caps.chrome =
    {
        protocol: 'http',
        hostname: 'localhost',
        port: 4444,
        path: '/',
        capabilities: {
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--disable-web-security',
                    'start-maximized',
                ],
            }
        }
    }

module.exports = caps;
