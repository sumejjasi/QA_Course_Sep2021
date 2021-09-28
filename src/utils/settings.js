require('@wdio/mocha-framework');
const C = require('./constants');
const accounts = require('./user-accounts');
const helper = require('./helper');

const S = exports;

S.platforms =
    {
        android: 'Android',
        iOS: 'iOS'
    }

S.platform = S.platforms.android;
S.domain = 'PENTEST';
S.orgNum = 2;

S.isAndroid = function () {
    return S.platform === S.platforms.android;
};
S.isIOS= function () {
    return S.platform === S.platforms.iOS;
};

S.baseUrl = {
    pentest: 'https://pentest.trackerproducts.com',
    apac: 'https://apac.trackerproducts.com',
};

if (S.domain === 'QA') {
    S.base_url = 'https://qa.trackerproducts.com';
    S.api_url = 'https://qaapi.trackerproducts.com';
    S.media_api_url = 'https://qamedia.trackerproducts.com';
    S.mobile_api_url = 'https://qaapi.trackerproducts.com/mobile';
} else {
    S.base_url = 'https://pentest.trackerproducts.com';
    S.api_url = 'https://pentestapi.trackerproducts.com';
    S.media_api_url = 'https://pentestmedia.trackerproducts.com/';
    S.mobile_api_url = 'https://pentestapi.trackerproducts.com/mobile';
}

S.currentDateAndTime = helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat);
S.currentDate = helper.getCurrentDateInCurrentFormat(C.currentDateFormat);
S.tomorrowsDate = helper.tomorrowsDate(C.currentDateTimeFormat);

S.getCurrentDate = function (mask) {
    S.currentDateAndTime = helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat);
    S.currentDate = helper.getCurrentDateInCurrentFormat(C.currentDateFormat);
    return helper.getCurrentDateInSpecificFormat(mask);
};
S.getYesterdaysDate = function (mask) {
    return helper.getYesterdaysDateInSpecificFormat(mask);
};
S.getDateBeforeXDaysInSpecificFormat = function (mask, daysBeforeTheCurrentDate) {
    return helper.getDateBeforeXDaysInSpecificFormat(mask, daysBeforeTheCurrentDate);
};
S.currentUrl = null;
S.selectedOfficeId = 1;
S.selectedorganizationId = 1;
S.passwordPattern = 'mmm/dd/yyyy';
S.userRoles = accounts.userRoles;

S.QA = {
    org2: {
        id: 1,
        orgName: 'Tracker HQ',
        officeId: 1,
        officeName: 'Main',
        orgAndOfficeName: 'Tracker HQ - Main',
    },
    // user from Org#2
    org2Admin: {
        id: 39,
        guid: '54f39f56-03d9-eb11-82f2-068f48eb83b1',
        organizationId: 4,
        officeId: 13,
    },
    fieldIds: {
        case: {
            offenseLocation: 1,
            offenseDescription: 2,
            tags: 3,
            offenseDate: 4,
        },
        item: {
            recoveredAt: 5,
            custodyReason: 6,
            recoveredBy: 7,
            make: 8,
            model: 9,
            serialNumber: 10,
            tags: 11,
            description: 12,
            recoveryDate: 13,
            itemBelongsTo: 14,
            barcodes: 15,
            expectedReturnDate: 16,
            actualDisposedDate: 17,
        },
        person: {
            businessName: 18,
            middleName: 19,
            alias: 20,
            dob: 21,
            driverLicense: 22,
            race: 23,
            gender: 24,
            mobilePhone: 25,
            otherPhone: 26,
            deceased: 27,
            juvenile: 28,
            email: 29,
            address: 30,
        },
    },
    caseOfficerId: () => S.userAccounts.powerUser.id,
    offenseType: {
        name: C.offenseTypes.burglary,
        id: 77,
    },
    offenseType2: {
        name: C.offenseTypes.arson,
        id: 33,
    },
    category: {
        name: C.itemCategories.alcohol,
        id: 12,
    },
    category2: {
        name: C.itemCategories.computer,
        id: 108,
    },
    custodyReason: {
        name: C.custodyReason.asset,
        id: 8,
    },
    custodyReason2: {
        name: C.custodyReason.investigation,
        id: 54,
    },
    checkoutReason: {
        name: C.checkoutReasons.court,
        id: 13,
    },
    checkoutReason2: {
        name: C.checkoutReasons.lab,
        id: 39,
    },
    personType: {
        name: C.personTypes.suspect,
        id: 145,
    },
    personType2: {
        name: C.personTypes.victim,
        id: 142,
    },
    race: {
        name: C.races.asian,
        id: 4,
    },
    race2: {
        name: C.races.hispanic,
        id: 7,
    },
    caseCustomForm: {
        name: 'Cypress Case Form',
        id: 28,
        checkboxListId: 'field2094',
        radioButtonListId: 'field2096',
        selectListId: 'field2098',
        number: 'field2071',
        password: 'field2088',
        textbox: 'field5746',
        email: 'field2069',
        textarea: 'field3227',
        checkbox: 'field2092',
        date: 'field2104',
        user: 'field2100',
        person: 'field2102',
    },
    // need to modify some other shared Item form and adjust data here
    itemCustomForm: {
        name: 'Cypress Item Form',
        id: 2,
        checkboxListId: 'field2295',
        radioButtonListId: 'field2297',
        selectListId: 'field2299',
        number: 'field2287',
        password: 'field2289',
        textbox: 'field2283',
        email: 'field2285',
        textarea: 'field2291',
        checkbox: 'field2293',
        date: 'field2305',
        user: 'field2301',
        person: 'field2303',
    },
};

