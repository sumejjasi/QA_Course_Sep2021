const ui = require('../pages/ui-spec');

context('Test suite title', () => {

    it('Test case title', () => {
        ui.template.navigate_to_login_page()
            .enter_credentials()
            .verify_user_is_logged_in()
    })
});
