const D = exports;
const helper = require('./helper.js');

D.setNewRandomNo = function () {
    return helper.setNewRandomNo();
};

D.getRandomNo = function () {
    return helper.getRandomNo();
};

D.randomNo = D.getRandomNo();

D.giftCard = {
    number: D.randomNo,
    firstName: 'Test First Name',
    lastName: 'Test Last Name',
    email: 'sumejja.s.i@gmail.com',
    billingSection: {
        firstName: 'Billing First Name',
        lastName: 'Billing Last Name',
        address1: 'Test Address 1',
        address2: 'III/2',
        city: 'Sarajevo',
        state: 'Canton Sarajevo',
        postal: '71000',
        phone: '000/333/444',

        email: 'sumejja.s.i@gmai.com',
    },
    cardDetails: {
        cardValue: 'test card value',
        maxUses: '2',
        expires: '2021-10-06',
    }
}

D.contact = {
    profile: {
        firstName: 'Test First Name',
        lastName: 'Test Last Name',
        companyName: 'Test Company Name',
        email: D.getRandomNo() + '@gmail.com',
        phone: D.getRandomNo(),
        source: 'Test Source',
        idNum: 'Test ID Num',
    },
    address: {
        address1: 'Test Address 1',
        address2: 'III/2',
        city: 'Sarajevo',
        state: 'Kanton',
        postal: 745754
    },
    notes: 'Test notes'
}

D.serviceProviders = {
    providerInfo: {
        company: 'Mukaddesa Company ' + D.getRandomNo(),
        website: 'www.testing.com',
        description: 'Provider created for testing purposes',
        tags: 'Tag'
    },
    companyInfo: {
        address1: 'Address 1',
        address2: 'Address 2',
        city: 'City',
        state: 'State',
        postal: 745754,
        phone: D.getRandomNo(),
        email: 'automationtest@gmail.com'
    },

    primaryContact: {
        name: 'Mukaddesa Test',
        email: 'test@gmail.com',
        phone: D.getRandomNo()
    },

    accounting: {
       account: 122,
       commission: '5%',
        siteCode:8907,
        GLCode: 1234,
        taxRate:17,
        terms: 'all days',
        credit: 'enabled',
        otherCode:12345678


    },
    accountingContact: {
        name:'Mukaddesa',
        email: 'autotest@gmail.com',
        phone: D.getRandomNo()
    },
    notes: 'Provider Notes'


}

module.exports = D;
