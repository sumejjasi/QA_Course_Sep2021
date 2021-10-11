import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createDeskButton = e => browser.$('#add_button'),
    confirmCreateDeskButton = e => browser.$$('.icon-ok')[0],
    deskNameInput = e => browser.$('[placeholder="Desk Name, shows to anyone using this desk"]'),
    idNumber = e => browser.$('[placeholder="Desk number, etc."]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    addPaymentMethodsButton = e => browser.$('#add_payment_methods'),
    emvTerminal = e => browser.$('[href="?mode=payment_method_emv"]'),
    terminalName = e => browser.$('[placeholder="Terminal Name"]'),
    localIp = e => browser.$('[placeholder="Terminal IP Address"]'),
    localPort = e => browser.$('[placeholder="80"]'),
    addEmvTerminalButton = e => browser.$('[type="submit"]')


// add comma at the end of the previous line before adding new element selectors

export default class SalesDesksPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Create_Desk() {
        createDeskButton().click()
        return this;
    }

    click_Confirm_Create_Desk() {
        confirmCreateDeskButton().click()
        return this;
    }

    add_Payment_Method(object) {
        addPaymentMethodsButton().click()
        browser.switchToFrame(0)
        emvTerminal().click()
        this.enterValue(terminalName(), object.name)
        this.enterValue(localIp(), object.localIp)
        this.enterValue(localPort(), object.localPort)
        addEmvTerminalButton().click()
        browser.switchToParentFrame()
        return this;
    }

    enter_all_values(object) {
        this.enterValue(deskNameInput(), object.name);
        this.enterValue(idNumber(), object.id);
        this.enterValue(tagsInput(), object.tags);

        this.selectDropdownOption(1, object.location, false)
        this.selectDropdownOption(2, object.provider)
        return this;
    }

    verify_all_values(object) {
        this.waitElementToDisappear(deskNameInput())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
