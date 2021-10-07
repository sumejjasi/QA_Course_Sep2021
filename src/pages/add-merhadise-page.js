import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createMerchandiseButton = e => browser.$('#add_button'),
    itemInput = e => browser.$('#name'),
    someElementByAttribute = e => browser.$('[name="password"]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    someElementByClassName = e => browser.$('.className'),
    confirmMerchandiseButton = e => browser.$('.save_button')

// add comma at the end of the previous line before adding new element selectors

export default class MerchandisePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_something() {
        someElementById().click()
        return this;
    }

    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }

    click_Merchandise_Creat() {
       createMerchandiseButton().click()
        return this;
    }
    enter_all_values(object) {
        this.enterValue(itemInput(), object.item);
        this.enterValue(tagsInput(), object.tags);
        this.selectDropdownOption(1,object.visibility);
        this.selectDropdownOption(2,object.provided);
        return this;
    }

    click_Create_Merchandise() {
        confirmMerchandiseButton().click()
        return this;
    }

    upload_merchandise_image(filename) {
        this.upload_file(filename)
        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }

}
