import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createProviderButton = e => browser.$('#add_button'),
    confirmCreateProviderButton = e => browser.$('.save_button'),
    companyName = e => browser.$('[placeholder="Company Name"]'),
    websiteInput = e => browser.$('[placeholder="Company website"]'),
    descriptionInput = e => browser.$('[placeholder="Brief description or details"]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    typeDropdown = e => browser.$('#type_chosen'),
    providerDetailsHeader = e => browser.$('.close_card_button')

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
        confirmCreateProviderButton().click()
        return this;
    }

    enter_all_values(serviceProviderObject) {
        this.enterValue(companyName(), serviceProviderObject.company);
        this.enterValue(websiteInput(), serviceProviderObject.website);
        this.enterValue(descriptionInput(), serviceProviderObject.description);
        this.enterValue(tagsInput(), serviceProviderObject.tag);

        this.selectDropdownOption(typeDropdown(), serviceProviderObject.type);
        return this;
    }

    verify_all_values(object) {
       this.waitElementToBeVisible(providerDetailsHeader())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
