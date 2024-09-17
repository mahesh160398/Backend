
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
 
async function main() {
    const database = await client.db('pizzaria');
    const pizzas = await database.collection('pizzas');
    console.log("Connection is successfully")

    return pizzas
}
 
async function getAllPizzas() {
    try {
        const collection = await main()
        let pizzas = await collection.find().toArray()
        console.log(pizzas)
        return pizzas
    } 
    catch(error){
       console.log(error);
    }
}
 
module.exports={getAllPizzas}