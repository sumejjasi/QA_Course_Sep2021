import BasePage from "./base-page";
import {stat} from "@babel/core/lib/gensync-utils/fs";

// *************************** ELEMENTS ***************************
let

    createProvider = e => browser.$('#add_button'),
    confirmCreateProviderButton = e => browser.$$('.icon-ok')[1],
    companyInput = e => browser.$('[placeholder="Company Name"]'),
    websiteInput = e => browser.$('[placeholder="Company website"]'),
    descriptionInput = e => browser.$('[placeholder="Brief description or details"]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    address1Input = e => browser.$('[placeholder="Street Address"]'),
    address2Input = e => browser.$('[placeholder="Apartment or Unit Number"]'),
    cityInput = e => browser.$('[placeholder="City Name"]'),
    stateInput = e => browser.$('[placeholder="State or Province Code"]'),
    postalInput = e => browser.$('[placeholder="Zip or Postal Code"]'),
    phoneInput = e => browser.$('[placeholder="Phone Number"]'),
    emailInput = e => browser.$('[placeholder="Email Address"]'),
    namePrimaryContactInput = e => browser.$$('[placeholder="Contact Name"]')[0],
    emailPrimaryContactInput = e => browser.$$('[placeholder="Contact Email Address"]')[0],
    phonePrimaryContactInput = e => browser.$$('[placeholder="Contact Phone Number"]')[0],
    accountInput = e => browser.$('[placeholder="Account Num"]'),
    commissionInput = e => browser.$('[placeholder="Commission %"]'),
    siteCodeInput = e => browser.$$('[placeholder="Code or ID"]')[0],
    GlCodeInput = e => browser.$('[placeholder="General Ledger"]'),
    taxRateInput = e => browser.$('[placeholder="Tax Rate"]'),
    termsInput = e => browser.$('[placeholder="In Days"]'),
    creditInput = e => browser.$('[placeholder="Lek"]'),
    otherCodeInput = e => browser.$$('[placeholder="Code or ID"]')[1],
    nameAccountContactInput = e => browser.$$('[placeholder="Contact Name"]')[1],
    emailAccountContactInput = e => browser.$$('[placeholder="Contact Email Address"]')[1],
    phoneAccountContactInput = e => browser.$$('[placeholder="Contact Phone Number"]')[1],
    notes = e => browser.$('[name="notes"]')


export default class ProvidersPage extends BasePage {


    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_Create_Provider() {
        createProvider().click()
        return this;
    }

    click_Confirm_Create_Provider() {
        confirmCreateProviderButton().click()
        return this;
    }


    add_provider_info (providerObject) {
        this.enterValue(companyInput(), providerObject.providerInfo.company);
         this.enterValue(websiteInput(), providerObject.providerInfo.website);
        this.enterValue(descriptionInput(), providerObject.providerInfo.description);
        this.enterValue(tagsInput (), providerObject.providerInfo.tags);
        return this;
    }

    add_company_info (providerObject) {
        this.enterValue(address1Input(), providerObject.companyInfo.address1);
        this.enterValue(address2Input(), providerObject.companyInfo.address2);
        this.enterValue(cityInput(), providerObject.companyInfo.city);
        this.enterValue(stateInput(), providerObject.companyInfo.state);
        this.enterValue(postalInput(), providerObject.companyInfo.postal);
        this.enterValue(phoneInput(), providerObject.companyInfo.phone);
        this.enterValue(emailInput(), providerObject.companyInfo.email);
        return this;
    }


    add_primary_contact (providerObject) {
        this.enterValue(namePrimaryContactInput(), providerObject.primaryContact.name);
        this.enterValue(emailPrimaryContactInput(), providerObject.primaryContact.email);
        this.enterValue(phonePrimaryContactInput(), providerObject.primaryContact.phone);
        return this;
    }

    add_accounting (providerObject) {
        this.enterValue(accountInput(), providerObject.accounting.account);
        this.enterValue( commissionInput(), providerObject.accounting.commission);
        this.enterValue(siteCodeInput(), providerObject.accounting.siteCode);
        this.enterValue( GlCodeInput(), providerObject.accounting.GLCode);
        this.enterValue(taxRateInput(), providerObject.accounting.taxRate);
        this.enterValue(termsInput(), providerObject.accounting.terms);
        this.enterValue( creditInput(), providerObject.accounting.credit);
        this.enterValue(otherCodeInput(), providerObject.accounting.otherCode);
        return this;
    }


    add_accounting_contact (providerObject) {
        this.enterValue(nameAccountContactInput(), providerObject.accountingContact.name);
        this.enterValue(emailAccountContactInput(), providerObject.accountingContact.email);
        this.enterValue(phoneAccountContactInput(), providerObject.accountingContact.phone);
        return this;
    }

    add_notes (providerObject) {
        this.enterValue(notes(), providerObject.notes);
        return this;
    }


    enter_all_values(providerObject){
        this.enterValue(companyInput(), providerObject.providerInfo.company);
        this.enterValue(websiteInput(), providerObject.providerInfo.website);
        this.enterValue(descriptionInput(), providerObject.providerInfo.description);
        this.enterValue(tagsInput (), providerObject.providerInfo.tags);
        this.enterValue(address1Input(), providerObject.companyInfo.address1);
        this.enterValue(address2Input(), providerObject.companyInfo.address2);
        this.enterValue(cityInput(), providerObject.companyInfo.city);
        this.enterValue(stateInput(), providerObject.companyInfo.state);
        this.enterValue(postalInput(), providerObject.companyInfo.postal);
        this.enterValue(phoneInput(), providerObject.companyInfo.phone);
        this.enterValue(emailInput(), providerObject.companyInfo.email);
        this.enterValue(namePrimaryContactInput(), providerObject.primaryContact.name);
        this.enterValue(emailPrimaryContactInput(), providerObject.primaryContact.email);
        this.enterValue(phonePrimaryContactInput(), providerObject.primaryContact.phone);
        this.enterValue(accountInput(), providerObject.accounting.account);
        this.enterValue( commissionInput(), providerObject.accounting.commission);
        this.enterValue(siteCodeInput(), providerObject.accounting.siteCode);
        this.enterValue( GlCodeInput(), providerObject.accounting.GLCode);
        this.enterValue(taxRateInput(), providerObject.accounting.taxRate);
        this.enterValue(termsInput(), providerObject.accounting.terms);
        this.enterValue( creditInput(), providerObject.accounting.credit);
        this.enterValue(otherCodeInput(), providerObject.accounting.otherCode);
        this.enterValue(nameAccountContactInput(), providerObject.accountingContact.name);
        this.enterValue(emailAccountContactInput(), providerObject.accountingContact.email);
        this.enterValue(phoneAccountContactInput(), providerObject.accountingContact.phone);
        this.enterValue(notes(), providerObject.notes);
        return this;
    }

    //   enter_all_values(providerObject) {
    //     this.add_provider_info(providerObject);
    //     this.add_company_info (providerObject);
    //     this.add_primary_contact(providerObject);
    //     this.add_accounting(providerObject);
    //     this.add_accounting_contact(providerObject);
    //     this.add_notes(providerObject);
    //     return this;
    // }


}
