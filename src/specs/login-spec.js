const ui = require('../pages/ui-spec');

context('Login page tests', () => {

    it('Test case title', () => {

        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()
            .verify_user_is_logged_in()


    })
});
