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
            itemAdded: 'Inventory Item Added.',
            existingItem: 'You are already using that item name on another item.'
        },
        serviceProvider: {
            providerAdded: 'Provider Added.'
        },
        contacts: {
            contactAdded: 'Contact Added.'
        },
        desk: {
            deskAdded: 'Desk Added.'
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
