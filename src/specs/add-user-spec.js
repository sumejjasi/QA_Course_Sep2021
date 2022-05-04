const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require('../utils/data');

context('Users page', () => {

    // beforeEach(function () {
    //     ui.app.markAllEmailsAsRead(D.gmailAccount)
    // })

    // beforeEach(() => {
    //     ui.app.markAllEmailsAsRead(D.gmailAccount)
    // })

    it('Verify that new user can be added with required value', () => {
        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_email()
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
    })

    it('Verify that new user can be added with all values - Site Administrator', () => {
        let visibleMenuOptions = ['Dashboard', 'Bookings', 'Inventory', 'Gift Cards', 'Settings']
        let invisibleMenuOptions = []

        D.user.groupName = 'Site Administrator'
        console.log('USER IS ' + JSON.stringify(D.user))

        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_all_values(D.user)
            .select_group(D.user.groupName)
            .upload_file('test-image.jpg')
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
            .verify_email_and_store_values(D.gmailAccount, C.emailTemplates.userAccountCreated)
        ui.menu.click_Log_Out()
        ui.login.login_as(D.user)
        ui.menu.verify_menu_options(visibleMenuOptions, invisibleMenuOptions)
    })

    it('Verify that new user can be added with all values - Administrator', () => {
        let visibleMenuOptions = ['Dashboard', 'Inventory', 'Gift Cards']
        let invisibleMenuOptions = ['Settings']

        D.getNewUserData()
        D.user.groupName = 'Administrator'
        console.log('USER IS ' + JSON.stringify(D.user))

        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_all_values(D.user)
            .select_group(D.user.groupName)
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
            .verify_email_and_store_values(D.gmailAccount, C.emailTemplates.userAccountCreated)
        ui.menu.click_Log_Out()
        ui.login.login_as(D.user)
        ui.menu.verify_menu_options(visibleMenuOptions, invisibleMenuOptions)
    })

    it('Verify that new user can be added with all values - Product Manager', () => {
        let visibleMenuOptions = ['Dashboard', 'Inventory', 'Messages']
        let invisibleMenuOptions = ['Bookings', 'Settings', 'Merchandise']

        D.getNewUserData()
        D.user.groupName = 'Product Manager'
        console.log('USER IS ' + JSON.stringify(D.user))

        ui.login.login_as(D.users.admin)
        ui.menu.click_Users()
        ui.users.click_add_user()
            .enter_all_values(D.user)
            .select_group(D.user.groupName)
            .click_confirm_create_user()
            .verify_toast_message(C.toastMessages.users.userAdded)
            .verify_email_and_store_values(D.gmailAccount, C.emailTemplates.userAccountCreated)
        ui.menu.click_Log_Out()
        ui.login.login_as(D.user)
        ui.menu.verify_menu_options(visibleMenuOptions, invisibleMenuOptions)
    })

});
