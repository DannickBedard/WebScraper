// SRC :: https://docs.mongodb.com/drivers/node/fundamentals/crud

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://dbMyRecipesUser:qTHHqIdB04zyirdF@clustermyrecipes.fna4m.mongodb.net/dbMyRecipes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();

    const db = client.db('dbMyRecipes');
    db.createCollection("Test");

    const collection = db.collection("user");

    // Query for a movie that has the title 'Back to the Future'
    const query = { type: 'admin' };
    const users = await collection.find(query);

    for await (const user of users) {
      console.log(user.name);
      console.log(user.type);
    }

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);