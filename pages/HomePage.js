import { assert } from 'console';
// import dataJson from '../utils/data.json' assert { type: 'json' };;
// const dataset = JSON.parse(JSON.stringify(dataJson));
import Resuable from '../utils/Reusable.js';


export default class HomePage {

    constructor(page) {
        this.page = page;
        this.listItemTitle = page.locator(".shelf-item__title");
        this.listBuyBtn = page.locator(".shelf-item__buy-btn");
    }

    async selectItem(itemName) {


        const objResuable = new Resuable(this.page);

        await objResuable.waitTillnetworkidle();

        // await this.page.waitForLoadState('networkidle');

        const n = await this.listItemTitle.count();

        for (let i = 0; i < n; i++) {
            console.log(await this.listItemTitle.nth(i).textContent());
            if (await this.listItemTitle.nth(i).textContent() == itemName) {
                console.log(await this.listItemTitle.nth(i).textContent()),
                    this.listBuyBtn.nth(i).click();
                    objResuable.waitTillnetworkidle();
                // await this.page.waitForLoadState('networkidle');
            }

        }

    }

}

