'use strict';

module.exports = {
    src_folders: [
        './tests/'
    ],
    globals_path: './config/global.js',
    output_folder: './reports',
    page_objects_path: './pages',
    selenium: {
        start_process: true,
        server_path: './node_modules/nightwatch/bin/selenium.jar',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': './node_modules/nightwatch/bin/chromedriver'
        }
    },
    custom_commands_path: './custom-commands',
    test_settings: {
        default: {
            launch_url: 'http://google.com',
            screenshots: {
                enabled: false
            },
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        }
    }
};
