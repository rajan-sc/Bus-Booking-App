const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controller/userController");
const { getUserBookings } = require("../controller/bookingController");


router.post("/", createUser);
router.get("/all", getAllUsers);
router.get("/:id/bookings", getUserBookings);

module.exports = router;
