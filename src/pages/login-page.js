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

    enter_credentials() {
        emailInput().setValue('sumejja.s.i@gmail.com')
        passwordInput().setValue('test1234')
        return this;
    }

   click_Login_button() {
       loginButton().click()
        return this;
    }

    verify_user_is_logged_in() {
        //this.verifyText(loggedInMessage(), 'Logged in as')
        this.verifyText(loggedInEmail(), 'Sumejja Sljivic Ivojevc')
        return this;
    }
}
