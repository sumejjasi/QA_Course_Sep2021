const ui = require('../pages/ui-spec');

context('Test suite title', () => {

    it('Test case title', () => {
        ui.template.enter_something()
            .click_something()
            .verify_something()
    })
});
