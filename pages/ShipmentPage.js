export default class Shipmentpage {

    constructor(page) {
        this.page = page;
        this.txtBoxFirstName = page.locator("#firstNameInput");
        this.txtBoxLastName = page.locator("#lastNameInput");
        this.txtAddress = page.locator("#addressLine1Input");
        this.txtBoxProvince = page.locator("#provinceInput");
        this.txtBoxPostalCode = page.locator("#postCodeInput");
        this.btnSubmit = page.locator("#checkout-shipping-continue");
        this.txtConfirmationMsg = page.locator("#confirmation-message");
    }

    async fillShipmentDetails(firstNameInput, lastNameInput, addressLine1Input, provinceInput, postCodeInput) {

        await this.txtBoxFirstName.fill(firstNameInput);
        await this.txtBoxLastName.fill(lastNameInput);
        await this.txtAddress.fill(addressLine1Input);
        await this.txtBoxProvince.fill(provinceInput);
        await this.txtBoxPostalCode.fill(postCodeInput);

        // await this.txtBoxFirstName.fill(dataset.firstNameInput);
        // await this.txtBoxLastName.fill(dataset.lastNameInput);
        // await this.txtAddress.fill(dataset.addressLine1Input);
        // await this.txtBoxProvince.fill(dataset.provinceInput);
        // await this.txtBoxPostalCode.fill(dataset.postCodeInput);

    }

    async submit() {
        await this.btnSubmit.click();
        console.log(await this.txtConfirmationMsg.textContent());
    }


}