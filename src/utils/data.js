const api = require('../../api-utils/api-spec.js');
const D = exports;
const S = require('./settings.js');
const C = require('./constants.js');
const helper = require('./helper.js');

D.setNewRandomNo = function () {
    return helper.setNewRandomNo();
};

D.getRandomNo = function () {
    return helper.getRandomNo();
};

D.randomNo = D.getRandomNo();

D.getCurrentDateAndRandomNumber = function (randomNumberLenght) {
    return helper.mediumDate + '_' + helper.getRandomNo(randomNumberLenght);
};

D.getNewCaseData = function (caseNumber) {
    // api.cases.get_most_recent_case();
    caseNumber = caseNumber || this.setNewRandomNo();

    D.newCase = {
        caseNumber: caseNumber,
        createdDate: helper.setDateAndTime(C.currentDateTimeFormat),
        createdDateIsoFormat: helper.setIsoDateAndTime(),
        updateMadeBy: S.userAccounts.orgAdmin.name,
        submittedById: S.userAccounts.orgAdmin.id,
        submittedByName: `${S.userAccounts.orgAdmin.firstName} ${S.userAccounts.orgAdmin.lastName}`,
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        offenseDate: helper.setDateAndTime(C.currentDateFormat),
        offenseDateEditMode: helper.setDateAndTime(C.currentDateTimeFormat, 2020, 4, 15, 14, 18),
        offenseDateIsoFormat: helper.setIsoDateAndTime(2020, 4, 15, 14, 18),
        reviewDate: helper.getDateInFuture(100, C.currentDateFormat),
        reviewDateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2029, 5, 11, 15, 25),
        reviewDateIsoFormat: helper.setIsoDateAndTime(2029, 5, 11, 15, 25),
        status: 'Open',
        active: true,
        offenseDescription: caseNumber,
        offenseTypeId: S.selectedEnvironment.offenseType.id,
        offenseType: S.selectedEnvironment.offenseType.name,
        formData: [],
        tags: [{
            tagModelId: -1,
            name: 'AutomationTest',
            color: '#4b749b',
        }],
        reviewDateNotes: 'reviewNotes_' + caseNumber,
        checkInProgress: false,
        caseOfficerId: S.userAccounts.orgAdmin.id,
        caseOfficer: S.userAccounts.orgAdmin.email,
        caseOfficerName: S.userAccounts.orgAdmin.name,
        caseOfficerFName: S.userAccounts.orgAdmin.firstName,
        caseOfficerLName: S.userAccounts.orgAdmin.lastName,
        caseOfficerFullName: S.userAccounts.orgAdmin.firstName + ' ' + S.userAccounts.orgAdmin.lastName,
        officerNameAndEmail: S.userAccounts.orgAdmin.name + ' (' + S.userAccounts.orgAdmin.email + ')',
        caseOfficerObject :{
            fullName: S.userAccounts.orgAdmin.name,
            firstName: S.userAccounts.orgAdmin.firstName,
            nameAndEmail: S.userAccounts.orgAdmin.name + ' (' + S.userAccounts.orgAdmin.email + ')',
        },
        offenseLocation: 'Sarajevo, Bosnia and Herzegovina',
        userGuid: S.userAccounts.orgAdmin.guid,
        officeGuid: S.selectedEnvironment.office_1.guid,
        officeName: S.selectedEnvironment.office_1.name,
        custom_textbox: 'custom Textbox',
        custom_email: 'customEmail@email.com',
        custom_number: '2',
        custom_password: 'Test123',
        custom_textarea: 'custom Textarea',
        custom_checkbox: true,
        custom_checkboxListOption: 'Option 1',
        custom_radiobuttonListOption: 'Option 2',
        custom_selectListOption: 'Option 3',
        custom_date: helper.setDateAndTime(C.currentDateTimeFormat),
        custom_dateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode),
        orgName: S.selectedEnvironment.orgSettings.name,
    };

    console.log('Setting new case data ' + JSON.stringify(D.newCase));

    return D.newCase;
};

