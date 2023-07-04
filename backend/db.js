const { MongoClient, ServerApiVersion } = require("mongodb");

const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${username}:${password}@cluster0.h9pnzaf.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
