const express = require("express");
const router = express.Router();
const RestaurantController = require("../Controller/restaurantController");

// Route pour ajouter un restaurant avec une image
router.post('/restaurant', RestaurantController.restaurant);

// Autres routes
router.get("/restaurantList", RestaurantController.restaurantList);
router.post("/Modrestaurant/:id", RestaurantController.modificationRestaurant);
router.get("/restaurant/:id", RestaurantController.restaurantById);
router.get('/restaurants/:adminId', RestaurantController.getRestaurantByAdmin);


module.exports = router;