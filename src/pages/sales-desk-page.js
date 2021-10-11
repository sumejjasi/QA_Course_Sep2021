import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let

    createSaleDesk = e => browser.$('#add_button'),
    confirmSaleDesk = e => browser.$('. save_button'),
    nameSaleDesk = e => browser.$('[placeholder="Desk Name, shows to anyone using this desk"]'),
    // location= e => browser.$('[placeholder="Desk Location"]'),
    // provider = e => browser.$('[placeholder="Desk Providern"]'),
    IDNumber = e => browser.$('[placeholder="Desk number, etc."]'),
    tags = e => browser.$('[placeholder="Enter tags ...."]')[1],
    paymentMethods = e => browser.$('[type="text"]'),
    notes = e => browser.$('[name="notes"]'),
    add_desk_paymont = e => browser.$('#add_payment_methods'),
    EMVTerminal = e => browser.$('[href="?mode=payment_method_emv"]'),
    EMVName = e => browser.$('#name'),
    LocalIP = e => browser.$('#ip'),
    LocalIP = e => browser.$('#port'),
    addEMVButton = e => browser.$('[type="submit"]'),


// add comma at the end of the previous line before adding new element selectors

    export
default

class SalesDesksPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************


    click_create_sales_desks() {
        createSaleDesk().click()
        return this;
    }

    click_confirme_sales_desks() {
        confirmSaleDesk().click()
        return this;
    }


    add_desk_payment_method() {
        add_desk_paymont().click()
        browser.switchWindow(0)
        EMVTerminal().click()
        this.enterValue(EMVName(), object.EMVTerminal.name),
            this.enterValue(LocalIP(), object.EMVTerminal.localIP),
            this.enterValue(LocalIP(), object.EMVTerminal.localPort),
                addEMVButton().click()
        browser.switchToParentFrame
        return this;
    }

    verify_add_desk_payment_method(EMV){
        this.waitElementToDisappear(   notes()),
        this.verify_all_values_on_main_container(EMV)
        return this;
    }


    enter_all_values(object) {
        this.enterValue(nameSaleDesk(), object.createDesk.name);
            this.enterValue(IDNumber(), object.createDesk.IDNumber);
        this.selectDropdownOption(1, object.createDesk.location);
        this.selectDropdownOption(2, object.createDesk.provider);
        this.selectDropdownOption(3, object.groupDesk.tag);
        this.selectDropdownOption(4, object.restrictions);
        this.selectDropdownOption(5, object.bookingLabels);
        this.enterValue(notes(), object.notes);
        return this;
    }





}
