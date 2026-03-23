const express = require("express");
const router = express.Router();
const { addBus, findBus, getAllBuses } = require("../controller/busController");


router.post("/",addBus);
router.get("/available/:seats",findBus);
router.get("/all",getAllBuses);

module.exports = router;
