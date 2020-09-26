
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbMyRecipesUser:qTHHqIdB04zyirdF@clustermyrecipes.fna4m.mongodb.net/dbMyRecipes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("dbMyRecipes").collection("MyRecipesCollection");
  // perform actions on the collection object
  console.log("Connecter à ma base de données");
  console.log(collection);
  client.close();
});


// const ricardo = require('./modules/ricardo.js');



// var  ingredients =  ricardo.getIngredients('https://www.ricardocuisine.com/recettes/3856-pate-au-poulet');
// var  preparations = ricardo.getPreparations('https://www.ricardocuisine.com/recettes/3856-pate-au-poulet');

// console.log(ingredients);
// console.log(preparations);