D.getEditedCaseData = function (caseNumber) {
    // api.cases.get_most_recent_case();
    caseNumber = caseNumber ? caseNumber + '_edited' : D.getRandomNo() + '_edited';

    D.editedCase = {
        caseNumber: caseNumber,
        offenseDate: helper.setDateAndTime(C.currentDateTimeFormat, 2021, 2, 3, 15, 25),
        offenseDateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2021, 2, 3, 15, 25),
        reviewDate: helper.setDateAndTime(C.currentDateTimeFormat, 2028, 4, 5, 16, 26),
        reviewDateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2028, 4, 5, 16, 26),
        updateMadeBy: S.userAccounts.orgAdmin.name.replace(/\s/g, ''),
        submittedById: S.userAccounts.orgAdmin.id,
        submittedByName: `${S.userAccounts.orgAdmin.firstName} ${S.userAccounts.orgAdmin.lastName}`,
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        officeName: S.selectedEnvironment.office_1.name,
        officeGuid: S.selectedEnvironment.office_1.guid,
        officeId: S.selectedEnvironment.office_1.id,
        status: 'Open',
        active: true,
        offenseDescription: caseNumber,
        offenseTypeId: S.selectedEnvironment.offenseType2.id,
        offenseType: S.selectedEnvironment.offenseType2.name,
        formData: [],
        tags: [{
            tagModelId: -1,
            name: 'cold_case',
            color: '#4b749b',
        }],
        reviewDateNotes: 'reviewNotes_EDITED_' + caseNumber,
        checkInProgress: false,
        createdDate: S.currentDate,
        caseOfficerId: S.userAccounts.powerUser.id,
        caseOfficer: S.userAccounts.powerUser.email,
        caseOfficerName: S.userAccounts.powerUser.name.replace(/\s/g, ''),
        caseOfficerFName: S.userAccounts.powerUser.firstName,
        caseOfficerLName: S.userAccounts.powerUser.lastName,
        offenseLocation: 'Kentucky, USA',
        userGuid: S.userAccounts.powerUser.guid,
        custom_textbox: 'edited custom Textbox',
        custom_email: 'editedCustomEmail@email.com',
        custom_number: '333',
        custom_password: 'Test12345',
        custom_textarea: 'edited custom Textarea',
        custom_checkbox: false,
        custom_checkboxListOption: 'Option 2',
        custom_radiobuttonListOption: 'Option 3',
        custom_selectListOption: 'Option 1',
        custom_date: helper.setDateAndTime(C.currentDateTimeFormat, 2028, 6, 3, 15, 25),
        custom_dateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2028, 6, 3, 15, 25),
    };
    return D.editedCase;
};

D.getNewItemData = function (specificCaseObject, locationObject, newPerson) {
    let person = (newPerson && newPerson.id !== '') ? newPerson : S.selectedEnvironment.person;
    locationObject = locationObject || S.selectedEnvironment.locations[0];
    specificCaseObject = specificCaseObject || S.selectedEnvironment.oldCase;
    let randomNo = D.getRandomNo();

    D.newItem = {
        primaryCaseId: specificCaseObject.id,
        caseNumber: specificCaseObject.caseNumber,
        description: 'description_' + D.getRandomNo(),
        status: C.itemStatuses.checkedIn,
        updateMadeBy: S.userAccounts.orgAdmin.lastName,
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        active: false,
        categoryId: S.selectedEnvironment.category.id,
        category: S.selectedEnvironment.category.name,
        recoveredById: person.id,
        recoveredBy: person.email,
        recoveredByName: person.name,
        recoveredByGuid: person.guid,
        custodianGuid: person.guid,
        submittedByGuid: S.userAccounts.orgAdmin.guid,
        submittedById: S.userAccounts.orgAdmin.id,
        submittedByName: `${S.userAccounts.orgAdmin.firstName} ${S.userAccounts.orgAdmin.lastName}`,
        userGuid: S.userAccounts.orgAdmin.guid,
        submittedBy: S.userAccounts.orgAdmin.lastName,
        recoveryLocation: 'Chicago, IL, USA',
        locationId: locationObject.id,
        location: locationObject.name,
        locationGuid: locationObject.guid,
        recoveryDate: helper.setDateAndTime(C.currentDateTimeFormat, 2020, 3, 5, 17, 27),
        recoveryDate_withoutTime: helper.setDate(C.currentDateTimeFormat.dateOnly, 2020, 3, 5),
        recoveryDate_withoutTime_editMode: helper.setDate(C.currentDateTimeFormat.dateOnly.editMode, 2020, 3, 5),
        recoveryDateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2020, 3, 5, 17, 27),
        recoveryDateInIsoFormat: helper.setIsoDateAndTime(2020, 3, 5, 17, 27),
        createdDate: helper.setDateAndTime(C.currentDateTimeFormat),
        officeGuid: S.selectedEnvironment.office_1.guid,
        formData: [],
        cases: [],
        tags: [{
            tagModelId: -1,
            name: 'sensitive_item_info',
            color: '#4b749b',
        }],
        people: [person],
        make: 'make_' + randomNo,
        model: 'model_' + randomNo,
        serialNumber: 'serialNo_' + randomNo,
        custodyReasonId: S.selectedEnvironment.custodyReason.id,
        custodyReason: S.selectedEnvironment.custodyReason.name,
        officeName: S.selectedEnvironment.office_1.name,
        peopleIds: [person.id],
        custom_textbox: 'custom Textbox',
        custom_email: 'customEmail@email.com',
        custom_number: '2',
        custom_password: 'Test123',
        custom_textarea: 'custom Textarea',
        custom_checkbox: true,
        custom_checkboxListOption: 'Option 1',
        custom_radiobuttonListOption: 'Option 2',
        custom_selectListOption: 'Option 3',
        custom_date: helper.setDateAndTime(C.currentDateTimeFormat),
        custom_dateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode),
    };

    console.log('Setting new item data ' + JSON.stringify(D.newItem));

    return D.newItem;
};

