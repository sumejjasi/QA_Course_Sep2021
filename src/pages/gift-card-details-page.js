import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    sendCardButton = e => browser.$('#send_card_button'),
    sendGiftCardButton = e => browser.$('#transaction_submit')

// add comma at the end of the previous line before adding new element selectors

export default class GiftCardDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    send_gift_card() {
        sendCardButton().click()
        browser.switchToFrame(0)
        sendGiftCardButton().click()
        browser.switchToParentFrame()
        return this;
    }
}
