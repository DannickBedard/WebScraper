

const request = require('../node_modules/request');
const cheerio = require('../node_modules/cheerio');

exports.getIngredients = async function getIngredients(url) {
    var ingredients = [];
    var preparations = [];
    request(url, (error, responde, html) => {
        if(!error && responde.statusCode == 200) {
           const $ = cheerio.load(html);
            
            const ingredient = $('.ingredients');
            const preparation = $('.preparation');
    
            const ingredientForm = ingredient.find('form');

            
              const ingre =  getInfo($, ingredientForm).then(function(resp){
                return resp
              });

              return ingre;

         
        }
    });
}


exports.getPreparations = async function getPreparation(url) {
    var ingredients = [];
    var preparations = [];
    request(url, (error, responde, html) => {
        if(!error && responde.statusCode == 200) {
           const $ = cheerio.load(html);
            
            const ingredient = $('.ingredients');
            const preparation = $('.preparation');
    
            const ingredientForm = ingredient.find('form');

              const prep =  getInfo($, preparation).then(function(resp){
                return resp
              });

              console.log(prep);

         
        }
    });
}

function getInfo($ ,element) {
    let promise = new Promise(function(resolve, reject) {
      var listeItem = [];
      element.find('ul, ol').each((i, element) => {
            if ($(element).prev().is('h3')) {
                listeItem.push(["", $(element).prev().text().trim()])
            }
            $(element).find('li').each((liIndex, liElement) => {
                listeItem.push([$(liElement).text().trim(), ""]);
            });
        });
        if (listeItem.length >= 1){
            resolve(listeItem);
        }
        else {
            reject(false);
        }
    });
    return promise;
  }



