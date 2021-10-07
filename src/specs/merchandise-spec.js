const ui = require('../pages/ui-spec');
const D = require('../utils/data');
const C = require('../utils/constants');

context('Test suite title', () => {

    it('verify thaht user can be added new merchandise', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials(D.users.admin)
            .click_Login_button()
        ui.menu.click_Merchandise()
        ui.merchandise.click_Merchandise_Creat()
            .enter_all_values(D.merchandise)
            .upload_merchandise_image('sea.jfif')
            .click_Create_Merchandise()
            .verify_toast_message(C.merchandiseTemplate.merchandiseCreated.message)
    })
});
