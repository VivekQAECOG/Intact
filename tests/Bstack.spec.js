import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Cartpage from '../pages/CartPage';
import Shipmentpage from '../pages/ShipmentPage';

test("Login Browser Fixture", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    

    const objLoginPage = new LoginPage(page);
    const objHomepage = new HomePage(page);
    const objCartpage = new Cartpage(page);
    const objShipmentpage = new Shipmentpage(page);

    await objLoginPage.navigateToApplication();

    await objLoginPage.login();

    await objHomepage.selectItem();

    await objCartpage.checkout();

    await objShipmentpage.fillShipmentDetails();

    await objShipmentpage.submit();

})