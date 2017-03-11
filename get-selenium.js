'use strict';

const seleniumDownload = require('selenium-download');
const fs = require('fs');

const BINPATH = './node_modules/nightwatch/bin';

fs.stat(BINPATH + 'selenium.jar', function (err, stat) {
    if (err || !stat || stat.size < 1) {
        seleniumDownload.ensure(BINPATH, function (error) {
            if (error) {
                throw new Error(error);
            }
        });
    }
});
