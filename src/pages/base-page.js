import {assert} from 'chai';
import {expect} from 'chai';

let
    elementByText = (text) => browser.$('//*[text()="' + text + '"]'),
    elementByPartialText = (text) => browser.$('//*[contains(text(),"' + text + '")]')

export default class BasePage {

    constructor() {
    }

    pause(seconds) {
        driver.pause(seconds * 1000);
        return this;
    };


    waitElementToDisappear(el) {
        if (el.isDisplayed() === true) {
            el.waitForDisplayed({reverse: true});
        }
        return this;
    }

    waitElementToBeVisible(el) {
        el.waitForDisplayed({timeout: 30000});
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

        if (isExactText){
            elementByText(text).waitForEnabled();
            elementByText(text).click();
        }
        else{
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
        expect(element.getText()).to.contain(text);
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
}
