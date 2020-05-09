const puppeteer = require('puppeteer');

const monaghan = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://islamicfoundation.ie/');
        await page.waitForSelector("#app #selector .selectedItem .selection");
        await page.click('#app #selector .selectedItem .selection');
        await page.waitForSelector("#app #selector .listContainer .listItem:nth-child(1)");
        await page.click("#app #selector .listContainer .listItem:nth-child(21)");
        await page.waitFor(950);
    
    
        // Get the prayer timings for Fajr
        const prayers = await page.evaluate(() => {
            return {
                Fajr: document.querySelector('#prayers .adhan .prayer:nth-child(1) .svelte-fnenre:nth-child(2) ').innerHTML,
                Shurook: document.querySelector('#prayers .adhan .prayer:nth-child(2) .svelte-fnenre:nth-child(2) ').innerHTML,
                Dhuhr: document.querySelector('#prayers .adhan .prayer:nth-child(3) .svelte-fnenre:nth-child(2) ').innerHTML,
                Asr: document.querySelector('#prayers .adhan .prayer:nth-child(4) .svelte-fnenre:nth-child(2) ').innerHTML,
                Maghrib: document.querySelector('#prayers .adhan .prayer:nth-child(5) .svelte-fnenre:nth-child(2) ').innerHTML,
                Isha: document.querySelector('#prayers .adhan .prayer:nth-child(6) .svelte-fnenre:nth-child(2) ').innerHTML
            }
        }); 
    
        // console.log(prayers);
    
        await browser.close();
        return(prayers);
        
} 



module.exports = {
    monaghan
}

