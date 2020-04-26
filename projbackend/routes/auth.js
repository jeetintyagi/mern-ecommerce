var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 8 char").isLength({ min: 8 })
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage( "email is required"),
    check("password").isLength({ min: 1}).withMessage("password field is required"),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
