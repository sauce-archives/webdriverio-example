var config = {
    protocol: 'https',
    host: 'app.testobject.com',
    port: '443',
    path: '/api/appium/wd/hub',
    capabilities: [{
      testobject_api_key: process.env.TESTOBJECT_API_KEY,
      testobject_app_id: process.env.TESTOBJECT_APP_ID,
      testobject_device: process.env.TESTOBJECT_DEVICE,
      testobject_appium_version: process.env.TESTOBJECT_APPIUM_VERSION,
      browserName: 'Chrome'
    }],

    specs: [
        './specs/**/*.js'
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    // baseUrl: 'http://testobject.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        enableTimeouts: false
    },
}

exports.config = config
