// Following code adapted from: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
const {MongoClient} = require('mongodb');


// Adds a new entry for login and console.logs the ID. Listings are objects.
async function addLogin(client, input){
  const res = await client.db("login_db").collection("login_collection").insertOne(input);
  console.log(`Added listing with id: ${res.insertedId}`);
}

// Looks for possible database entry for given user + pass combination and console.logs the ID
async function findID(client, user, pass) {
  input = {"username": user, "password": pass};
  const res = await client.db("login_db").collection("login_collection").findOne(input);
  if(res == null) {
    console.log('Document not found. Returning null.')
    return null
  } else {
    console.log(`Retrieved listing with id: ${res._id}`);
    return res;
  }
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


  try {
      await client.connect(); // Connect to MongoDB cluster
      // The following functions inserts the username and password to the database and retrieves it
      const user = "test_username";
      const pass = "test_password";
      await addLogin(client, { username: user, password: pass}) // Create test login
      await findID(client, user, pass);
      // await listDatabases(client); // Make DB calls

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
