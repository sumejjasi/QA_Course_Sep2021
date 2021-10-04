const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Providers page tests', () => {

    it ('Verify that new provider can be added with all values', () => {
        ui.login.login();
        ui.menu.go_to_Service_Providers();
        ui.providers.click_Create_Provider()
            .enter_all_values(D.serviceProviders)
            .click_Confirm_Create_Provider()
            .verify_toast_message(C.toastMessages.providers.providerAdded)


    })
});
