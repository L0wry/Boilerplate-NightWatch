'use strict';

var searchCommands = {
    searchArchive: function (searchTerm) {
        return this.waitForElementVisible('@searchInput', 500)
            .setValue('@searchInput', searchTerm)
            .click('@submitButton')
            .waitForElementNotPresent('@submitButton');
    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl + 'archive';
    },

    sections: {

        searchBox: {
            selector: '.Archive-form',
            commands: [searchCommands],

            elements: {
                searchInput: {
                    selector: '#archive-search'
                },

                submitButton: {
                    selector: '#archive-submit'
                }
            }
        }
    }
};
