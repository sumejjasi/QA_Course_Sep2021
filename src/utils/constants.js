require('@wdio/mocha-framework');
const helper = require('./helper')

let C = exports;

C = {
    toastMessages: {
        users: {
            userAdded: '  User Added.',
        },
        giftCard: {
            cardAdded: '  Gift Card Added.'
        },
        inventory: {
            itemAdded: '  Inventory Item Added.'
        }
    }
}


module.exports = C;
