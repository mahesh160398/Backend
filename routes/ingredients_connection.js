
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
 
async function main() {
   
    const database = await client.db('pizzaria');
    const ingredients = await database.collection('ingredients');
    console.log("Ingredients Connection is successfully")
    return ingredients
}

async function getAllIngredients() {
    try {
        const collection = await main()
        let ingredients = await collection.find().toArray()
        console.log(ingredients);
        return ingredients
    } 
    catch(error){
        console.log(error)
    }
}
 
module.exports={getAllIngredients}