D.setDateOnlyValues = function (dateOrDateTimeFormat) {
    D.newItem.recoveryDate = helper.setDate(dateOrDateTimeFormat);
    D.newItem.recoveryDateEditMode = helper.setDate(dateOrDateTimeFormat.dateOnly.editMode);
    D.newCase.offenseDate = helper.setDate(dateOrDateTimeFormat.dateOnly.editMode);
    D.newCase.offenseDateEditMode = helper.setDate(dateOrDateTimeFormat.dateOnly.editMode);
};

D.getEditedItemData = function (specificCaseObject, locationObject, newPerson) {
    let person = (newPerson && newPerson.id !== '') ? newPerson : S.selectedEnvironment.person_2;
    locationObject = locationObject || S.selectedEnvironment.locations[0];
    specificCaseObject = specificCaseObject || S.selectedEnvironment.oldCase;
    let randomNo = D.getRandomNo();

    D.editedItem = {
        updateMadeBy: S.userAccounts.orgAdmin.name.replace(/\s/g, ''),
        submittedById: S.userAccounts.orgAdmin.id,
        submittedByName: `${S.userAccounts.orgAdmin.firstName} ${S.userAccounts.orgAdmin.lastName}`,
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        description: 'desc_edited' + randomNo,
        status: C.itemStatuses.checkedIn,
        active: true,
        categoryId: S.selectedEnvironment.category2.id,
        category: S.selectedEnvironment.category2.name,
        recoveredById: person.id,
        recoveredBy: person.email,
        recoveredByName: person.name,
        recoveryLocation: 'Kentucky, USA',
        locationId: locationObject.id,
        location: locationObject.name,
        locationGuid: locationObject.guid,
        recoveryDate: helper.setDateAndTime(C.currentDateTimeFormat, 2021, 5, 8, 15, 25),
        recoveryDateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2021, 5, 8, 15, 25),
        createdDate: helper.setDateAndTime(C.currentDateTimeFormat),
        submittedByGuid: S.userAccounts.orgAdmin.guid,
        userGuid: S.userAccounts.orgAdmin.guid,
        submittedBy: S.userAccounts.orgAdmin.name,
        officeGuid: S.selectedEnvironment.office_1.guid,
        recoveredByGuid: person.guid,
        returnedByGuid: person.guid,
        custodianGuid: person.guid,
        formData: [],
        cases: [],
        tags: [{
            tagModelId: -1,
            name: 'critical_evidence',
            color: '#4b749b',
        }],
        make: 'make_edited' + randomNo,
        model: 'model_edited' + randomNo,
        serialNumber: 'serialNo_edited' + randomNo,
        primaryCaseId: specificCaseObject.id,
        caseNumber: specificCaseObject.caseNumber,
        custodyReasonId: S.selectedEnvironment.custodyReason2.id,
        custodyReason: S.selectedEnvironment.custodyReason2.name,
        people: [person],
        peopleIds: [person.id],
        peopleGuids: [person.guid],
        peopleNames: [person.fullName],
        custom_textbox: 'EDITED custom Textbox',
        custom_email: 'editedCustomEmail@email.com',
        custom_number: '3',
        custom_password: 'Test1234',
        custom_textarea: 'edited custom Textarea',
        custom_checkbox: false,
        custom_checkboxListOption: 'Option 2',
        custom_radiobuttonListOption: 'Option 1',
        custom_selectListOption: 'Option 32',
        custom_date: helper.setDateAndTime(C.currentDateTimeFormat, 2028, 8, 3, 15, 25),
        custom_dateEditMode: helper.setDateAndTime(C.currentDateTimeFormat.editMode, 2028, 8, 3, 15, 25),
    };

    return D.editedItem;
};

