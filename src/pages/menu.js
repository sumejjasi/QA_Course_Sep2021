import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usersLink = e => browser.$('[href="/users/"]'),
    giftCardLink = e => browser.$('[href="/cards/"]')

// add comma at the end of the previous line before adding new element selectors

export default class Menu extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_giftcard_Button() {
        giftCardLink().click();
        return this;
    }

}
