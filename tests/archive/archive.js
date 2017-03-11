'use strict';

module.exports = {
    'Search the archive': (browser) => {
        const archiveSearch = browser.page.archive();
        archiveSearch.navigate()
                    .dropCookieForUser('withSavedArticles')
                    .expect.section('@searchBox').to.be.visible;

        const searchBox = archiveSearch.section.searchBox;
        searchBox.expect.element('@searchInput').to.be.visible;
        searchBox.expect.element('@submitButton').to.be.visible;
        searchBox.searchArchive('war');

        browser.end();
    }
};
