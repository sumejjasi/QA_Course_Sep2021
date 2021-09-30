import BasePage from "./base-page";
const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createInventoryButton = e => browser.$('#add_button'),
    inventoryName = e => browser.$('#name'),
    createItemButton = e => browser.$('.save_button'),
    toastMessage = e => browser.$('.noty_body')

// add comma at the end of the previous line before adding new element selectors

export default class InventoryPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

    click_something() {
        someElementById().click()
        return this;
    }

    enter_something() {
        this.enterValue(someElementByAttribute(), 'some text');
        return this;
    }

    verify_something() {
        this.verifyText(someElementByClassName(), 'some text')
        return this;
    }

    click_Create_inventory() {
        createInventoryButton().click()
        return this;
    }

    enter_Invertory_Name() {
        this.enterValue(inventoryName(), D.randomNo+'Table');
        return this;
    }

    click_Create_Item_Button() {
        createItemButton().click()
        return this;
    }

    verify_Messsage_for_newly_Added_Inventory() {
        this.verifyText(toastMessage(), '  Inventory Item Added.')
        return this;
    }
}
