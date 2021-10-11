const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Verify that new sales desks can be added with required values.', () => {

    it('Verify that new sales desks can be added with required values.', () => {
        ui.login.login_as(D.user.admin)
        ui.menu.click_Users()
        ui.salesDesks.click_create_Desk()
            .enter_all_values()
            .select_Payment_Method(D.salesDesks.object)
            .click_create_Desk_Confirm()
            .verify_toast_message(C.salesDesks.toastMessages.salesAdded)

    })
});
