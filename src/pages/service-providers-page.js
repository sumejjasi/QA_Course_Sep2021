import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createProviderButton = e => browser.$('#add_button'),
    confirmCreateProviderButton = e => browser.$$('.icon-ok')[1],
    companyName = e => browser.$('[placeholder="Company Name"]'),
    websiteInput = e => browser.$('[placeholder="Company website"]'),
    descriptionInput = e => browser.$('[placeholder="Brief description or details"]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    address1 = e => browser.$('[placeholder="Street Address"]'),
    address2 = e => browser.$('[placeholder="Apartment or Unit Number"]'),
    city = e => browser.$('[placeholder="City Name"]'),
    state = e => browser.$('[placeholder="State or Province Code"]'),
    postal = e => browser.$('[placeholder="Zip or Postal Code"]'),
    companyPhone = e => browser.$('[placeholder="Phone Number"]'),
    companyEmail = e => browser.$('[placeholder="Email Address"]'),
    primaryName = e => browser.$('[name="contact_name"]'),
    primaryEmail = e => browser.$('[name="contact_email"]'),
    primaryPhone = e => browser.$('[name="contact_phone"]'),
    accountNum = e => browser.$('[placeholder="Account Num"]'),
    commission = e => browser.$('[placeholder="Commission %"]'),
    siteCode= e => browser.$('[placeholder="Code or ID"]'),
    glCode= e => browser.$('[placeholder="General Ledger"]'),
    taxRate= e => browser.$('[placeholder="Tax Rate"]'),
    terms= e => browser.$('[placeholder="In Days"]'),
    credit= e => browser.$('[placeholder="Lek"]'),
    otherCode= e => browser.$('[name="other_code"]'),
    accountingName= e => browser.$('[name="accounting_name"]'),
    accountingEmail= e => browser.$('[name="accounting_email"]'),
    accountingPhone= e => browser.$('[name="accounting_phone"]'),
    notes= e => browser.$('[name="notes"]')
// add comma at the end of the previous line before adding new element selectors

export default class ServiceProvidersPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Create_Service_Provider() {
        createProviderButton().click()
        return this;
    }

    click_Confirm_Create_Service_Provider() {
      //  this.scrollAndClick(confirmCreateProviderButton())
        confirmCreateProviderButton().click()
        return this;
    }

    enter_all_values(object) {
        this.enterValue(companyName(), object.companyName);
        this.selectDropdownOption(1, object.type);
        this.enterValue(websiteInput(), object.website);
        this.enterValue(descriptionInput(), object.description);
        this.enterValue(tagsInput(), object.tag);

        this.enterValue(address1(), object.companyInformation.address1);
        this.enterValue(address2(), object.companyInformation.address2);
        this.enterValue(city(), object.companyInformation.city);
        this.enterValue(state(), object.companyInformation.state);
        this.selectDropdownOption(2, object.companyInformation.country);
        this.enterValue(postal(), object.companyInformation.postal);
        this.enterValue(companyPhone(), object.companyInformation.phone);
        this.enterValue(companyEmail(), object.companyInformation.email);

        this.enterValue(accountNum(), object.accounting.account);
        this.enterValue(commission(), object.accounting.commission);
        this.enterValue(siteCode(), object.accounting.siteCode);
        this.enterValue(glCode(), object.accounting.glCode);
        this.enterValue(taxRate(), object.accounting.taxRate);
        this.enterValue(terms(), object.accounting.terms);
        this.enterValue(credit(), object.accounting.credit);
        this.enterValue(otherCode(), object.accounting.otherCode);

        this.enterValue(primaryName(), object.primaryContact.name);
        this.enterValue(primaryEmail(), object.primaryContact.email);
        this.enterValue(primaryPhone(), object.primaryContact.phone);

        this.enterValue(accountingName(), object.accountingContact.name);
        this.enterValue(accountingEmail(), object.accountingContact.email);
        this.enterValue(accountingPhone(), object.accountingContact.phone);

        this.enterValue(notes(), object.notes);

        return this;
    }

    verify_all_values(object) {
       this.waitElementToDisappear(city())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
