const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require("../utils/data");

context('Inventory page tests', () => {
    it('Verify that new inventory can be added with unique name', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()

        ui.menu.click_Inventory()
        ui.inventory.click_Create_inventory()
            .enter_Invertory_Name(D.randomNo+'Table')
            .upload_multiple_images('test-image.jpg', 'test-image2.jpg')
            .click_Create_Item_Button()
            .verify_toast_message(C.toastMessages.inventory.itemAdded)
            .pause(5)
    })
});
