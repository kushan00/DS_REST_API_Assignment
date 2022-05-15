const express = require("express");
const router = express.Router();
const { getPayments  ,makePayment} = require("../Controllers/paymentController");


router.post("/makePayment",makePayment);
router.get("/getPayments",getPayments);


module.exports = router;
