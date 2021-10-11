const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('Test case title', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
            .click_sales_desks()
        ui.salesDesk.click_create_sales_desks()
            .enter_all_values(D.salesDesk)
            .add_desk_payment_method(D.salesDesk)
            .click_confirm_Create_sales_desks()
            .verify_toast_message(C.toastMessages.salesDesk.deskAdded)
    })
});
