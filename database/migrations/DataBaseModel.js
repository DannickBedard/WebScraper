// SRC :: https://docs.mongodb.com/drivers/node/fundamentals/crud

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://dbMyRecipesUser:qTHHqIdB04zyirdF@clustermyrecipes.fna4m.mongodb.net/dbMyRecipes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
const models = require("../model/model");
const seeds = require("../seeds/Seed");

async function run() {
  try {
    await client.connect();
    const db = client.db('dbMyRecipes');
    for (const model of models.models) {
      try {
        await db.dropCollection(model.name);
        await db.createCollection(model.name);
        
        var collection = db.collection(model.name);
        for (const seed in seeds.seeds){
          if (seed.name === model.name){
            await collection.insertOne(seed.model);
          }
        }
        

      } catch (err) {
        if (err.message.match(/ns not found/)) {
          await db.createCollection(model.name);
        } else {
          err;
        }
      }
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);