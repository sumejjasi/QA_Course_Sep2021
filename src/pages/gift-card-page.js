import BasePage from "./base-page";

const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createGiftCardButton = e => browser.$('#add_button'),
    numberInput = e => browser.$('#card'),
    saveCreateGiftCard = e => browser.$('.save_button')

// add comma at the end of the previous line before adding new element selectors

export default class GiftCardPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Create_gift_card() {
        createGiftCardButton().click();
        return this;
    }

    enter_gift_card_number() {
        this.enterValue(numberInput(), D.randomNo + 'card');
        return this;
    }

    click_confirm_Button() {
        saveCreateGiftCard().click();
        return this;
    }

}
