const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Sales Desk Page Test', () => {

    it('Verify than new desk can be added with all values', () => {
      ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
            .click_Sales_Desk()
        ui.salesDesk.click_create_desk_()
            .enter_all_values(D.salesDesk)
            .click_confirm_create_desk_()
            .verify_toast_message(C.toastMessages.salesDesk.deskAdded)
            .verify_all_values(D.salesDesk)
    })
});
