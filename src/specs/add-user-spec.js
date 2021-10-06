const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require('../utils/data');

context('Users page', () => {

    it('Verify that new user can be added with required value', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_email()
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
    })

    //for (var i = 0; i < 10; i++) {

        it.only('Verify that new user can be added with all values', () => {

            D.user.username = D.getRandomNo();
            ui.login.navigate_to_login_page()
                .enter_credentials()
                .click_Login_button()
            ui.menu.click_Users()
            ui.users.click_add_user()
                .enter_all_values(D.user)
                .upload_file('test-image.jpg')
                .click_confirm_create_user()
                .verify_toast_message(C.toastMessages.users.userAdded)
                .verify_all_values(D.user)
        })
   // }
});
