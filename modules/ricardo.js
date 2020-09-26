

const request = require('../node_modules/request');
const cheerio = require('../node_modules/cheerio');

const MongoClient = require('../mongodb').MongoClient;
const uri = "mongodb+srv://db_dannickbedard:<password>@cluster0.p8ox2.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Connecter to DB");
  console.log(collection);
  // perform actions on the collection object
  client.close();
});

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



