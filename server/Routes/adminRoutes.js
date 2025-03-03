const express = require("express")

const router  = express.Router();

const AdminController = require("../Controller/adminController");


router.post("/admin", AdminController.admin);
router.get("/adminList", AdminController.nadmiList);
router.post("/admin/:id", AdminController.modificationadmin)

module.exports = router;