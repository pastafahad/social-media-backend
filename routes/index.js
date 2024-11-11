const express = require("express");
const userRoute = require("./userRoutes");
const postRoute = require("./postRoutes");

const router = express.Router();

router.use("/user", userRoute);
router.use("/post", postRoute);


module.exports = router;
