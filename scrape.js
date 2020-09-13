const request = require('request');
const cheerio = require('cheerio');

request('https://www.ricardocuisine.com/recettes/3856-pate-au-poulet', (error, responde, html) => {
    if(!error && responde.statusCode == 200) {
        const $ = cheerio.load(html);
        
        const test = $('.recipe-details-wrap');

        console.log(test.html());

    
    
    }

});

