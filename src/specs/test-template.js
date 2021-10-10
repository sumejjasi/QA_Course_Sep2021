const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('Test case title', () => {
        ui.template.enter_something()
            .click_something()
            .verify_something()
    })
});
