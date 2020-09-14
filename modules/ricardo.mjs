import packageConfig from '../package.json';
import { request }  from '../request';
import { cheerio }  from '../cheerio';

export function getRecipe(url) {
    request(url, (error, responde, html) => {
        if(!error && responde.statusCode == 200) {
            const $ = cheerio.load(html);
            
            const ingredient = $('.ingredients');
            const preparation = $('.preparation');
    
            const ingredientForm = ingredient.find('form');

            var ingredients = [];

            ingredientForm.find('ul, ol').each((i, el) => {
                if ($(el).prev().is('h3')) {
                    ingredients.push(["", $(el).prev().text().trim()]);
                }
                $(el).find('li').each((liIndex, liElement) => {
                    ingredients.push([$(liElement).text().trim(), ""]);
                });
            });

            var preparations = [];
            preparation.find('ul, ol').each((i, element) => {
                if ($(element).prev().is('h3')) {
                    preparations.push(["", $(element).prev().text().trim()])
                }
                $(element).find('li').each((liIndex, liElement) => {
                    preparations.push([$(liElement).text().trim(), ""]);
                });

            });

            console.log(ingredients);
            console.log(preparations);
            return {ingredient, preparations};
        }
    });
}

