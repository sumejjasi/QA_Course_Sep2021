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

C.emailTemplates = {
    from: `Rezgo Notifications <notifications@rezgo.com>`,
    userAccountCreated: {
        subject: 'A Rezgo user account has been created for you',
        content: 'A Rezgo user account has been created for you for QA_PRO.'
    }
}


module.exports = C;
