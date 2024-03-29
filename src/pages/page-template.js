import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    someElementById = e => browser.$('#username'),
    someElementByAttribute = e => browser.$('[name="password"]'),
    someElementByClassName = e => browser.$('.className')

// add comma at the end of the previous line before adding new element selectors

export default class PageTemplate extends BasePage {

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

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
}
