const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Service Provider Page', () => {

   // for (var i = 0; i < 10; i++) {
        it('Verify that new service provider can be added', () => {

            ui.login.login_as(D.users.admin)
            ui.menu.click_Inventory()
                .click_Service_Providers()
            ui.serviceProviders.click_Create_Service_Provider()
                .enter_all_values(D.serviceProvider)
                .click_Confirm_Create_Service_Provider()
                .verify_toast_message(C.toastMessages.serviceProvider.providerAdded)
                .verify_all_values(D.serviceProvider)
        })
  // }
});
