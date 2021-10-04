import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createProviderButton = e => browser.$('#add_button'),
    company_mainInput = e => browser.$('#company_name'),

    someElementByAttribute = e => browser.$('[name="password"]'),
    website_mainInput = e => browser.$('[placeholder="Company website"]'),
    description_mainInput = e => browser.$('[placeholder="Brief description or details"]'),
    tags_mainInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    address1_infoInput = e => browser.$('[placeholder="Street Address"]'),
    address2_infoInput = e => browser.$('[placeholder="Apartment or Unit Number"]'),
    city_infoInput = e => browser.$('[placeholder="City Name"]'),
    state_infoInput = e => browser.$('[placeholder="State or Province Code"]'),
    postal_infoInput = e => browser.$('[placeholder="Zip or Postal Code"]'),
   phone_infoInput = e => browser.$('[placeholder="Phone Number"]'),
   email_infoInput = e => browser.$('[placeholder="Email Address"]'),
   account_accInput = e => browser.$('[placeholder="Account Num"]'),
   commission_accInput = e => browser.$('#commission'),
   siteCode_accInput = e => browser.$$('[placeholder="Code or ID"]')[0],
   glCode_accInput = e => browser.$('[placeholder="General Ledger"]'),
   taxRate_accInput = e => browser.$('[placeholder="Tax Rate"]'),
    terms_accInput = e => browser.$('[placeholder="In Days"]'),
   credit_accInput = e => browser.$('[placeholder="Lek"]'),
   otherCode_accInput = e => browser.$$('[placeholder="Code or ID"]')[1],

    confirmProviderButton = e => browser.$('.save_button')

// add comma at the end of the previous line before adding new element selectors

export default class ProvidersPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_something() {
        someElementById().click()
        return this;
    }

    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }

    click_Create_Provider() {
        createProviderButton().click()
        return this;
    }

    enter_all_values(contactsObject) {
        this.enterValue(company_mainInput(), contactsObject.companyName);
        this.enterValue(website_mainInput(), contactsObject.companyWebside);
        this.enterValue(description_mainInput(), contactsObject.description);
        this.enterValue(tags_mainInput(), contactsObject.tags);

        this.enterValue(address1_infoInput(), contactsObject.information.streetAddress);
        this.enterValue(address2_infoInput(), contactsObject.information.apartment);
        this.enterValue(city_infoInput(), contactsObject.information.city);
        this.enterValue(state_infoInput(), contactsObject.information.state);
        this.enterValue(postal_infoInput(), contactsObject.information.postal);
        this.enterValue(phone_infoInput(), contactsObject.information.phone);
        this.enterValue(email_infoInput(), contactsObject.information.email);

        this.enterValue(account_accInput(), contactsObject.accounting.account);
        this.enterValue(commission_accInput(), contactsObject.accounting.commission);
        this.enterValue(siteCode_accInput(), contactsObject.accounting.sideCode);
        this.enterValue(glCode_accInput(), contactsObject.accounting.glCode);
        this.enterValue(taxRate_accInput(), contactsObject.accounting.taxRate);
        this.enterValue(terms_accInput(), contactsObject.accounting.terms);
        this.enterValue(credit_accInput(), contactsObject.accounting.credit);
        this.enterValue(otherCode_accInput(), contactsObject.accounting.otherCode);
        return this;
    }

    click_Confirm_Create_Provider() {
        confirmProviderButton().click()
        return this;
    }

}
