const request = require( '../node_modules/request');
const cheerio = require( '../node_modules/cheerio');

exports.get = async function getRecipe(url) {
    var ingredients = [];
    var preparations = [];
     await request(url, (error, responde, html) => {
         if(!error && responde.statusCode == 200) {
            const $ = cheerio.load(html);
            
            const ingredient = $('.ingredients');
            const preparation = $('.preparation');
    
            const ingredientForm = ingredient.find('form');

            

            ingredientForm.find('ul, ol').each((i, el) => {
                if ($(el).prev().is('h3')) {
                    ingredients.push(["", $(el).prev().text().trim()]);
                }
                $(el).find('li').each((liIndex, liElement) => {
                    ingredients.push([$(liElement).text().trim(), ""]);
                });
            });

          
            preparation.find('ul, ol').each((i, element) => {
                if ($(element).prev().is('h3')) {
                    preparations.push(["", $(element).prev().text().trim()])
                }
                $(element).find('li').each((liIndex, liElement) => {
                    preparations.push([$(liElement).text().trim(), ""]);
                });

            });
        }
         return  {ingredients, preparations};
    });
}

