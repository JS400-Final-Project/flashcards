const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");

// const SignUpRouter=require("./src/SignUp.js")
//  router.use(express.static(path.join(__dirname,"public")));
router.use("/flashcards", express.static("build"));
router.use("/login", require("./login"));
router.use("/set", require("./set"));
router.use("/cards", require("./cards"));
// router.use("/login", SignUpRouter);

module.exports = router;
