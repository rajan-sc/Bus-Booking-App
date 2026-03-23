const express = require("express");
const router = express.Router();
const { addBus, findBus, getAllBuses } = require("../controller/busController");
const { getBusBookings } = require("../controller/bookingController");


router.post("/", addBus);
router.get("/available/:seats", findBus);
router.get("/all", getAllBuses);
router.get("/:id/bookings", getBusBookings);

module.exports = router;
