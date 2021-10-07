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
    countryInput = e => browser.$$('.chosen-container-single')[1],
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

    enter_all_values(object) {
        this.enterValue(companyName(), object.company);
        this.enterValue(websiteInput(), object.website);
        this.enterValue(descriptionInput(), object.description);
        this.enterValue(tagsInput(), object.tag);
        this.selectDropdownOption(1,object.type)
        this.selectDropdownOption(2,object.country)

        return this;
    }

    verify_all_values(object) {
      /// this.waitElementToBeVisible(providerDetailsHeader())
       this.waitElementToDisappear(confirmCreateProviderButton())
        this.verify_all_values_on_main_container(object)
        return this;
    }
}
