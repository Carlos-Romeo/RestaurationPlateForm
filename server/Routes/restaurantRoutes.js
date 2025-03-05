const express = require("express");
const router = express.Router();
const RestaurantController = require("../Controller/restaurantController");


router.post('/restaurant', RestaurantController.restaurant);


router.get("/restaurantList", RestaurantController.restaurantList);
router.put("/Modrestaurant/:id", RestaurantController.modificationRestaurant);
router.get("/restaurant/:id", RestaurantController.restaurantById);
router.get('/restaurants/:adminId', RestaurantController.getRestaurantByAdmin);


module.exports = router;