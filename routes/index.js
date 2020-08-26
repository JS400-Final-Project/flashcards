const { Router } = require("express");
const router = Router();

router.use("/set", require("./set"));
router.use("/cards", require("./cards"));

module.exports = router;
