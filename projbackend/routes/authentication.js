const express = require("express");
const router = express.Router();

const {signout} = require("../controllers/authentication.js")

router.get("/signout", signout);

module.exports = router;