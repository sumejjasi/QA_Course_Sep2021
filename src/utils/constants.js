require('@wdio/mocha-framework');
const helper = require('./helper')
const D = require('../utils/data');

let C;

C = {
    toastMessages: {
        users: {
            userAdded: 'User Added.',
        },
        giftCard: {
            cardAdded: 'Gift Card Added.',
            cardSent: ' Gift card sent to ' //+ D.giftCard.email
        },
        inventory: {
            itemAdded: 'Inventory Item Added.'
        },
        serviceProvider: {
            providerAdded: 'Provider Added.'
        },
        contacts: {
            contactAdded: 'Contact Added.'
        },
        merchandise: {
            merchandiseCreated: 'Merchandise Added.'
        },
        rules: {
            rulesCreated: 'Rule Added.'
        }
    }
}

C.emailTemplates = {
    userAccountCreated: {
        from: `Rezgo Notifications <notifications@rezgo.com>`,
        subject: 'A Rezgo user account has been created for you',
        content: 'A Rezgo user account has been created for you for QA_PRO.'
    },
    giftCardCreated: {
        from: `QA_PRO <noreply@rezgo.com>`,
        subject: 'A gift card for you',
        content: 'Here is your gift card.'
    }
}



module.exports = C;
