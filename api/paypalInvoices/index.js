const express = require("express");
const router = express.Router();
const { checkToken } = require("../../middlewares/jwt");

router.use("/create", checkToken, require("./create"));
router.use("/delete", checkToken, require("./delete"));
router.use("/send", checkToken, require("./send"));
router.use("/cancel", checkToken, require("./cancel"));
router.use("/remind", checkToken, require("./remind"));
router.use("/get", checkToken, require("./get"));

module.exports = router;
