const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');


context('Providers Page Test', () => {

    it('verify that user can added new provider with some data', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()

     ui.menu.click_Inventory()
         .click_Service_Providers()


    ui.providers.click_Create_Provider()
        .enter_all_values(D.providers)
        .click_Confirm_Create_Provider()
        .verify_toast_message(C.toastMessages.providers.providerAdded)
  })
});
