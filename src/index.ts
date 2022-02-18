import * as playwright from 'playwright';

async function main(){
    const {chromium,webkit,firefox} = playwright
    //Launch browser
    for (const browserType of [chromium,webkit,firefox]) {
        const browser = await playwright.chromium.launch();
        //Create a context
        const context = await browser.newContext()
        //Create a page
        const page = await context.newPage()
    
        //Carry out actions
        await page.goto('http://whatsmyuseragent.org/');
        await page.screenshot({path:`output/${browserType.name()}.png`})
    
        //close browser
        browser.close();
        
    }
}

main();