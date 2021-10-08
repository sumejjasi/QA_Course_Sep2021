import BasePage from "./base-page";
import D, {unreadEmails} from "../utils/data";

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

    verify_email_and_store_values(emailAccount, emailTemplate) {

        this.verify_email(emailAccount, emailTemplate)

        let last_unread_email = D.unreadEmails[0];

       D.user.username = this.get_text_between_two_values(last_unread_email.body, 'Your username is ', '\\r\\n Your password is')

        console.log( 'I fetched username: ' + D.user.username)
        console.log( 'and password: ' + D.user.password)

        return this;
    }


}
