export default class Cartpage {

    constructor(page) {

        this.btnCheckout = page.locator(".buy-btn");

    }

    async checkout() {

        await this.btnCheckout.click();

    }


}