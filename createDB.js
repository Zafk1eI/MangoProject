var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("myMango");
database.dropDatabase()
database = client.db("myMango");
const cats = database.collection("mango");
const result = await cats.insertOne({name:"Манго желтое Gold"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run();