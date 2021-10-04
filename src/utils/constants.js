require('@wdio/mocha-framework');
const helper = require('./helper')

let C;

C = {
    toastMessages: {
        users: {
            userAdded: 'User Added.',
        },
        giftCard: {
            cardAdded: 'Gift Card Added.'
        },
        inventory: {
            itemAdded: 'Inventory Item Added.'
        },
        serviceProvider: {
            providerAdded: 'Provider Added.'
        },
        contacts: {
            contactAdded: 'Contact Added.'
        }
    }
}


module.exports = C;
