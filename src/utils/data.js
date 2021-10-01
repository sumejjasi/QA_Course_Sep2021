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
    billingSection : {
        firstName : 'Billing First Name',
        lastName : 'Billing Last Name',
        address1 : 'Test Address 1',
        address2 : 'III/2',
        city : 'Sarajevo',
        state : 'Canton Sarajevo',
        postal : '71000',
        phone : '000/333/444',
        email : 'sumejja.s.i@gmai.com',
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
        email: 'sumejja.s.i@gmail.com',
        phone : '000/333/444',
        source : 'Test Source',
        idNum : 'Test ID Num',
    },
    address: {
        address1 : 'Test Address 1',
        address2 : 'III/2',
        city : 'Sarajevo',
    }

}

module.exports = D;
