const ui = require('../pages/ui-spec');
const C = require('../utils/constants');
const D = require("../utils/data");

context('Inventory page tests', () => {

    it('Verify that new inventory can be added with unique name', () => {
        ui.login.login_as(D.users.admin)

        ui.menu.click_Inventory()
        ui.inventory.click_Create_inventory()
            .enter_Invertory_Name(D.inventory.name)
            .click_Create_Item_Button()
            .verify_toast_message(C.toastMessages.inventory.itemAdded)
    })

    it('Verify that new inventory can NOT be added with existing item name', () => {
        ui.login.login_as(D.users.admin)

        ui.menu.click_Inventory()
        ui.inventory.click_Create_inventory()
            .enter_Invertory_Name('test123')
            .click_Create_Item_Button()
            .verify_toast_message(C.toastMessages.inventory.existingItem)
    })

    it('Verify that new inventory can be added with all values and multiple images', () => {
        ui.login.login_as(D.users.admin)

        ui.menu.click_Inventory()
        ui.inventory.click_Create_inventory()
            .enter_Invertory_Name(D.inventory.name)
            .upload_multiple_images('test-image.jpg', 'test-image2.jfif')
            .click_Create_Item_Button()
            .verify_toast_message(C.toastMessages.inventory.itemAdded)
    })

});
