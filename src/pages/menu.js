import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    usersLink = e => browser.$('[href="/users/"]')

// add comma at the end of the previous line before adding new element selectors

export default class Menu extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Users() {
        usersLink().click();
        return this;
    }

}
