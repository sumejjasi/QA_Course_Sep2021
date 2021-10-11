const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Sales Desks Page', () => {

    it('Verify that new sales desks can be added with all values', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
            .click_Sales_Desks()
        ui.salesDesks.click_create_desk_button()
            .enter_values(D.sales_desks)
            .click_confirm_create_desk_button()
            .verify_toast_message(C.toastMessages.salesDesks.deskAdded)
            .verify_all_values(D.sales_desks)



    })
});
