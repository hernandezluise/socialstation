const { Signup, Login } = require("../controllers/users.controllers");
const {userVerification} = require('../config/authUserVerification');
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/', userVerification);
module.exports = router