const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controller/userController");


router.post("/",createUser);
router.get("/all",getAllUsers);

module.exports = router;
