const express = require("express");
const router = express.Router();
const { addBooking } = require("../controller/bookingController");

// POST /bookings
router.post("/", addBooking);

module.exports = router;
