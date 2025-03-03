const express = require("express")

const router  = express.Router();

const ClientController = require("../Controller/clientController");

router.post("/client", ClientController.client);
router.get("clientList", ClientController.clientList);
router.post("/client/:id", ClientController.modificationClient)

module.exports = router;