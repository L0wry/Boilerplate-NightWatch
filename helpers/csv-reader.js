'use strict';

const fs = require('fs');
const parse = require('csv-parse');

module.exports.getDataFromCsv = function (filePath, callback) {
    const file = fs.readFileSync(filePath);
    const parser = parse({delimiter: ','});
    const data = [];

    parser.on('readable', function () {
        const record = parser.read();
        if (record !== null) {
            data.push(record);
        }
    });

    parser.on('error', function (err) {
        return callback(err.message);
    });

    parser.on('finish', function () {
        return callback(null, data);
    });

    parser.write(file);
    parser.end();
};
