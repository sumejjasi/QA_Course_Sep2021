import BasePage from "./base-page";

const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createGiftCardButton = e => browser.$('#add_button'),
    numberInput = e => browser.$('#card'),
    saveCreateGiftCard = e => browser.$('.save_button'),
    firstName_topSection = e => browser.$('#first_name'),
    firstName_billingSection = e => browser.$('[name="billing_first_name"]'),
    lastName_topSection = e => browser.$('#last_name'),
    lastName_billingSection = e => browser.$('[name="billing_last_name"]'),
   emailInput_topSection = e => browser.$('#email'),
    emailInput_billingSection = e => browser.$('[name="billing_email"]'),
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

    enter_gift_card_number() {
        this.enterValue(numberInput(), D.randomNo + 'card');
        return this;
    }

    enter_email(emailValue) {
        this.enterValue(emailInput_topSection(), emailValue)
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

}
