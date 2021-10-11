const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('Verify that user can be added a new Desk', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
            .click_Sales_Desks()
        ui.desk.click_Create_Desk()
            .enter_all_values(D.desk)
           // .click_Add_Desk_Payment(D.desk)
            .click_Confirm_Create_Desk()
            .verify_toast_message(C.toastMessages.desk.deskAdded)
           // .verify_all_values(D.desk)

    })
});
