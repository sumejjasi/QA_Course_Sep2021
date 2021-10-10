import {assert, use} from 'chai';
import {expect} from 'chai';

const path = require('path');
const D = require('../utils/data')

let
    elementByText = (text) => browser.$('//*[text()="' + text + '"]'),
    elementByTagAndText = (tag, text) => browser.$('//' + tag + '[text()="' + text + '"]'),
    elementByPartialText = (text) => browser.$('//*[contains(text(),"' + text + '")]'),
    toastMessage = e => browser.$('.noty_body'),
    mainContainer = e => browser.$('.card_display'),
    dropdown = dropdownNumber => browser.$$('.chosen-container-single')[dropdownNumber - 1],
    dropdownSearchInput = e => browser.$('//*[contains(@class, "chosen-container-active")]/div/div/input'),
    dropdownOption = text => browser.$('//em[text()="' + text + '"]'),
    uploadContainer = e => browser.$('[type="file"]')

export default class BasePage {

    constructor() {
    }

    pause(seconds) {
        driver.pause(seconds * 1000);
        return this;
    };

    verify_toast_message(message) {
        this.verifyText(toastMessage(), message)
        toastMessage().click()
        return this;
    }

    waitElementToDisappear(el) {
        el.waitForDisplayed({reverse: true});
        return this;
    }

    waitElementToBeVisible(el) {
        el.waitForDisplayed({timeout: 30000});
        return this;
    }

    waitElementToBeVisible(el) {
        el.waitForDisplayed({timeout: 30000});
        return this;
    }

    selectDropdownOption(dropdownNumber, option) {
        dropdown(dropdownNumber).click()
        this.enterValue(dropdownSearchInput(), option)
        this.waitAndClick(dropdownOption(option))
        return this;
    }

    upload_file(fileName) {
        const filePath = path.join(__dirname, '../utils/' + fileName);

        uploadContainer().waitForExist();
        uploadContainer().addValue(filePath);
        return this;
    }

    enterValue(el, text) {
        el.waitForDisplayed();
        el.waitForEnabled();
        el.setValue(text);
        return this;
    }

    scrollAndClick(el) {
        el.scrollIntoView();
        el.waitForDisplayed();
        el.click();
        return this;
    }

    waitAndClick(el) {
        el.waitForDisplayed({timeout: 30000});
        // el.waitForEnabled();
        el.click();
        return this;
    }

    clickByText(text, tag) {
        if (tag) {
            elementByTagAndText(tag, text).waitForEnabled();
            elementByTagAndText(tag, text).click();
        } else {
            elementByText(text).waitForEnabled();
            elementByText(text).scrollIntoView();
            elementByText(text).click();
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
        if (text) {
            this.verifyPartialText(element, text);
        } else {
            this.verifyElementIsVisible(elementByPartialText(text));
        }
        return this;
    };

    verifyTextIsNotVisible(element, text) {
        expect(JSON.stringify(element.getText())).to.not.contain(text);
        return this;
    };

    verifyTextIsVisibleOnMainContainer(text) {
        expect(mainContainer().getText()).to.contain(text);
        return this;
    };

    verifyVisibleValues(containerElement, obj) {

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
                        that.verifyText(containerElement, res[key]);
                    }
                }
            }
        }

        recurse(obj);
        return this;
    };

    verifyInvisibleValues(containerElement, obj) {

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
                        that.verifyTextIsNotVisible(containerElement, res[key]);
                    }
                }
            }
        }

        recurse(obj);
        return this;
    };

    verify_all_values_on_main_container(object) {
        this.verifyVisibleValues(mainContainer(), object)
        return this;
    }

    verifyTextIsNotVisibleOnMainContainer(text) {
        expect(JSON.stringify(mainContainer().getText())).to.not.contain(text);
        return this;
    };

    verifyTextOnMultipleElements(elementValuePairs) {
        let that = this;

        elementValuePairs.forEach(function (arrayElement) {
            if (arrayElement[1]) {
                that.verifyText(arrayElement[0], arrayElement[1]);
            }
        });
        return this;
    };

    markAllEmailsAsRead(emailAccount) {
        browser.fetchGmailUnseenMails(emailAccount.email, emailAccount.password)
        D.unreadEmails = []
    }

    get_text_between_two_values(wholeText, firstValue, secondValue) {
        return wholeText.match(firstValue + "(.*)" + secondValue)[1];
    }

    verify_email(emailAccount, emailTemplate) {

        D.unreadEmails = []
        for (let i = 0; i < 15; i++) {
            if (!D.unreadEmails[0]) {
                this.pause(5)
                browser.fetchGmailUnseenMails(emailAccount.email, emailAccount.password)
            }
        }

        let last_unread_email = D.unreadEmails[0];
        expect(last_unread_email.from).to.contain(emailTemplate.from)
        expect(last_unread_email.subject).to.include(emailTemplate.subject)
        expect(last_unread_email.body).to.include(emailTemplate.content)
    };
}
