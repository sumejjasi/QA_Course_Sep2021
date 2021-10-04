import LoginPage from './login-page';
import BasePage from './base-page';
import PageTemplate from "./page-template";
import Menu from "./menu";
import UsersPage from "./users-page";
import GiftCardPage from "./gift-card-page";
import InventoryPage from "./inventory-page";
import ContactsPage from "./contacts-page";
import ProvidersPage from "./service-providers-page";

module.exports = {
    app: new BasePage(),
    template: new PageTemplate(),
    login: new LoginPage(),
    menu: new Menu(),
    users: new UsersPage(),
    giftCard: new GiftCardPage(),
    inventory: new InventoryPage(),
    contacts: new ContactsPage(),
    providers: new ProvidersPage()

}
