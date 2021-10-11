const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('Test case title', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
            .click_Sales_Desks()
        ui.salesDesk.click_Create_Desk()
            .enter_all_values(D.salesDesk)
            .add_Payment_Method(D.emvTerminal)
            .click_Confirm_Create_Desk()
            .verify_toast_message(C.toastMessages.salesDesks.deskAdded)
           // .verify_all_values(D.salesDesk)
    })
});
