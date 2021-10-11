import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createDeskButton = e => browser.$('#add_button'),
    nameInput = e => browser.$('#name'),
    nameInputModal = e => browser.$('#name'),
    localIpInputModal = e => browser.$('#ip'),
    localPortInputModal = e => browser.$('#port'),
    confirmModal = e => browser.$('//button[@type=\'submit\']'),
    paymentMethodButton = e => browser.$('#add_payment_methods'),
    idNumberInput = e => browser.$('[placeholder="Desk number, etc."]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    confirmCreateDeskButton = e => browser.$('.save_button')
    //confirmCreateDeskButton = e => browser.$('//span[normalize-space()=\'Create Desk\']')

// add comma at the end of the previous line before adding new element selectors

export default class DesksPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_something() {
        someElementById().click()
        return this;
    }
    click_Create_Desk() {
        createDeskButton().click()
        return this;
    }
    click_Confirm_Create_Desk() {
        confirmCreateDeskButton().click()
        return this;
    }



    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }
    enter_all_values(object) {
        this.enterValue(nameInput(), object.nameDesk);
        this.selectDropdownOption(1,object.location,false);
        this.selectDropdownOption(2,object.provider, false);
        this.enterValue(idNumberInput(),object.number);
        this.enterValue(tagsInput(),object.tagDesk)

        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
    click_Add_Desk_Payment(object) {
        paymentMethodButton().click()
        browser.switchToFrame(0)
        this.clickByText(object.emvterminal)
        this.enterValue(nameInputModal(),object.nameModal)
        this.enterValue(localIpInputModal(),object.ipModal)
        this.enterValue(localPortInputModal(),object.localModal)
        confirmModal().click()
        browser.switchToParentFrame()
        return this;
    }

    verify_all_values(object) {
        this.waitElementToDisappear(createDeskButton())
        this.verify_all_values_on_main_container(object)
        return this;
    }

}
