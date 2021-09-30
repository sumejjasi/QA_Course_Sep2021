const ui = require('../pages/ui-spec');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('Test case title', () => {
       ui.login.navigate_to_login_page()
           .enter_credentials()
           .click_Login_button()
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_email()
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
    })
});