D.getNewPersonData = function (caseObject) {
    let randomValue = helper.setNewRandomString();
    caseObject = caseObject || S.selectedEnvironment.oldCase;

    D.newPerson = {
        id: 0,
        updateMadeBy: S.userAccounts.orgAdmin.lastName,
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        businessName: randomValue,
        firstName: 'Fn' + randomValue,
        middleName: 'Mn' + randomValue,
        lastName: 'Ln' + randomValue,
        alias: 'Al' + randomValue,
        mobilePhone: helper.format_as_phone_number(helper.getRandomNo(10)),
        otherPhone: helper.format_as_phone_number(helper.getRandomNo(10)),
        email: 'qa+' + randomValue + '@trackerproducts.com',
        driverLicence: randomValue,
        race: S.selectedEnvironment.race.name,
        gender: 'Male',
        genderId: 3,
        raceId: S.selectedEnvironment.race.id,
        dateOfBirthForApi: '1970-05-10T23:00:00.000Z',
        dateOfBirth: helper.setDate(C.currentDateFormat, 1970, 5, 11),
        dateOfBirthEditMode: helper.setDate(C.currentDateFormat.editMode, 1970, 5, 11),
        active: false,
        deceased: true,
        juvenile: true,
        notes: [],
        addresses: [],
        formData: [],
        createdDate: S.currentDate,
        caseNumber: caseObject.caseNumber,
        personType: S.selectedEnvironment.personType.name,
        personTypeId: S.selectedEnvironment.personType.id,
        custom_textbox: 'custom Textbox',
        custom_email: 'customEmail@email.com',
        custom_number: '2',
        custom_password: 'Test123',
        custom_textarea: 'custom Textarea',
        custom_checkbox: true,
        custom_checkboxListOption: 'Option 1',
        custom_radiobuttonListOption: 'Option 2',
        custom_selectListOption: 'Option 3',
        custom_date: 'Sep 10, 2020',
    };

    D.newPersonAddress = {
        id: 0,
        date: '2020-04-11T05:19:49.040Z',
        entityId: 0,
        line1: 'AddressLine1',
        line2: 'AddressLine2',
        city: 'AddressCity',
        zip: 'ZIP_123',
        stateId: C.states.Kentucky.id,
        state: C.states.Kentucky.name,
        addressTypeId: C.addressTypes.home.id,
        addressType: C.addressTypes.home.name,
        countryId: 231,
        country: 'United States',
        isDefaultAddress: true,
    };

    return D.newPerson;
};

