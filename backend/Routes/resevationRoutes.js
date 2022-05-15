const express = require("express");
const router = express.Router();
const {deleteResevation , createReservations , updateReservationsById , getAllresevations , getReservationsById , getReservationsByUserId} = require("../Controllers/resevationController");


router.post("/createReservations",createReservations);
router.get("/getAllresevations",getAllresevations);
router.get("/getReservationsById/:id",getReservationsById);
router.delete("/deleteResevation/:id",deleteResevation);
router.patch("/updateReservationsById/:id",updateReservationsById);
router.get("/getResevationByUserID/:id",getReservationsByUserId)

module.exports = router;
