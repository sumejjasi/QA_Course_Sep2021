import BasePage from "./base-page";
const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createGiftCard = e => browser.$('#add_button'),
    inputNumberGiftCard = e => browser.$('#card'),
    saveCreateGiftCard = e => browser.$('.save_button'),
    toastMessageGiftCard= e => browser.$('.noty_body')

// add comma at the end of the previous line before adding new element selectors

export default class GiftCardPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_gift_card() {
        createGiftCard ().click();
        return this;
    }

    enter_number_gift_card() {
        this.enterValue(inputNumberGiftCard(),D.randomNo+ 'card');
        return this;
    }

    click_create_Button() {
        saveCreateGiftCard ().click();
        return this;
    }

    verify_toast_message_for_giftCard() {
        this.verifyText(toastMessageGiftCard(), '  Gift Card Added.' );
        return this;
    }
}
