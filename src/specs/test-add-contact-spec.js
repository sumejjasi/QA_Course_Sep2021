const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Contact page tests', () => {

    it('Verify that new contact can be added with all values', () => {

        ui.login.login_as(D.users.admin)
        ui.menu.click_Contacts()
        ui.contacts.click_Create_Contact()
            .enter_all_values(D.contact)
            .click_Confirm_Create_Contact()
            .verify_toast_message(C.toastMessages.contacts.contactAdded)
            .verify_all_values(D.contact)

    })
});
