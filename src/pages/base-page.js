import {assert} from 'chai';
import {expect} from 'chai';

let
    elementByText = (text) => browser.$('//*[text()="' + text + '"]'),
    elementByPartialText = (text) => browser.$('//*[contains(text(),"' + text + '")]'),
    toastMessage = e => browser.$('.noty_body'),
    mainPageContainer = e => browser.$('.card_display'),
    dropdownSearch = e => browser.$('.chosen-search-input'),
    dropdownSearchInput = e => browser.$('//*[@class="chosen-search"]/input'),
    dropdownOption = text => browser.$('//em[text()="' + text + '"]')
dropdownSearchInput = (dropdownNumber) => browser.$('//*[@class="chosen-search"]/input[position()=' + dropdownNumber + ']'),
    dropdownOption = text => browser.$('//em[text()="' + text + '"]'),
    uploadContainer = e => browser.$('[type="file"]'),
    dropdown = (dropdownNumber) => browser.$$('.chosen-container-single')[dropdownNumber - 1]

export default class BasePage {

    constructor() {
    }

    pause(seconds) {
        driver.pause(seconds * 1000);
        return this;
    };

    verify_toast_message(message) {
        this.verifyText(toastMessage(), message)
        return this;
    }

    verifyTextOnMultipleElements(elementValuePairs) {
        let that = this;

        elementValuePairs.forEach(function (arrayElement) {
            if (arrayElement[1]) {
                that.verifyText(arrayElement[0], arrayElement[1]);
            }
        });
        return this;
    };

    verifyMultipleValuesOnOneElement(mainContainer, obj) {

        let that = this
        const res = {};

        function recurse(obj, current) {
            for (const key in obj) {
                let value = obj[key];
                if (value != undefined) {
                    if (value && typeof value === 'object') {
                        recurse(value, key);
                    } else {
                        // Do your stuff here to var value
                        res[key] = value;
                        that.verifyText(mainContainer, res[key]);
                    }
                }
            }
        }

        recurse(obj);
        return this;
    };

    verify_all_values_on_main_container(object) {
        this.verifyMultipleValuesOnOneElement(mainPageContainer(), object)
        return this;
    }

    waitElementToDisappear(el) {
        //if (el.isDisplayed() === true) {
        el.waitForDisplayed({reverse: true});
        //}
        return this;
    }

    waitElementToBeVisible(el) {
        el.waitForDisplayed({timeout: 30000});
        return this;
    }

    //
    // selectDropdownOption(el, option) {
    //     el.selectByVisibleText(option)
    //     return this;
    // }


    waitElementToBeVisible(el) {
        el.waitForDisplayed({timeout: 30000});
        return this;
    }

    selectDropdownOption(dropdownNumber, option) {
        dropdown(dropdownNumber).click();
        this.enterValue(dropdownSearchInput(dropdownNumber), option)
        this.waitAndClick(dropdownOption(option))
        return this;
    }

    enterValue(el, text) {
        el.setValue(text);
        return this;
    }

    waitAndClick(el) {
        el.waitForDisplayed({timeout: 30000});
        // el.waitForEnabled();
        el.click();
        return this;
    }

    click(text, isExactText = true) {

        if (isExactText) {
            elementByText(text).waitForEnabled();
            elementByText(text).click();
        } else {
            elementByPartialText(text).waitForEnabled();
            elementByPartialText(text).click();
        }
        return this;
    }

    clickByPartialText(text) {
        elementByPartialText(text).waitForEnabled();
        elementByPartialText(text).click();
        return this;
    }

    verifyElementIsVisible(element) {
        assert.strictEqual(element.isDisplayed(), true);
        return this;
    };

    verifyExactText(element, text) {
        assert.strictEqual(element.getText(), text);
        return this;
    };

    verifyPartialText(element, text) {
        this.waitElementToBeVisible(element)
        expect(JSON.stringify(element.getText())).to.contain(text);
        return this;
    };

    verifyText(element, text) {
        this.verifyPartialText(element, text);
        return this;
    };

    // verifyTextIsVisibleOnMainContainer(text) {
    //     expect(mainContainer().getText()).to.contain(text);
    //     return this;
    // };
    //
    // verifyTextIsNotVisibleOnMainContainer(text, androidWebContext = true, iOSWebContext = true) {
    //     expect(mainContainer().getText()).to.not.contain(text);
    //     return this;
    // };

    verifyTextOnMultipleElements(valuesOrElementValuePairs) {
        let that = this;

        valuesOrElementValuePairs.forEach(function (arrayElement) {
            if (Array.isArray(arrayElement)) {
                if (arrayElement[1]) {
                    that.verifyText(arrayElement[0], arrayElement[1]);
                }
            } else {
                if (arrayElement) {
                    that.verifyText(arrayElement);
                }
            }
        });
        return this;
    };
};
