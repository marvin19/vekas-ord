import puppeteer from 'puppeteer';

const fetchText = async () => {
    let browser;

    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.goto('https://ordbokene.no/nn/45867')
        
        const selector = '.explanations';

        await page.waitForSelector(selector);
        const elements = await page.$$(selector);
        
        const definitions = [];

        for (let i = 0; i < elements.length; i++ ) {
            const element = elements[i];
            const definitionElement = await element.$('.plain');

            const definition = definitionElement ? await definitionElement.evaluate(el => el.innerText.trim()) : '';

            definitions.push({definition});
        }

        console.log(definitions);

    } catch (error) {
        console.error('Error during puppeteer script:', error);
    } finally {
        if(browser) {
            await browser.close();
        }
    }
}

fetchText();