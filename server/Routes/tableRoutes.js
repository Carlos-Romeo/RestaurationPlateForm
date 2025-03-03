const express = require("express")

const router  = express.Router();

const TableController = require("../Controller/tableController");


router.post("/table", TableController.table_restaurant);
router.get("/tableList", TableController.table_restaurantList);
router.post("/table/:id", TableController.modificationTable_Restaurant)
router.get("/tableDuResto/:id", TableController.table_restaurantByRestaurant)
router.get("/tableById/:id", TableController.table_restaurantById)


module.exports = router;