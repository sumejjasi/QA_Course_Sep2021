import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createDeskButton = e => browser.$('#add_button'),
    confirmCreateDeskButton = e => browser.$('.save_button'),
    deskNameInput= e => browser.$('#name'),
    idNumberInput = e => browser.$('[name="other_id"]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1]


// add comma at the end of the previous line before adding new element selectors

export default class SalesDeskPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_create_desk_() {
        createDeskButton().click()
        return this;
    }

    click_confirm_create_desk_() {
        confirmCreateDeskButton().click()
        return this;
    }

    verify_all_values(object) {
        this.waitElementToDisappear(confirmCreateDeskButton());
        this.verify_all_values_on_main_container(object)
        return this;
    }

    enter_all_values(object) {
        this.enterValue(deskNameInput(), object.deskName);
        this.enterValue(idNumberInput(), object.idNumber);
        this.enterValue(tagsInput(), object.tags);

        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
}
