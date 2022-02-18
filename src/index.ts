import * as playwright from 'playwright';

async function main(){
    const {chromium,webkit,firefox} = playwright
    //Launch browser
    const browser = await playwright.chromium.launch({
        headless: false, //open browser
        slowMo:1500 //define time interaction
    });
    //Create a context
    const context = await browser.newContext()
    //Create a page
    const page = await context.newPage()

    //Carry out actions
    const url = 'https://playwright.dev/'
    await page.goto(url);

    //fill search
    await page.fill('.navbar__search-input','lololo')
    
    //click
    await page.click('.getStarted_1iQB')
    await page.screenshot({path:`output/${playwright.chromium.name()}.png`})


    //close browser
    browser.close();
}

main();