D.getEditedPersonData = function () {
    let randomValue = helper.setNewRandomString() + '_edited';

    D.editedPerson = {
        id: 0,
        updateMadeBy: S.userAccounts.orgAdmin.name.replace(/\s/g, ''),
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        businessName: randomValue,
        firstName: 'Fn' + randomValue,
        middleName: 'Mn' + randomValue,
        lastName: 'Ln' + randomValue,
        alias: 'Al' + randomValue,
        mobilePhone: helper.format_as_phone_number(randomValue),
        otherPhone: helper.format_as_phone_number(randomValue),
        email: 'qa+' + randomValue + '_edited@trackerproducts.com',
        driverLicence: randomValue,
        race: S.selectedEnvironment.race2.name,
        raceId: S.selectedEnvironment.race2.id,
        gender: 'Female',
        genderId: 2,
        dateOfBirth: helper.setDate(C.currentDateFormat, 1981, 6, 10),
        active: true,
        deceased: false,
        juvenile: false,
        notes: [],
        addresses: [],
        formData: [],
        caseNumber: S.selectedEnvironment.oldCase.caseNumber,
        personType: S.selectedEnvironment.personType2.name,
        personTypeId: S.selectedEnvironment.personType2.id,
        custom_textbox: 'EDITED custom Textbox',
        custom_email: 'editedCustomEmail@email.com',
        custom_number: '3',
        custom_password: 'Test1234',
        custom_textarea: 'edited custom Textarea',
        custom_checkbox: false,
        custom_checkboxListOption: 'Option 2',
        custom_radiobuttonListOption: 'Option 1',
        custom_selectListOption: 'Option 32',
        custom_date: S.tomorrowsDate,
    };

    D.editedPersonAddress = {
        id: 0,
        date: '2020-04-11T05:19:49.040Z',
        entityId: 0,
        line1: '',
        line2: '',
        city: '',
        zip: '',
        stateId: '',
        addressTypeId: '',
        countryId: 231,
        isDefaultAddress: true,
    };

    return D.editedPerson;
};

D.getNewUserData = function (officeId) {

    let randomNo = helper.setNewRandomString();
    officeId = officeId || S.selectedEnvironment.office_1.id;

    D.newUser = {
        firstName: randomNo,
        lastName: 'LastN',
        email: 'qa+' + randomNo + '@trackerproducts.com',
        emailEncoded: 'qa+' + randomNo + '@trackerproducts.&#173;com',
        office: S.selectedEnvironment.office_1.name,
        officeId: officeId,
        active: true,
        password: 'Test12345.',
    };

    console.log('Setting new case data ' + JSON.stringify(D.newCase));

    return D.newUser;
};

D.getEditedUserData = function (caseNumber) {
    // api.cases.get_most_recent_case();
    caseNumber = caseNumber ? caseNumber + '_edited' : D.getRandomNo() + '_edited';

    D.editedCase = {
        caseNumber: caseNumber,
        offenseDate: 'Aug 18, 2020',
        reviewDate: 'Aug 18, 2027',
        updateMadeBy: S.userAccounts.orgAdmin.name.replace(/\s/g, ''),
        submittedById: S.userAccounts.orgAdmin.id,
        submittedByName: `${S.userAccounts.orgAdmin.firstName} ${S.userAccounts.orgAdmin.lastName}`,
        updateDate: helper.setDate(C.currentDateTimeFormat.dateOnly),
        officeName: S.selectedEnvironment.office_1.name,
        officeGuid: S.selectedEnvironment.office_1.guid,
        officeId: S.selectedEnvironment.office_1.id,
        status: 'Open',
        active: true,
        offenseDescription: caseNumber,
        offenseTypeId: S.selectedEnvironment.offenseType2.id,
        offenseType: S.selectedEnvironment.offenseType2.name,
        formData: [],
        tags: [{
            tagModelId: -1,
            name: 'cold_case',
            color: '#4b749b',
        }],
        reviewDateNotes: 'reviewNotes_EDITED_' + caseNumber,
        checkInProgress: false,
        createdDate: S.currentDate,
        caseOfficerId: S.userAccounts.powerUser.id,
        caseOfficer: S.userAccounts.powerUser.email,
        caseOfficerName: S.userAccounts.powerUser.name.replace(/\s/g, ''),
        caseOfficerFName: S.userAccounts.powerUser.firstName,
        caseOfficerLName: S.userAccounts.powerUser.lastName,
        offenseLocation: 'Kentucky, USA',
        userGuid: S.userAccounts.powerUser.guid,
        custom_textbox: 'edited custom Textbox',
        custom_email: 'editedCustomEmail@email.com',
        custom_number: '333',
        custom_password: 'Test12345',
        custom_textarea: 'edited custom Textarea',
        custom_checkbox: false,
        custom_checkboxListOption: 'Option 2',
        custom_radiobuttonListOption: 'Option 3',
        custom_selectListOption: 'Option 1',
        custom_date: 'Aug 15, 2020',
    };
    return D.editedCase;
};

D.getCaseValuesOnGrid = function (invisibleColumns) {
    let newCase = Object.assign({}, D.newCase);

    invisibleColumns.forEach(invisibleColumn => {
        dataObject.invisibleColumns = null;
    });
};

