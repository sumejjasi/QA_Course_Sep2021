import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    clickCreateDeskButton = e => browser.$('#add_button'),
    nameInput = e => browser.$('#name'),
    idNum = e => browser.$('[placeholder="Desk number, etc."]'),
    tags = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    clickConfirmCreateDeskButton= e => browser.$('.save_button'),
    addDeskPaymentMehodButton= e => browser.$('#add_payment_methods'),
    emvTerminalButton= e => browser.$('[href="?mode=payment_method_emv"'),
    paymentMethodName= e => browser.$('[placeholder="Payment method name"]'),
    addPaymentMethod= e => browser.$('.btn-primary'),
    terminalName = e => browser.$('[placeholder="Terminal Name"]'),
    terminalIp = e => browser.$('[placeholder="Terminal IP Address"]'),
    terminalPort = e => browser.$('[placeholder="80"]')



// add comma at the end of the previous line before adding new element selectors

export default class SalesDesks extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_create_desk_button() {
        clickCreateDeskButton().click()
        return this;
    }
    click_confirm_create_desk_button() {
        clickConfirmCreateDeskButton().click()
        return this;
    }

    add_payment_method(object) {
        addDeskPaymentMehodButton().click()
        browser.switchToFrame(0)
        this.clickByPartialText(object.type)
        this.enterValue(terminalName(), object.name)
        this.enterValue(terminalIp(), object.ip)
        this.enterValue(terminalPort(), object.port)
        addPaymentMethod().click()
        browser.switchToParentFrame()
        return this;

    }

    enter_all_values(object) {
        this.enterValue(nameInput(),object.nameDesks);
        this.enterValue(idNum(),object.idNum);
        this.enterValue(tags(),object.tagsDesks);
        this.selectDropdownOption(1, object.deskLocation, false),
        this.selectDropdownOption(2, object.deskProvider)
        return this;
    }

    verify_all_values(object) {
        this.waitElementToDisappear(nameInput())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
