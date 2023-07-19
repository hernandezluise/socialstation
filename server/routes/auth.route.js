const { Signup, Login } = require("../controllers/users.controllers");
const {userVerification} = require('../config/authMiddleWare');
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/', userVerification);
module.exports = router