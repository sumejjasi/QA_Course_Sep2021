import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    emailInput = e => browser.$('#username'),
    passwordInput = e => browser.$('[name="password"]'),
    //loggedInMessage = e => browser.$('//*[@class="user-info"]/small'),
    loggedInEmail = e => browser.$('#user_fullname'),
    loginButton = e => browser.$('[type="submit"]')
// add comma at the end of the previous line before adding new element selectors

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    navigate_to_login_page() {
        browser.url('https://login.rezgo.com/')
        return this;
    }

    enter_credentials(object) {
        emailInput().setValue(object.username)
        passwordInput().setValue(object.password)

        console.log('Logging in as ' + object.username + ' / ' + object.password)
        return this;
    }

   click_Login_button() {
       loginButton().click()
        return this;
    }

    verify_user_is_logged_in(object) {
        //this.verifyText(loggedInMessage(), 'Logged in as')
        this.verifyText(loggedInEmail(), object.firstName)
        return this;
    }

    login_as(object) {
       this.navigate_to_login_page()
           .enter_credentials(object)
           .click_Login_button()
           .click_Login_button()
        return this;
    }
}
