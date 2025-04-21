const { welcomeUser, getAllUsers } = require("../controllers/userControllers.js");

const express = require("express");
const router = express.Router();

router.get("/", welcomeUser);
router.get("/users", getAllUsers);

module.exports = router;