var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("myMango");
database.dropDatabase()
database = client.db("myMango");
const mangoes = database.collection("mango");
const result = await mangoes.insertOne({name:"Манго желтое Gold"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run();