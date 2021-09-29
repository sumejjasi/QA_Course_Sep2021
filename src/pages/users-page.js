import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createUserButton = e => browser.$('#add_button'),
    emailInputField = e => browser.$('#email'),
    createUserConfirm = e => browser.$('.save_button'),
    toastMesaage = e => browser.$('.noty_body')


// add comma at the end of the previous line before adding new element selectors

export default class UsersPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_add_user() {
        createUserButton().click()

        return this;
    }

    click_confirm_create_user() {
        createUserConfirm().click()

        return this;
    }

    verify_toast_message_for_newly_added_user() {
        this.verifyText(toastMesaage(),'  User Added.' )
        return this;
    }

    enter_email() {
        // emailInputField().setValue('ioieruowiu')
        this.enterValue(emailInputField(), 'fjhsdh')

        return this;
    }


}
