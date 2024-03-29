import BasePage from "./base-page";

// *************************** ELEMENTS ***************************
let
    createInventoryButton = e => browser.$('#add_button'),
    inventoryName = e => browser.$('#name'),
    createItemButton = e => browser.$('.save_button'),
    // imageBox1 = e => browser.$$('.image-box')[0],
    // imageBox2 = e => browser.$$('.image-box')[1],
    imageBox1 = e => browser.$("//*[@class='image-box'][position()=1]"),
    imageBox2 = e => browser.$("//*[@class='image-box'][position()=1]")

// add comma at the end of the previous line before adding new element selectors

export default class InventoryPage extends BasePage {

    constructor() {
        super()
    }

    // *************************** ACTIONS ***************************

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
