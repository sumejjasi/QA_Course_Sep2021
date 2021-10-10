import BasePage from "./base-page";
const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createRuleButton = e => browser.$('#add_button'),
    addNewConditionButton = e => browser.$('#add_condition'),
    ruleNameInput = e => browser.$('[placeholder="Give this rule a name"]'),
   descriptionInput = e => browser.$('[placeholder="Describe what this rule does"]'),
    someElementByClassName = e => browser.$('.className'),
    confirmCreateRuleButton = e => browser.$('.save_button')

// add comma at the end of the previous line before adding new element selectors

export default class RulesPage extends BasePage {

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
        this.enterValue(ruleNameInput(), object.name);
        this.enterValue(descriptionInput(),object.description);
        this.click_Add_New_Condition(object.rules);
        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
    click_Add_New_Condition(rules) {
        addNewConditionButton().click()
     //   browser.switchToFrame(0)
        this.clickByText(rules)
     //   browser.switchToParentFrame()
        return this;
    }
    click_Confirm_Rule() {
        confirmCreateRuleButton().click()
        return this;
    }

    verify_all_values(object) {
        this.waitElementToDisappear(ruleNameInput())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
