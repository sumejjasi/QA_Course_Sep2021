import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    sidebar = e => browser.$('#sidebar_elements'),
    userProfileImage = e => browser.$('#user_avatar'),
    logout = e => browser.$('[href="/logout"]'),
    usersLink = e => browser.$('[href="/users/"]'),
    salesDesks = e => browser.$('[href="/desks/"]'),
    giftCardLink = e => browser.$('[href="/cards/"]'),
    inventoryLink = e => browser.$('[href="/inventory/"]'),
    contactsLink = e => browser.$('[href="/contacts/"]'),
    serviceProvidersLink = e => browser.$('[href="/providers/"]')

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

    click_Sales_Desks() {
        salesDesks().click();
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

    click_Log_Out() {
        userProfileImage().click();
        logout().click()
        return this;
    }

    verify_menu_options(arrayOfVisibleOptions, arrayOfInvisibleOptions) {
        this.verifyVisibleValues(sidebar(),  arrayOfVisibleOptions)
        this.verifyInvisibleValues(sidebar(),  arrayOfInvisibleOptions)

        this.verifyVisibleValues()
        return this;
    }
}
