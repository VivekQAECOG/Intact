
import { chromium, firefox, webkit} from 'playwright';
import { Before, After,BeforeAll,AfterAll, BeforeStep, AfterStep, Status } from '@cucumber/cucumber'

Before(async function () {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
});

After(function () {
    console.log("After Cucumber Hooks")
});

BeforeStep(function(){
    console.log("#########################");
});


AfterStep(async function ({result}) {
if(result.status===Status.FAILED){
await this.page.screenshot({path:'screenshot1.png'})
}
});


