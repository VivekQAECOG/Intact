import dotenv from 'dotenv';
dotenv.config();

export default class LoginPage {

    constructor(page) {

        this.page = page;

        this.btnUsername = page.locator("#username");
        this.drpdwnUsernameValue = page.locator("#react-select-2-option-0-0");

        this.btnPassword = page.locator("#password");
        this.drpdwnPasswordValue = page.locator("#react-select-3-option-0-0");

        this.btnLogin = page.locator("#login-btn");
        
    }

    async navigateToApplication(){
        await this.page.goto(process.env.URL);
        console.log(await this.page.title());

    }

    async login() {

        await this.btnUsername.click();

        await this.drpdwnUsernameValue.click();

        await this.btnPassword.click();

        await this.drpdwnPasswordValue.click();

        await this.btnLogin.click();

    }

}



