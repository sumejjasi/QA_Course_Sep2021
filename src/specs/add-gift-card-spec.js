const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require('../utils/data');

context('Test gift card', () => {

    it('Verify that gift card can be added with required value only', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()
        ui.menu.click_Gift_Card()
        ui.giftCard.click_Create_gift_card()
            .enter_gift_card_number()
            .click_confirm_Button()
            .verify_toast_message(C.toastMessages.giftCard.cardAdded)
    })

    it.only('Verify that gift card can be added with all values', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()
        ui.menu.click_Gift_Card()
        ui.giftCard.click_Create_gift_card()
            .enter_all_values(D.giftCard)
            .pause(10)
            .click_confirm_Button()
            .verify_toast_message(C.toastMessages.giftCard.cardAdded)
    })
});
