const express = require("express");
const router = express.Router();
const { checkToken } = require("../../middlewares/jwt");

router.use("/add", checkToken, require("./add"));
router.use("/get", checkToken, require("./get"));
router.use("/edit", checkToken, require("./edit"));
router.use("/delete", checkToken, require("./delete"));

module.exports = router;
