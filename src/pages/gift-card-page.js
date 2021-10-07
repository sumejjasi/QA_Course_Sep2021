import BasePage from "./base-page";

const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createGiftCardButton = e => browser.$('#add_button'),
    numberInput = e => browser.$('#card'),
    saveCreateGiftCard = e => browser.$('.save_button'),
    firstName_topSection = e => browser.$$('[placeholder="First Name"]')[0], // first field
    firstName_billingSection = e => browser.$$('[placeholder="First Name"]')[1], // second field
    lastName_topSection = e => browser.$$('[placeholder="Last Name"]')[0], // first field
    lastName_billingSection = e => browser.$$('[placeholder="Last Name"]')[1], // second field
    emailInput_topSection = e => browser.$$('[placeholder="Email Address"]')[0],
    emailInput_billingSection = e => browser.$$('[placeholder="Email Address"]')[1],
    address1Input = e => browser.$('[placeholder="Street Address"]'),
    address2Input = e => browser.$('[placeholder="Apartment or Unit Number"]'),
    cityNameInput = e => browser.$('[placeholder="City Name"]'),
    stateInput = e => browser.$('[placeholder="State or Province Code"]'),
    postalInput = e => browser.$('[placeholder="Zip or Postal Code"]'),
    phoneInput = e => browser.$('[placeholder="Phone Number"]'),
    cardValueInput = e => browser.$('[placeholder="Lek"]'),
    maxUsesInput = e => browser.$('[placeholder="Max Uses"]'),
    expiresInput = e => browser.$('[placeholder="Never Expires"]')

// add comma at the end of the previous line before adding new element selectors

export default class GiftCardPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Create_gift_card() {
        createGiftCardButton().click();
        return this;
    }

    enter_gift_card_number(object) {
        this.enterValue(numberInput(),object.number);
        return this;
    }

    enter_all_values(giftCardObject) {
        this.enterValue(numberInput(), giftCardObject.number)
        this.enterValue(firstName_topSection(), giftCardObject.firstName)
        this.enterValue(firstName_topSection(), giftCardObject.lastName)
        this.enterValue(emailInput_topSection(), giftCardObject.email)

        this.enterValue(firstName_billingSection(), giftCardObject.billingSection.firstName)
        this.enterValue(firstName_topSection(), giftCardObject.billingSection.lastName)
        this.enterValue(address1Input(), giftCardObject.billingSection.address1)
        this.enterValue(address2Input(), giftCardObject.billingSection.address2)
        this.enterValue(cityNameInput(), giftCardObject.billingSection.city)
        this.enterValue(postalInput(), giftCardObject.billingSection.postal)
        this.enterValue(phoneInput(), giftCardObject.billingSection.phone)
        this.enterValue(emailInput_billingSection(), giftCardObject.billingSection.email)

        this.enterValue(cardValueInput(), giftCardObject.cardDetails.cardValue)
        this.enterValue(maxUsesInput(), giftCardObject.cardDetails.maxUses)
        this.enterValue(expiresInput(), giftCardObject.cardDetails.expires)

        return this;
    }

    // verify_all_values(giftCardObject) {
    //     this.verifyTextOnMultipleElements(
    //         []
    //     )
    //     return this;
    // }

    click_confirm_Button() {
        saveCreateGiftCard().click();
        return this;
    }

    //Calling  method like this-
    //  ui.giftCardDetails.enter_email(D.giftcard)
    enter_email(object) {
        this.waitElementToBeVisible(numberInput())
        this.enterValue(emailInput_topSection(),object.email);
        return this;
    }




    //Calling  method like this-
    //  ui.giftCardDetails.enter_email(D.giftcard.email)
    //enter_email(emailValue) {
       // this.enterValue(emailInput_topSection(),emailValue);
       // return this;
    //})



}
