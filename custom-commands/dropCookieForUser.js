'use strict';

const dataReader = require('../helpers/csv-reader');
const util = require('util');
const events = require('events');

function DropCookieForUser () {
    events.EventEmitter.call(this);
}

util.inherits(DropCookieForUser, events.EventEmitter);

DropCookieForUser.prototype.command = function (userType) {
    dataReader.getDataFromCsv(this.api.globals.acsCookieCsvPath, (err, cookies) => {
        if (err) {
            throw new Error(err.message);
        }

        cookies.forEach((cookie) => {
            const userTypeFromCsv = cookie[0];
            const cookieValue = cookie[2];

            if (userTypeFromCsv === userType) {
                this.api.setCookie({
                    name: 'acs_tnl',
                    value: cookieValue
                },

                () => this.emit('complete')
                );
            }
        });
    });

    return this;
};

module.exports = DropCookieForUser;
