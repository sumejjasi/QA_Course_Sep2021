const ui = require('../pages/ui-spec');

context('Test suite title', () => {

    it('Test case title', () => {
        ui.login.navigate_to_login_page()
            .enter_credentials()
            .click_Login_button()

        ui.menu.click_Inventory()
        ui.inventory.click_Create_inventory()
            .enter_Invertory_Name()
            .click_Create_Item_Button()
            .verify_Messsage_for_newly_Added_Inventory()



        // ui.template.enter_something()
        //     .click_something()
        //     .verify_something()
    })
});
