import BasePage from "./base-page";
const D = require('../utils/data');

// *************************** ELEMENTS ***************************
let
    createInventoryButton = e => browser.$('#add_button'),
    inventoryName = e => browser.$('#name'),
    createItemButton = e => browser.$('.save_button'),
    // imageBox1 = e => browser.$$('.image-box')[0],
    // imageBox2 = e => browser.$$('.image-box')[1],
    imageBox1 = e => browser.$("//*[@class='image_path'][position()=1]"),
    imageBox2 = e => browser.$("//*[@class='image_path move_handle'][position()=2]")
    imageBox2 = e => browser.$("//*[@class='image_path move_handle'][position()=1]")

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

    enter_Invertory_Name(txt) {
        this.enterValue(inventoryName(), txt);
        return this;
    }

    upload_inventory_image(filename) {
        this.upload_file(filename)
        this.waitElementToBeVisible(imageBox1())
        return this;
    }

    upload_multiple_images(filename1, filename2) {
        this.upload_file(filename1)
        this.waitElementToBeVisible(imageBox1())

        this.upload_file(filename2)
        this.waitElementToBeVisible(imageBox2())
        return this;
    }

    click_Create_Item_Button() {
        createItemButton().click()
        return this;
    }

}
