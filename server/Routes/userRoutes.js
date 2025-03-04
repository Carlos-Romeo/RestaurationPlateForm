const express = require("express")

const router  = express.Router();

const UserController = require("../Controller/userController");
const verifiedToken = require("../middleware/verify");


router.post("/utilisateur", UserController.utilisateur);
router.post("/login", UserController.login);
/* router.get("/logout", UserController.logout); */
router.get("/utilisateur/:id", UserController.utilisateurId)
router.get("/utilisateurList", verifiedToken.verifyToken, UserController.utilisateurList);
/* 

router.post("/utilisateur/:id", UserController.modificationUser) */

module.exports = router;

