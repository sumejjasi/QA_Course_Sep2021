import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createUserButton = e => browser.$('#add_button'),
    emailInputField = e => browser.$('#email'),
    usernameInput = e => browser.$('[placeholder="Username (optional)"]'),
    firstNameInput = e => browser.$('[placeholder="First Name"]'),
    lastNameInput = e => browser.$('[placeholder="Last Name"]'),
    numInput = e => browser.$('[placeholder="Employee number, etc."]'),
    tagsInput = e => browser.$$('[placeholder="Enter tags ..."]')[1],
    createUserConfirm = e => browser.$('.save_button')
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

    enter_email() {
        this.enterValue(emailInputField(), 'fjhsdh')
        return this;
    }

    // select_group(group) {
    //     groupButton().click()
    //     browser.switchToFrame(0);
    //     this.clickByText(group)
    //     useThisGroupButton().click()
    //     browser.switchToParentFrame();
    //     return this;
    // }



    enter_all_values(object) {
        this.enterValue(emailInputField(), object.email)
        this.enterValue(usernameInput(), object.username)
        this.enterValue(firstNameInput(), object.firstName)
        this.enterValue(lastNameInput(), object.lastName)
        this.enterValue(tagsInput(), object.tag)

        return this;
    }



    verify_all_values(object) {
        this.waitElementToDisappear(usernameInput())
        this.verify_all_values_on_main_container(object)
        return this;
    }


}
