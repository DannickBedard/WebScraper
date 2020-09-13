const request = require('request');
const cheerio = require('cheerio');

getInfoFromUrl('https://www.ricardocuisine.com/recettes/3856-pate-au-poulet');

function getInfoFromUrl(url) {
    request(url, (error, responde, html) => {
        if(!error && responde.statusCode == 200) {
            const $ = cheerio.load(html);
            
            const ingredient = $('.ingredients');
            const preparation = $('.preparation');
    
            const ingredientForm = ingredient.find('form');

            ingredientForm.find('ul').each((i, el) => {
                if ($(el).prev().is('h3')) {
                    console.log($(el).prev().text());
                }
                $(el).find('li').each((liIndex, liElement) => {
                    console.log($(liElement).text());
                });
            });
        }
    });
}


