const express = require("express")

const router  = express.Router();

const AvisController = require("../Controller/avisController");


router.post("/avis", AvisController.reservation);
router.get("/avisList", AvisController.reservationList);
router.post("/avis/:id", AvisController.modificationAvis)

module.exports = router;