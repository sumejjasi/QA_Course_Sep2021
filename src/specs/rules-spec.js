const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('verify tat user can be added a new rule', () => {
       ui.login.login_as(D.users.admin)
        ui.menu.click_Inventory()
            .click_Rules()
        ui.rules.click_Create_Rule()
            .enter_all_value(D.rules)
            .click_Confirm_Rule()
            .verify_toast_message(C.toastMessages.rules.rulesCreated)
            .pause(5)
            .verify_all_values(D.rules)

    })
});
