// Following code adapted from: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
const {MongoClient} = require('mongodb');



// Adds a new entry for login. Listings are objects.
async function addLogin(client, newListing){
  const result = await client.db("login_db").collection("login_collection").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}


// Retrieves a list of databases in the cluster and prints the results.
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://cse442:a9-sleeper@cluster0.s9pn2.mongodb.net/login_db?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // No warnings
  // await client.connect();
  // await listDatabases(client);

  try {
      await client.connect(); // Connect to MongoDB cluster
      await listDatabases(client); // Make DB calls
      // await addLogin(client, { username: "test_username", password: "test_password"}) // Create test login

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
