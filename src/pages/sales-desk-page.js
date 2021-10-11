import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    createSaleDesk = e => browser.$('#add_button'),
    confirmSaleDesk = e => browser.$('.save_button'),
    nameSaleDesk = e => browser.$('[placeholder="Desk Name, shows to anyone using this desk"]'),
    // location= e => browser.$('[placeholder="Desk Location"]'),
    // provider = e => browser.$('[placeholder="Desk Providern"]'),
    IDNumber = e => browser.$('[placeholder="Desk number, etc."]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    paymentMethods = e => browser.$('[type="text"]'),
    notes = e => browser.$('[name="notes"]'),
    add_desk_paymont = e => browser.$('#add_payment_methods'),
    EMVTerminal = e => browser.$('[href="?mode=payment_method_emv"]'),
    EMVName = e => browser.$('#name'),
    LocalIP = e => browser.$('#ip'),
    LocalPort = e => browser.$('#port'),
    addEMVButton = e => browser.$('[type="submit"]')

// add comma at the end of the previous line before adding new element selectors

export default class SalesDesksPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************


    click_create_sales_desks() {
        createSaleDesk().click()
        return this;
    }

    click_confirm_Create_sales_desks() {
        confirmSaleDesk().click()
        return this;
    }


    add_desk_payment_method(object) {
        add_desk_paymont().click()
        browser.switchToFrame(0)
        EMVTerminal().click()
        this.enterValue(EMVName(), object.EMVTerminal.name),
            this.enterValue(LocalIP(), object.EMVTerminal.localIP),
            this.enterValue(LocalPort(), object.EMVTerminal.localPort),
            addEMVButton().click()
        browser.switchToParentFrame()
        return this;
    }

    verify_add_desk_payment_method(EMV) {
        this.waitElementToDisappear(notes()),
            this.verify_all_values_on_main_container(EMV)
        return this;
    }

    enter_all_values(object) {
        this.enterValue(nameSaleDesk(), object.name);
        this.enterValue(IDNumber(), object.IDNumber);
        this.enterValue(tagsInput(), object.tags);
        this.selectDropdownOption(1, object.location, false);
        this.selectDropdownOption(2, object.provider);
        return this;
    }

}
