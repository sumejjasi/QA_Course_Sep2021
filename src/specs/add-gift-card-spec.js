const ui = require('../pages/ui-spec');
const C = require('../utils/constants');

context('Test gift card', () => {

    it('Test add gift card', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()
        ui.menu.click_Gift_Card()
        ui.giftCard
            .click_Create_gift_card()
            .enter_gift_card_number()
            .click_confirm_Button()
            .verify_toast_message(C.toastMessages.giftCard.cardAdded)

    })
});
