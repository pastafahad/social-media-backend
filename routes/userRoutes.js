const express = require("express");
const {
  login,
  singup,
  updateProfile,
} = require("../controllers/userController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", singup);
router.post("/update-profile", updateProfile);

module.exports = router;
