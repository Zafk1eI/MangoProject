var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data
console.log(data)
const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("mymango");
database.dropDatabase()
database = client.db("mymango");
const mangoes = database.collection("mangos");
const result = await mangoes.insertMany(data);
console.log(`${result.insertedCount} documents were inserted`);
} finally {
await client.close();
}
}
run();
