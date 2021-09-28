const ui = require('../pages/ui-spec');
const {expect} = require("chai");

context('Test suite title', () => {

    it('Test case title', () => {

        // Triple A principle
        // Arrange

        // empty element selector
        let someElement = e => browser.$('');

        //element found by ID   -  #
        let emailInput = e => browser.$('#username');

        // element found by attribute  - [someAttribute= "someValue"]
        let passwordInput = e => browser.$('[name="password"]');

        // element found by attribute
        let loginButton = e => browser.$('[type="submit"]');

        // element found by class name  -  .
       // let dashboardTitle = e => browser.$('.page-header');

        // element found by tag
       // let dashboardTitle = e => browser.$('h1');

        // element found by id
        let loggedInUsername = e => browser.$('#user_fullname');



        // Act
        browser.url("https://login.rezgo.com/")
        emailInput().setValue('sumejja.s.i@gmail.com')
        passwordInput().setValue('test1234')
        loginButton().click()


        // Assert
        expect(loggedInUsername().getText()).to.contain('Sumejja Sljivic Ivojevc');

        // ui.template.navigate_to_login_page()
        //     .enter_credentials()
        //     .verify_user_is_logged_in()
    })
});


//Merjem
//Mukaddesa
//Kanita
//Suriza
// Dzejna
// Mediha

