const express = require("express");
const router = express.Router();
const { bookTaxi} = require("../Controllers/taxiController");


router.post("/BookTaxi",bookTaxi);

module.exports = router;
