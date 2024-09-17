var express = require("express");
var router = express.Router();
const api = require("./pizzas_connection");
const api2=require("./ingredients_connection");

/* GET users listing. */
//http://localhost:3000/books/list/all
router.get("/order", function (req, res, next) {
  api
    .getAllPizzas()
    .then((pizzas) => res.send({ data: pizzas }))
    .catch((error) => res.status(500).send("mongodb error " + error));
});



router.get("/list", function (req, res, next) {
  api2
    .getAllIngredients()
    .then((ingredients) => res.send({ data: ingredients }))
    .catch((error) => res.status(500).send("mongodb error " + error));
});

//http://localhost:3000/books/Coffeehouse
// router.get("/details/:title", function (req, res, next) {});

//http://localhost:3000/books/list?category=Java  (query string)


//2011-01-14T00:00:008"
//http://localhost:3000/books/list?publishedDate.date=2011-01-14T00:00:00.000-0800

//Add new book details to existing list
// POST: http://localhost:3000/books/add
// router.post("/add", function (req, res, next) {});

// router.get("/add/:name", function (req, res, next) {});

module.exports = router;
