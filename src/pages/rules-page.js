import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createRuleButton = e => browser.$('#add_button'),
    addNewConditionButton = e => browser.$('#add_condition'),
    ruleNameInput = e => browser.$('[placeholder="Give this rule a name"]'),
   descriptionInput = e => browser.$('[placeholder="Describe what this rule does"]'),
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

    click_Create_Rule() {
        createRuleButton().click()
        return this;
    }

    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }
    enter_all_value(object) {
        this.enterValue(ruleNameInput(), object,'name');
        this.enterValue(descriptionInput(), object,'description');
        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
    click_Add_New_Condition() {
        addNewConditionButton().click()
        browser.switchToFrame(0)
        this.clickByText(rules)
        return this;
    }
}
