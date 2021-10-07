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

    click_Send_Card() {
        sendCardButton().click()
        return this;
    }

    complete_Send_Gift_Card() {
        browser.switchToFrame(0)
        sendGiftCardButton().click()
        browser.switchToParentFrame()
        return this;
    }
}
