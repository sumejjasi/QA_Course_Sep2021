const D = exports;
const helper = require('./helper.js');

D.setNewRandomNo = function () {
    return helper.setNewRandomNo();
};

D.getRandomNo = function () {
    return helper.getRandomNo();
};

D.randomNo = D.getRandomNo();

function format(value, pattern) {
    var i = 0,
        v = value.toString();
    return pattern.replace(/#/g, _ => v[i++]);
}

D.gmailAccount = {
    email: 'protractor.user2@gmail.com',
    password: 'Qapps2021.',
}

D.unreadEmails = []

D.users = {
    admin: {
        username: 'sumejja.s.i@gmail.com',
        password: 'test1234'
    },
    regularUser: {
        username: 'mediha@gmail.com',
        password: 'test1234'
    }
}

D.inventory = {
    name: 'Inventory_' + D.randomNo,
    companyName: 'CompanyName_' + D.randomNo,
    type: 'Product Supplier',
    description: 'description_' + D.randomNo,
    tag: 'tag_' + D.randomNo
}

D.serviceProvider = {
    companyName: 'CompanyName_' + D.randomNo,
    website: 'website_' + D.randomNo,
    type: 'Product Supplier',
    description: 'description_' + D.randomNo,
    tag: 'tag' + D.randomNo,
    companyInformation: {
        address1: 'address1_' + D.randomNo,
        address2: 'address2_' + D.randomNo,
        city: 'city_' + D.randomNo,
        state: 'state_' + D.randomNo,
        country: 'Bosnia',
        postal: 'postal_' + D.randomNo,
        phone: 'phone_' + D.randomNo,
        email: 'email_' + D.randomNo,
    },
    accounting: {
        account: 'account_' + D.randomNo,
        commission: '12',
        siteCode: 'siteCode_' + D.randomNo,
        glCode: 'glCode_' + D.randomNo,
        taxRate: 'taxRate_' + D.randomNo,
        terms: 5,
        credit: '123',
        otherCode: '456',
    },
    primaryContact: {
        name: 'primaryName_' + D.randomNo,
        email: 'primaryEmail_' + D.randomNo,
        phone: 'primarytPhone_' + D.randomNo
    },
    accountingContact: {
        name: 'accountingName_' + D.randomNo,
        email: 'accountingEmail_' + D.randomNo,
        phone: 'accountingPhone_' + D.randomNo
    },
    //  inventory: 'Winter Home',
    notes: 'note_' + D.randomNo
}

D.giftCard = {
    number: format(D.randomNo, '###-####-####'),
    firstName: 'Test First Name',
    lastName: 'Test Last Name',
    email: 'protractor.user2@gmail.com',
    billingSection: {
        firstName: 'Billing First Name',
        lastName: 'Billing Last Name',
        address1: 'Test Address 1',
        address2: 'III/2',
        city: 'Sarajevo',
        stateCode: '1212',
        country: 'Bosnia',
        postal: '71000',
        phone: '000/333/444',
        email: 'sumejja.s.i@gmai.com',
    },
    cardDetails: {
        cardValue: '333',
        maxUses: '2',
        expires: '2021-10-06',
    }
}

D.contact = {
    profile: {
        firstName: 'Test First Name',
        lastName: 'Test Last Name',
        companyName: 'Test Company Name',
        email: D.randomNo + '@gmail.com',
        phone: D.randomNo,
        source: 'Test Source',
        idNum: 'Test ID Num',
    },
    address: {
        address1: 'Test Address 1',
        address2: 'III/2',
        city: 'Sarajevo',
        country: 'Bosnia'
    }
}

D.user = {
    email: 'protractor.user2+' + D.randomNo + '@gmail.com',
    username: D.getRandomNo(),
    firstName: 'test firstName',
    lastName: 'test lastName',
    tag: 'test tag',
    groupName: 'Site Administrator',
}

D.getNewUserData = function () {
    return D.user = {
        email: 'protractor.user2+' + D.randomNo + '@gmail.com',
        username: D.getRandomNo(),
        firstName: 'test firstName',
        lastName: 'test lastName',
        tag: 'test tag',
        groupName: 'Site Administrator',
    }
}

module.exports = D;
