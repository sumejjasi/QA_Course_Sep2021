import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    someInputField = e => cy.get('#SpecificElementId'),
    otherInputField = e => cy.get('.specificElementClass'),
    someButton = e => cy.get('[attributeName="attributeValue"]')
// add comma at the end of the previous line before adding new element selectors

export default class TemplatePage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    doSomeAction(firstValue, secondValue) {
        someInputField().type(firstValue);
        otherInputField().type(secondValue);
        someButton().click(pass);
        return this;
    }
}
