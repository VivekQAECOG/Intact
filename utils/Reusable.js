export default class Resuable{

constructor(page){
this.page = page;
}

async waitTillnetworkidle(){
    await this.page.waitForLoadState('networkidle');
}


}