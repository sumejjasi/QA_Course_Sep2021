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
            itemAdded: '  Inventory Item Added.',
            existingItem: '  You are already using that item name on another item.'
        },
        contacts: {
            contactAdded: '  Contact Added.'
        },
        providers: {
            providerAdded:   '  Provider Added.'
        }

    }
}


module.exports = C;
