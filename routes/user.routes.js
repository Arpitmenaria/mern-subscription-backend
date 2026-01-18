const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");

router.get("/creators", auth, async (req, res) => {
  const creators = await User.find({ role: "creator" }).select("_id name email");
  res.json(creators);
});

module.exports = router;