D.removeValuesForDisabledCaseFields = function (enabledFields) {

    let dataObjects = [D.newCase, D.editedCase];

    let caseFields = [
        'offenseLocation',
        'offenseDescription',
        'offenseDate',
        'offenseDateEditMode',
        //  'tags'
    ];

    dataObjects.forEach(caseObject => {

        caseFields.forEach(field => {
            if (fieldIsDisabled(enabledFields, C.caseFields[field])) caseObject[field] = null;
        });
        if (fieldIsDisabled(enabledFields, C.caseFields.tags)) caseObject.tags[0].name = null;
    });
};

let fieldIsDisabled = function (enabledFields, field) {
    return !enabledFields || (enabledFields && !enabledFields.includes(field));
};

D.removeValuesForDisabledItemFields = function (enabledFields) {

    let dataObjects = [D.newItem, D.editedItem];

    let itemFields = [
        'recoveryDate',
        'recoveryDateEditMode',
        'recoveredBy',
        'recoveryLocation',
        'recoveredByName',
        'recoveredById',
        'custodyReason',
        'custodyReasonId',
        'make',
        'model',
        'serialNumber',
        'barcodes',
        'description',
        'people',
        'peopleIds',
    ];

    dataObjects.forEach(itemObject => {

        itemFields.forEach(field => {
            if (fieldIsDisabled(enabledFields, C.itemFields[field])) itemObject[field] = null;
        });
        if (fieldIsDisabled(enabledFields, C.itemFields.tags)) itemObject.tags[0].name = null;
    });
};

D.removeValuesForDisabledPersonFields = function (enabledFields) {

    let dataObjects = [D.newPerson, D.editedPerson];

    let personFields = [
        'businessName',
        'middleName',
        'alias',
        'dateOfBirth',
        'driverLicence',
        'race',
        'gender',
        'mobilePhone',
        'otherPhone',
        'deceased',
        'juvenile',
        'email',
        'addresses',
    ];

    dataObjects.forEach(personObject => {

        personFields.forEach(field => {
            if (fieldIsDisabled(enabledFields, C.personFields[field])) personObject[field] = null;
        });
    });
};

D.getCaseDataWithReducedFields = function (arrayOfEnabledFields) {
    D.getNewCaseData();
    D.getEditedCaseData();
    D.removeValuesForDisabledCaseFields(arrayOfEnabledFields);
    return D.newItem;
};

D.getItemDataWithReducedFields = function (specificCaseObject, arrayOfEnabledFields) {
    D.getNewItemData(specificCaseObject);
    D.getEditedItemData(specificCaseObject);
    D.removeValuesForDisabledItemFields(arrayOfEnabledFields);
};

D.getPersonDataWithReducedFields = function (specificCaseObject, arrayOfEnabledFields) {
    D.getNewPersonData(specificCaseObject);
    D.getEditedPersonData(specificCaseObject);
    D.removeValuesForDisabledPersonFields(arrayOfEnabledFields);
};

D.generateNewDataSet = function (withReducedFields = false) {
    D.setNewRandomNo();
    S.getCurrentDate();
    // api.cases.get_most_recent_case();
    // api.cases.get_old_case_data(S.selectedEnvironment.oldCase.id);

    D.getNewCaseData();
    D.getEditedCaseData();

    D.getNewItemData();
    D.getEditedItemData();

    D.getNewPersonData();
    D.getEditedPersonData();

    if (withReducedFields) {
        D.removeValuesForDisabledCaseFields();
        D.removeValuesForDisabledItemFields();
        D.removeValuesForDisabledPersonFields();
    }
};

D.setNewRandomNo();
D.getRandomNo();

D.getDataForMultipleCases = function (numberOfCases) {

    for (let i = 1; i < numberOfCases + 1; i++) {
        D['case' + i] = Object.assign({}, D.getNewCaseData());
    }
};

D.currentDateAndRandomNumber = helper.mediumDate + '_' + helper.getRandomNo(3);

D.getStorageLocationData = function (locationSuffix, parentId = null, canStore = true, isActive = true) {

    return D['newLocation' + locationSuffix] = [{
        'name': D.currentDateAndRandomNumber + '_' + locationSuffix,
        'active': isActive,
        'parentId': parentId,
        'canStoreHere': canStore,
    }];
};

module.exports = D;
