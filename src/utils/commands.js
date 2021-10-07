const imaps = require('imap-simple');
const D = require('../utils/data');

exports.commands = function () {

    browser.addCommand('fetchGmailUnseenMails', function (username, password) {
        let config = {
            imap: {
                user: username,
                password: password,
                host: 'imap.gmail.com',
                port: 993,
                tls: true,
                tlsOptions: {servername: 'imap.gmail.com'},
                authTimeout: 20000
            }
        };

        return imaps.connect(config).then(function (connection) {

            return connection.openBox('INBOX').then(function () {
                let searchCriteria = [
                    'UNSEEN'
                ];

                let fetchOptions = {
                    bodies: ['HEADER', 'TEXT'],
                    markSeen: true,
                    markRead: true
                };

                return connection.search(searchCriteria, fetchOptions).then(function (results) {
                    let mails = [];
                    if (results) {
                        results.forEach(item => {
                            var _mail = {};
                            if (item && item.parts) {
                                item.parts.forEach(_item => {
                                    if (_item.which == "TEXT") {
                                        _mail.body = _item.body;
                                    }
                                    if (_item.which == "HEADER" && _item.body && _item.body.from && _item.body.from.length) {
                                        _mail.from = _item.body.from[0];
                                    }
                                    if (_item.which == "HEADER" && _item.body && _item.body.subject && _item.body.subject.length) {
                                        _mail.subject = _item.body.subject[0];
                                    }
                                    if (_item.which == "HEADER" && _item.body && _item.body.to && _item.body.to.length) {
                                        _mail.to = _item.body.to[0];
                                    }
                                })
                            }
                            mails.push(_mail);
                        });

                    }
                    connection.end();
                    D.unreadEmails = mails;
                    return mails;
                });
            });
        });
    });
}
