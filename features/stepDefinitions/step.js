import {Given,When,Then} from '@cucumber/cucumber'
import LoginPage from '../../pages/LoginPage.js';
import HomePage from '../../pages/HomePage.js';
import Cartpage from '../../pages/CartPage.js';
import Shipmentpage from '../../pages/ShipmentPage.js';



Given('login to application',{timeout:100*1000},async function () {
  const objLoginPage = new LoginPage(this.page);
  await objLoginPage.navigateToApplication();
  await objLoginPage.login();
  });

  When('add to cart {string}', async function (itemName) {
    const objHomepage = new HomePage(this.page);
    const objCartpage = new Cartpage(this.page);
    await objHomepage.selectItem(itemName);
    await objCartpage.checkout();
  });


  When('add shipment details', async function () {
    const objShipmentpage = new Shipmentpage(this.page);
    await objShipmentpage.fillShipmentDetails();

  });

  When('add shipment details with {string},{string},{string},{string},{string}', async function (firstNameInput, lastNameInput, addressLine1Input, provinceInput, postCodeInput) {
    const objShipmentpage = new Shipmentpage(this.page);
    await objShipmentpage.fillShipmentDetails(firstNameInput, lastNameInput, addressLine1Input, provinceInput, postCodeInput);
  });

  Then('validate order is placed successfully', async function () {
    const objShipmentpage = new Shipmentpage(this.page);
    await objShipmentpage.submit();
  });