const {MongoClient} = require('mongodb');
const assert = require('assert').strict;


async function testDBInsertion(client, input) {
  const result = await client.db("login_db").collection("login_collection").insertOne(input);
  return result.ops[0]; // Return first and only operation
}

async function runDBTests(client){
  // Trivial Test
  assert.equal(1,1);

  // Database Insertion Tests
  input1 = {username: "test_username", password: "test_password"};
  assert.deepEqual(await testDBInsertion(client, input1), input1);
  input2 = {username: "", password: ""};
  assert.equal(await testDBInsertion(client, input2), input2);
  input3 = {username: "ltkicQ7PHo", password: "bjV1FdpeY7"};
  assert.equal(await testDBInsertion(client, input3), input3);

  // Database Retrieval Tests

}

async function main(){
  const uri = "mongodb+srv://cse442:a9-sleeper@cluster0.s9pn2.mongodb.net/login_db?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect(); // Connect to MongoDB cluster
      await runDBTests(client); // Make DB calls
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
