const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require('../utils/data');

context('Test gift card', () => {

    it('Verify that gift card can be added with required value only', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Gift_Card()
        ui.giftCard.click_Create_gift_card()
            .enter_gift_card_number()
            .click_confirm_Button()
            .verify_toast_message(C.toastMessages.giftCard.cardAdded)
    })

    it('Verify that gift card can be added with all values', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Gift_Card()
        ui.giftCard.click_Create_gift_card()
            .enter_all_values(D.giftCard)
            .click_confirm_Button()
            .verify_toast_message(C.toastMessages.giftCard.cardAdded)
            .verify_all_values(D.giftCard)
    })

    it.only('Verify that gift card can be sent to user', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Gift_Card()
        ui.giftCard.click_Create_gift_card()
            //.enter_all_values(D.giftCard)
            //.enter_email(D.giftCard.email)
            .enter_email(D.giftCard)
            .click_confirm_Button()
            .verify_toast_message(C.toastMessages.giftCard.cardAdded)
        ui.giftCardDetils.send_Card()
            .verify_email(D.gmailAccount,C.emailTemplates.giftCardCreated)

    })
});
