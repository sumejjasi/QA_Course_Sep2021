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
        email: D.getRandomNo()+'@gmail.com',
        phone : D.getRandomNo(),
        source : 'Test Source',
        idNum : 'Test ID Num',
    },
    address: {
        address1 : 'Test Address 1',
        address2 : 'III/2',
        city : 'Sarajevo',
        state: 'Kanton',
        postal: 745754
    },
    notes: 'Test notes'

}
D.providers = {
        companyName: 'Test Company Name',
        companyWebside: D.getRandomNo()+'test456@gmail.com',
        description: 'Danas je divan dan',
        tags:'Nedjelja',

        information: {
            streetAddress:D.getRandomNo()+'test789',
            apartment:D.getRandomNo()+'test555',
            city:'Sarajevo',
            state:'Bosna',
            postal:'71000',
            phone:D.getRandomNo()+'456-456',
            email:D.getRandomNo()+'test159@gmail.com',
        },
    accounting: {
        account : D.getRandomNo()+'789',
        commission : '70%',
        sideCode: '101010',
        glCode: '7777',
        taxRate:'7895412',
        terms:'Petak',
        credit:'15',
        otherCode:D.getRandomNo()+'14',
    },

}

module.exports = D;