S.QA_1 = {
    orgSettings: {
        id: 3,
        name: 'Web Test Automation #1',
        guid: '42cd7f0a-dbd8-eb11-82f2-068f48eb83b1',
    },
    office_1: {
        id: 12,
        guid: '43cd7f0a-dbd8-eb11-82f2-068f48eb83b1',
        name: 'Cypress Office 1',
        get orgAndOfficeName () {
            return S.QA_1.orgSettings.name + ' - ' + S.QA_1.office_1.name;
        },
    },
    office_2: {},
    locations: [
        {
            id: 55,
            guid: '44cd7f0a-dbd8-eb11-82f2-068f48eb83b1',
            name: 'root',
        },
        {
            id: 59,
            guid: 'f461f227-e3d8-eb11-82f2-068f48eb83b1',
            name: 'CypressStorageLoc1',
        }],
    users: {
        systemAdmin: {
            id: 35,
            guid: '477397a0-dbd8-eb11-82f2-068f48eb83b1',
            organizationId: 1,
            officeId: 1,
        },
        orgAdmin: {
            id: 36,
            guid: '29cfe3fa-e3d8-eb11-82f2-068f48eb83b1',
        },
        powerUser: {
            id: 37,
            guid: '66296508-e4d8-eb11-82f2-068f48eb83b1',
        },
        clpUser: {
            id: 38,
            guid: '77f14214-e5d8-eb11-82f2-068f48eb83b1',
        },
    },
    caseForReport: {
        id: null,
    },
    itemForReport: {
        id: null,
        descrption: '',
    },
    personForReport: {
        id: null,
    },
    oldCase: {
        id: 76,
        caseNumber: 'Test Case 1',
    },
    recentCase: {
        id: 76,
        caseNumber: 'Test Case 1',
    },
    person: {
        name: 'Person1',
        fullName: 'Test Person1',
        id: 56,
        get organizationId () {
            return S.QA_1.orgSettings.id;
        },
        userId: null,
        guid: 'dac05e95-ac87-4480-b332-c137a4b47c43',
        email: 'qa+person1@trackerproducts.com',
    },
    person_2: {
        name: 'Person2',
        fullName: 'Test Person2',
        id: 57,
        organizationId: () => S.QA_1.orgSettings.id,
        userId: null,
        guid: '2a709a9a-2ca9-41ff-a6ac-3dafcf8e3808',
        email: 'qa+person2@trackerproducts.com',
    },
    recoveredById: () => S.QA_1.person.id,
    caseOfficerId: () => S.userAccounts.powerUser.id,
    offenseType: {
        name: C.offenseTypes.burglary,
        id: 77,
    },
    offenseType2: {
        name: C.offenseTypes.arson,
        id: 33,
    },
    category: {
        name: C.itemCategories.alcohol,
        id: 12,
    },
    category2: {
        name: C.itemCategories.computer,
        id: 108,
    },
    custodyReason: {
        name: C.custodyReason.asset,
        id: 8,
    },
    custodyReason2: {
        name: C.custodyReason.investigation,
        id: 54,
    },
    checkoutReason: {
        name: C.checkoutReasons.court,
        id: 13,
    },
    checkoutReason2: {
        name: C.checkoutReasons.lab,
        id: 39,
    },
    personType: {
        name: C.personTypes.suspect,
        id: 145,
    },
    personType2: {
        name: C.personTypes.victim,
        id: 142,
    },
    race: {
        name: C.races.asian,
        id: 4,
    },
    race2: {
        name: C.races.hispanic,
        id: 7,
    },
    caseCustomForm: {
        name: 'Cypress Case Form',
        id: 32,
        checkboxListId: 'field3231',
        radioButtonListId: 'field3233',
        selectListId: 'field3235',
        number: 'field3223',
        password: 'field3225',
        textbox: 'field3219',
        email: 'field3221',
        textarea: 'field3227',
        checkbox: 'field3229',
        date: 'field3241',
        user: 'field3237',
        person: 'field3239',
    },
    itemCustomForm: {
        name: 'Cypress Item Form',
        id: 33,
        checkboxListId: 'field3291',
        radioButtonListId: 'field3293',
        selectListId: 'field3295',
        number: 'field3283',
        password: 'field3285',
        textbox: 'field3279',
        email: 'field3281',
        textarea: 'field3287',
        checkbox: 'field3289',
        date: 'field3301',
        user: 'field3297',
        person: 'field3299',
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 22,
        startingIndexForViewPermissions: 528,
        get startingIndexForCreatePermissions () {
            return S.QA_1.admin_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.QA_1.admin_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.QA_1.admin_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 23,
        startingIndexForViewPermissions: 573,
        get startingIndexForCreatePermissions () {
            return S.QA_1.blocked_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.QA_1.blocked_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.QA_1.blocked_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 24,
        startingIndexForViewPermissions: 618,
        get startingIndexForCreatePermissions () {
            return S.QA_1.readOnly_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.QA_1.readOnly_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.QA_1.readOnly_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 3,
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 4,
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 5,
    },
};

S.QA_1 = { ...S.QA, ...S.QA_1 };

S.PENTEST = {
    org2: {
        id: 1,
        orgName: 'Tracker HQ',
        officeId: 1,
        officeName: 'Main',
        orgAndOfficeName: 'Tracker HQ - Main',
    },
    // user from Org#2
    org2Admin: {
        id: 39,
        guid: '54f39f56-03d9-eb11-82f2-068f48eb83b1',
        organizationId: 4,
        officeId: 13,
    },
    fieldIds: {
        case: {
            offenseLocation: 29,
            offenseDescription: 30,
            tags: 31,
            offenseDate: 34,
        },
        item: {
            recoveredAt: 20,
            custodyReason: 21,
            recoveredBy: 23,
            make: 24,
            model: 25,
            serialNumber: 26,
            barcodes: 27,
            tags: 28,
            description: 36,
            recoveryDate: 37,
            itemBelongsTo: 38,
            expectedReturnDate: 41,
            actualDisposedDate: 42,
        },
        person: {
            businessName: 9,
            middleName: 10,
            alias: 11,
            dob: 12,
            driverLicense: 13,
            race: 14,
            gender: 15,
            mobilePhone: 16,
            otherPhone: 17,
            deceased: 18,
            juvenile: 19,
            email: 39,
            address: 40,
        },
    },
    caseOfficerId: () => S.userAccounts.powerUser.id,
    offenseType: {
        name: C.offenseTypes.burglary,
        id: 4,
    },
    offenseType2: {
        name: C.offenseTypes.arson,
        id: 2,
    },
    category: {
        name: C.itemCategories.alcohol,
        id: 31,
    },
    category2: {
        name: C.itemCategories.computer,
        id: 26,
    },
    custodyReason: {
        name: C.custodyReason.asset,
        id: 7,
    },
    custodyReason2: {
        name: C.custodyReason.investigation,
        id: 10,
    },
    checkoutReason: {
        name: C.checkoutReasons.court,
        id: 1,
    },
    checkoutReason2: {
        name: C.checkoutReasons.lab,
        id: 11,
    },
    personType: {
        name: C.personTypes.suspect,
        id: 1,
    },
    personType2: {
        name: C.personTypes.victim,
        id: 2,
    },
    race: {
        name: C.races.asian,
        id: 4,
    },
    race2: {
        name: C.races.hispanic,
        id: 7,
    },
    caseCustomForm: {
        name: 'Cypress Case Form',
        id: 396,
        checkboxListId: 'field2836',
        radioButtonListId: 'field2838',
        selectListId: 'field2840',
        number: 'field2828',
        password: 'field2830',
        textbox: 'field2824',
        email: 'field2826',
        textarea: 'field2832',
        checkbox: 'field2834',
        date: 'field2842',
    },
    itemCustomForm: {
        name: 'Cypress Item Form',
        id: 397,
        checkboxListId: 'field2867',
        radioButtonListId: 'field2871',
        selectListId: 'field2873',
        number: 'field2861',
        password: 'field2863',
        textbox: 'field2857',
        email: 'field2859',
        textarea: 'field2865',
        checkbox: 'field2869',
        date: 'field2875',
    },
};

// Sajida's Org
S.PENTEST_1 = {
    newUserAccount: {},
    orgSettings: {
        id: 540,
        name: 'Mobile Test Automation'
    },
    office_1: {
        id: 1026,
        guid: 'd3371b79-3d36-eb11-aa49-062d5b58f56e',
        name: 'Default Office',
        orgAndOfficeName: 'Mobile Test Automation - Default Office',
    },
    office_2: {
        id: 137,
        name: 'Cypress Office 2',
    },
    org2: {
        id: 546,
        orgName: 'Test Automation Org2',
        officeId: 1054,
        officeName: 'Default Office',
        orgAndOfficeName: 'Test Automation Org2 - Default Office',
    },
    users: {
        systemAdminId: 40357,
        orgAdminId: 40379,
        systemAdmin: {
            id: 40357,
            guid: '0cfa7c01-2f2e-ea11-aa3a-062d5b58f56e',
        },
        orgAdmin: {
            id: 40379,
            guid: 'b7ed8cb4-fb36-eb11-aa49-062d5b58f56e',
        },
        org2Admin: {
            id: 40934,
            guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
            organizationId: 546,
            officeId: 1054,
        },
        orgAdmin2: {
            id: 40934,
            guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
        },
        powerUser: {
            id: 40380,
            guid: '7801ce14-fc36-eb11-aa49-062d5b58f56e',
        },
        clpUser: {
            id: 40383,
            guid: '7801ce14-fc36-eb11-aa49-062d5b58f56e',
        },
    },
    locations: [
        {
            id: 256063,
            guid: '241c4475-51ee-eb11-82f3-068f48eb83b1',
            name: 'CypressStorageLoc1',
        },
        {
            id: 252446,
            guid: 'b48b04d7-25a7-eb11-aa4f-062d5b58f56e',
            name: 'root',
        },
        {
            id: 251947,
            guid: 'td42a1a39-0437-eb11-aa49-062d5b58f56e',
            name: 'CypressStorageLoc__2',
        }],
    caseForReport: {
        id: 120799,
    },
    itemForReport: {
        id: 1726599,
        description: 'Item for Automated Tests - DON\'T CHANGE ANYTHING',
    },
    personForReport: {
        id: 105156,
    },
    oldCase: {
        id: 5446732,
        caseNumber: 'Test Case 1',
    },
    recentCase: {
        id: 5446732,
        caseNumber: 'Test Case 1',
    },
    existingItems_1kBarcodes: [],
    person: {
        name: 'Person1',
        fullName: 'Test Person1',
        id: 4667617,
        get organizationId () {
            return S.PENTEST_1.orgSettings.id;
        },
        userId: null,
        guid: '195bb37c-a48c-43e4-9d9b-32bee56fc49d',
        email: 'qa+person1@trackerproducts.com',
    },
    person_2: {
        name: 'Person2',
        fullName: 'Test Person2',
        id: 4667652,
        get organizationId () {
            return S.PENTEST_1.orgSettings.id;
        },
        userId: null,
        guid: '7447c6a0-db33-4cc2-9744-a5e23ce53c1c',
        email: 'qa+person2@trackerproducts.com',
    },
    get recoveredById () {
        return S.PENTEST_1.person.id;
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 2051,
        startingIndexForViewPermissions: 59726,
        get startingIndexForCreatePermissions () {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 2052,
        startingIndexForViewPermissions: 59771,
        get startingIndexForCreatePermissions () {
            return S.PENTEST_1.blocked_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.PENTEST_1.blocked_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.PENTEST_1.blocked_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 2053,
        startingIndexForViewPermissions: 59816,
        get startingIndexForCreatePermissions () {
            return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 95,
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 96,
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 97,
    },
};

// Sumejja's Org
S.PENTEST_2 = {
    newUserAccount: {},
    orgSettings: {
        id: 541,
        name: 'Web Test Automation'
    },
    office_1: {
        id: 1026,
        guid: 'd3371b79-3d36-eb11-aa49-062d5b58f56e',
        name: 'Cypress Office 1',
        orgAndOfficeName: 'Web Test Automation - Cypress Office 1',
    },
    office_2: {
        id: 137,
        name: 'Cypress Office 2',
    },
    org2: {
        id: 546,
        orgName: 'Test Automation Org2',
        officeId: 1054,
        officeName: 'Default Office',
        orgAndOfficeName: 'Test Automation Org2 - Default Office',
    },
    users: {
        systemAdminId: 40357,
        orgAdminId: 40379,
        systemAdmin: {
            id: 40357,
            guid: '0cfa7c01-2f2e-ea11-aa3a-062d5b58f56e',
        },
        orgAdmin: {
            id: 40379,
            guid: 'b7ed8cb4-fb36-eb11-aa49-062d5b58f56e',
        },
        org2Admin: {
            id: 40934,
            guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
            organizationId: 546,
            officeId: 1054,
        },
        orgAdmin2: {
            id: 40934,
            guid: '10589878-e7bb-eb11-aa4f-062d5b58f56e',
        },
        powerUser: {
            id: 40380,
            guid: '7801ce14-fc36-eb11-aa49-062d5b58f56e',
        },
        clpUser: {
            id: 40383,
            guid: '7801ce14-fc36-eb11-aa49-062d5b58f56e',
        },
    },
    locations: [
        {
            id: 256063,
            guid: '241c4475-51ee-eb11-82f3-068f48eb83b1',
            name: 'CypressStorageLoc1',
        },
        {
            id: 252446,
            guid: 'b48b04d7-25a7-eb11-aa4f-062d5b58f56e',
            name: 'root',
        },
        {
            id: 251947,
            guid: 'td42a1a39-0437-eb11-aa49-062d5b58f56e',
            name: 'CypressStorageLoc__2',
        }],
    caseForReport: {
        id: 120799,
    },
    itemForReport: {
        id: 1726599,
        description: 'Item for Automated Tests - DON\'T CHANGE ANYTHING',
    },
    personForReport: {
        id: 105156,
    },
    oldCase: {
        id: 5446732,
        caseNumber: 'Test Case 1',
    },
    recentCase: {
        id: 5446732,
        caseNumber: 'Test Case 1',
    },
    existingItems_1kBarcodes: [],
    person: {
        name: 'Person1',
        fullName: 'Test Person1',
        id: 4667617,
        get organizationId () {
            return S.PENTEST_1.orgSettings.id;
        },
        userId: null,
        guid: '195bb37c-a48c-43e4-9d9b-32bee56fc49d',
        email: 'qa+person1@trackerproducts.com',
    },
    person_2: {
        name: 'Person2',
        fullName: 'Test Person2',
        id: 4667652,
        get organizationId () {
            return S.PENTEST_1.orgSettings.id;
        },
        userId: null,
        guid: '7447c6a0-db33-4cc2-9744-a5e23ce53c1c',
        email: 'qa+person2@trackerproducts.com',
    },
    get recoveredById () {
        return S.PENTEST_1.person.id;
    },
    admin_permissionGroup: {
        name: 'Cypress - ADMIN',
        id: 2051,
        startingIndexForViewPermissions: 59726,
        get startingIndexForCreatePermissions () {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.PENTEST_1.admin_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    blocked_permissionGroup: {
        name: 'Cypress - Blocked',
        id: 2052,
        startingIndexForViewPermissions: 59771,
        get startingIndexForCreatePermissions () {
            return S.PENTEST_1.blocked_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.PENTEST_1.blocked_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.PENTEST_1.blocked_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    readOnly_permissionGroup: {
        name: 'Cypress - ReadOnly',
        id: 2053,
        startingIndexForViewPermissions: 59816,
        get startingIndexForCreatePermissions () {
            return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 14;
        },
        get startingIndexForUpdatePermissions () {
            return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 31;
        },
        get startingIndexForDeletePermissions () {
            return S.PENTEST_1.readOnly_permissionGroup.startingIndexForViewPermissions + 40;
        },
    },
    admin_userGroup: {
        name: 'Cypress Admin Group',
        id: 95,
    },
    blocked_userGroup: {
        name: 'Cypress Blocked Group',
        id: 96,
    },
    readOnly_userGroup: {
        name: 'Cypress ReadOnly Group',
        id: 97,
    },
};

S.PENTEST_1 = { ...S.PENTEST, ...S.PENTEST_1 };

S.PENTEST_2 = { ...S.PENTEST, ...S.PENTEST_2 };

S.setEnvironmentProperties = function (orgNum) {
    let orgNumber = orgNum || 1;

    S.selectedEnvironment = S[`${S.domain}_${orgNumber}`];
    console.log('Org Number: ' + orgNumber);
    console.log('Selected environment: ' + JSON.stringify(S.selectedEnvironment));
    return S.selectedEnvironment;
};

S.setEnvironmentProperties(S.orgNum);

S.chainOfCustody = {
    newItemEntry: {
        type: 'in',
        date: helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly),
        issuedTo: 'New Item Entry',
        organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
        storageLocation: S.selectedEnvironment.locations[0].name,
        Notes: 'Item entered into system.',
    },
    checkedIn: {
        type: 'in',
        date: helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly),
        issuedTo: 'New Item Entry',
        organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
        storageLocation: S.selectedEnvironment.locations[0].name,
        Notes: 'Item entered into system.',
    },
    checkedOut: {
        type: 'out',
        date: helper.getCurrentDateInCurrentFormat(C.currentDateTimeFormat.dateOnly),
        checkoutReason: S.selectedEnvironment.checkoutReason.name,
        notes: helper.getRandomNo(),
        expectedReturnDate: helper.tomorrowsDate(C.currentDateTimeFormat),
        issuedTo: S.selectedEnvironment.person.name,
        organization: S.selectedEnvironment.orgSettings.name + ', ' + S.selectedEnvironment.office_1.name,
    },
};

S.gmailAccount = {
    email: 'qa@trackerproducts.com',
    password: 'xJS77Mc6',
};

S.userAccounts = accounts.getTestAccounts(S.selectedEnvironment, S.orgNum);
S.getUserData = function (userAcc) {
    return Object.assign({}, userAcc);
};

const Log = {
    reset: '\x1b[0m',
    // Foreground (text) colors
    fg: {
        black: '30',
        red: '31',
        green: '32',
        yellow: '33',
        blue: '34',
        magenta: '35',
        cyan: '36',
        white: '37',
        crimson: '38',
    },
    // Background colors
    bg: {
        black: '40',
        red: '41',
        green: '42',
        yellow: '43',
        blue: '44',
        magenta: '45',
        cyan: '46',
        white: '47',
        crimson: '48',
    },
};

S.log = (color, text, backgroundColor) => {
   console.log(`\x1b[${Log.fg[color]};${Log.bg[backgroundColor]};1m`, text);
    console.log("\x1b[0m")
};


module.exports = S;
