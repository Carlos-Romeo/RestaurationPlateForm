const express = require("express")

const router  = express.Router();

const ReservationController = require("../Controller/reservController");


router.post("/reservation", ReservationController.reservation);
router.get("/reservationList", ReservationController.reservationList);
router.post("/reservation/:id", ReservationController.modificationReservation)
router.get("/reservationByIdTable/:tableId", ReservationController.reservationByIdTable)
module.exports = router;