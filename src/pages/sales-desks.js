import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    clickCreateDeskButton = e => browser.$('#add_button'),
    nameInput = e => browser.$('#name'),
    idNum = e => browser.$('[placeholder="Desk number, etc."]'),
    tags = e => browser.$('[placeholder="Enter tags ..."]'),
    clickConfirmCreateDeskButton= e => browser.$('.save_button'),
    addDeskPaymentMehodButton= e => browser.$('.btn-success'),
    clickManualButton= e => browser.$('.add_action'),
    paymentMethodName= e => browser.$('[placeholder="Payment method name"]'),
    addPaymentMethod= e => browser.$('.btn-primary')



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

    selectMethod(methodObject) {
        addDeskPaymentMehodButton().click()
        browser.switchToFrame(0)
        clickManualButton().click()
        this.clickByText(methodObject)
        addPaymentMethod().click()
        browser.switchToParentFrame()
        return this;

    }

    enter_values(object) {
        this.enterValue(nameInput(),object.nameDesks);
        this.enter_values(idNum(),object.idNum);
        this.enter_values(tags(),object,);
        this.selectDropdownOption(1, object.sales_desks.deskLocation),
        this.selectDropdownOption(2, object.sales_desks.deskProvider)
        return this;
    }

    verify_all_values(object) {
        this.waitElementToDisappear(nameInput())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
