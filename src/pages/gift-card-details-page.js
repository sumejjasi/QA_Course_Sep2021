import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    someElementById = e => browser.$('#username'),
    sendCardButton = e => browser.$('#send_card_button'),
    sendGiftCardButton = e => browser.$('#transaction_submit')


// add comma at the end of the previous line before adding new element selectors

export default class GiftCardDetailsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_something() {
        someElementById().click()
        return this;
    }

    send_Card() {
        sendCardButton().click()
        browser.switchToFrame(0)
        sendGiftCardButton().click()
        browser.switchToParentFrame
        return this;
    }

    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
}
