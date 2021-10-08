const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require('../utils/data');

context('Users page', () => {

    before(function () {
        ui.app.markAllEmailsAsRead(D.gmailAccount)
    })

    it('Verify that new user can be added with required value', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_email()
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
    })

    it.only('Verify that new user can be added with all values', () => {
        //
        // D.user.username = D.getRandomNo();
        // ui.login.login_as(D.users.admin)
        // ui.menu.click_Users()
        // ui.users.click_add_user()
        //     .enter_all_values(D.user)
        //     .upload_file('test-image.jpg')
        //     .click_confirm_create_user()
        //     .verify_toast_message(C.toastMessages.users.userAdded)
        //     .verify_all_values(D.user)
        //     .verify_email_and_store_values(D.gmailAccount, C.emailTemplates.userAccountCreated)
        // ui.menu.click_Log_Out()
        ui.login.navigate_to_login_page()
            .enter_credentials(D.users.admin)
            .click_Login_button()
        ui.menu.verify_menu_options()


    })
});
