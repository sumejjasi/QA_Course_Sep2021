import BasePage from "./base-page";
const D = require('../utils/data')
const C = require('../utils/constants')



// *************************** ELEMENTS ***************************
let
    someElementById = e => browser.$('#username'),
    someElementByAttribute = e => browser.$('[name="password"]'),
    someElementByClassName = e => browser.$('.className'),
    createDeskButton = e => browser.$('#add_button'),
    nameInput = e => browser.$('#name'),
    iDNumberInput = e => browser.$('.other_id'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],

    addDeskPaymentMethodButton = e => browser.$('#add_payment_methods'),
    chooseEmvTerminalButton = e => browser.$('.add_action'),

    addEmvTerminalButton = e => browser.$('.btn btn-primary'),

    nameInput_terminal = e => browser.$('[placeholder="Terminal Name"]'),
    localIpInput_terminal = e => browser.$('[placeholder="Terminal IP Address"]'),
    localPortInput_terminal = e => browser.$('[placeholder="80"]'),

    createDeskButtonConfirm = e => browser.$('.btn btn-primary'),

    deskLinkButton = e => browser.$('#desk_link')


// add comma at the end of the previous line before adding new element selectors

export default class SalesDesksPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_create_Desk() {
        createDeskButton().click()
        return this;
    }

  select_Payment_Method(salesDesks) {
        addDeskPaymentMethodButton().click()
        browser.switchToFrame(0)
      chooseEmvTerminalButton().click()
      this.enterValue(nameInput_terminal(),salesDesks.name)
      this.enterValue(localIpInput_terminal(),salesDesks.localIp)
      this.enterValue(localPortInput_terminal(), salesDesks.localPort)
      addEmvTerminalButton().click()
      browser.switchToParentFrame()

        return this;
    }


    enter_all_values(salesDesks) {
        this.enterValue(nameInput(),salesDesks.name)
        this.enterValue(iDNumberInput(),salesDesks.idNum)
        this.enterValue(tagsInput(),salesDesks.tags)

        this.selectDropdownOption(1,salesDesks.location,false)
        this.selectDropdownOption(2,salesDesks.provider)

        return this;
    }

    click_create_Desk_Confirm() {
        createDeskButtonConfirm().click()
        return this;
    }

    verify_() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }
}
