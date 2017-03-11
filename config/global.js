'use strict';

module.exports = {
    acsCookieCsvPath: './data/acs-cookies.csv',
    waitForConditionTimeout: 5000,
    browserSize: {
        small: {
            width: 520,
            height: 900
        }
    },
    before: function (done) {
        done();
    }
};
