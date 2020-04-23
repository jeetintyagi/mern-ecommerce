var express = require("express");
var router = express.Router();
const { check , validationResult }= require("express-validator");
const { signup, signout } = require("../controllers/authentication");
const { min } = require("lodash");

router.post("/signup",[
    check("name").isLength({min:3}).withMessage("name should be at least 3 characters long"),
    check("email").isEmail().normalizeEmail().if(!isemail()).withMessage("is not a valid email address"),
    check("password").isLength({min:8,max:32}).withMessage("password should be atleast contain 8 charaters & \natmost 32 characters"),
    
    
], signup);
router.get("/signout", signout);

module.exports = router;
