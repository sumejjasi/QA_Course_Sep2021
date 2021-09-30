const ui = require('../pages/ui-spec');

context('Test gift card', () => {

    it('Test add gift card', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()
        ui.menu.click_giftcard_Button()
        ui.giftCard
            .click_gift_card()
            .enter_number_gift_card()
            .click_create_Button()
            .verify_toast_message_for_giftCard()

    })
});
