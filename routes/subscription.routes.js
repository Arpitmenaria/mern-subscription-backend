const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { subscribe } = require("../controllers/subscription.controller");

router.post("/:creatorId", auth, subscribe);

module.exports = router;
