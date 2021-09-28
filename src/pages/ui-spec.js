import LoginPage from './login-page';
import AddCasePage from './add-case-page';
import BasePage from './base-page';
import PageTemplate from "./page-template";

module.exports = {
    app: new BasePage(),
    template: new PageTemplate(),
    login: new LoginPage(),
}
