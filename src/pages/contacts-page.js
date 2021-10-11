import BasePage from "./base-page";
import {stat} from "@babel/core/lib/gensync-utils/fs";

// *************************** ELEMENTS ***************************
let
    createContactButton = e => browser.$('#add_button'),
    confirmCreateContactButton = e => browser.$('.save_button'),
    deskNameInput = e => browser.$('#id="name"),
    idNumberInput = e => browser.$('#other_id"),
    tagsInput = e => browser.$('Enter tags ...")



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

    verify_all_values(object) {
        this.waitElementToDisappear(confirmCreateContactButton());
        this.verify_all_values_on_main_container(object)
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
        this.enterValue(stateInput(), contactsObject.address.state);
        this.enterValue(postalInput(), contactsObject.address.postal);
        this.enterValue(notesInput(), contactsObject.notes);
        return this;
    }

}
