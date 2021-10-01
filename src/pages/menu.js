import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usersLink = e => browser.$('[href="/users/"]'),
    giftCardLink = e => browser.$('[href="/cards/"]'),
    inventoryLink = e => browser.$('[href="/inventory/"]'),
    contactsLink = e => browser.$('[href="/contacts/"]')

// add comma at the end of the previous line before adding new element selectors

export default class Menu extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Gift_Card() {
        giftCardLink().click();
        return this;
    }

    click_Inventory() {
        inventoryLink().click();
        return this;
    }

    click_Users() {
        usersLink().click();
        return this;
    }

    click_Contacts() {
        contactsLink().click();
        return this;
    }
}
