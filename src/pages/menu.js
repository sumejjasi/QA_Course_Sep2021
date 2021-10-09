import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usersLink = e => browser.$('[href="/users/"]'),
    giftCardLink = e => browser.$('[href="/cards/"]'),
    inventoryLink = e => browser.$('[href="/inventory/"]'),
    contactsLink = e => browser.$('[href="/contacts/"]'),
    serviceProvidersLink = e => browser.$('[href="/providers/"]'),
    merchandiseLink = e => browser.$('[href="/merchandise/"]'),
    rulesLink = e => browser.$('[href="/rules/"]')


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

    click_Service_Providers() {
        serviceProvidersLink().click();
        return this;
    }

    click_Merchandise() {
        merchandiseLink().click();
        return this;
    }
    click_Rules() {
        rulesLink().click();
        return this;
    }

}
