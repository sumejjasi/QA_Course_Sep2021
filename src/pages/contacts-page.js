import BasePage from "./base-page";
import {stat} from "@babel/core/lib/gensync-utils/fs";

// *************************** ELEMENTS ***************************
let
    createContactButton = e => browser.$('#add_button'),
    confirmCreateContactButton = e => browser.$('.save_button'),
    firstNameInput = e => browser.$('[placeholder="First Name"]'),
    lastNameInput = e => browser.$('[placeholder="Last Name"]'),
    companyNameInput = e => browser.$('[placeholder="Company Name"]'),
    emailInput = e => browser.$('[placeholder="Email Address"]'),
    phoneInput = e => browser.$('[placeholder="Phone Number"]'),
    sourceInput = e => browser.$('[placeholder="Contact Source"]'),
    IdNumInput = e => browser.$('[placeholder="ID or Ref Num"]'),
    address1Input = e => browser.$('[placeholder="Street Address"]'),
    address2Input = e => browser.$('[placeholder="Apartment or Unit Number"]'),
    cityInput = e => browser.$('[placeholder="City Name"]'),
    stateInput = e => browser.$('[placeholder="State or Province Code"]'),
    postalInput = e => browser.$('[placeholder="Zip or Postal Code"]'),
    notesInput = e => browser.$('[name="notes"]'),
    mainContainer = e => browser.$('.card_display')

// add comma at the end of the previous line before adding new element selectors

export default class ContactsPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Create_Contact() {
        createContactButton().click()
        return this;
    }

    click_Confirm_Create_Contact() {
        confirmCreateContactButton().click()
        return this;
    }

    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }

    enter_all_values(contactsObject) {
        this.enterValue(firstNameInput(), contactsObject.profile.firstName);
        this.enterValue(lastNameInput(), contactsObject.profile.lastName);
        this.enterValue(companyNameInput(), contactsObject.profile.companyName);
        this.enterValue(emailInput(), contactsObject.profile.email);
        this.enterValue(phoneInput(), contactsObject.profile.phone);
        this.enterValue(sourceInput(), contactsObject.profile.source);
        this.enterValue(IdNumInput(), contactsObject.profile.idNum);

        this.enterValue(address1Input(), contactsObject.address.address1);
        this.enterValue(address2Input(), contactsObject.address.address2);
        this.enterValue(cityInput(), contactsObject.address.city);
        return this;
    }

}
