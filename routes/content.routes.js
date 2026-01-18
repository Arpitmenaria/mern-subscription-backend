const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const subCheck = require("../middleware/subscription.middleware");
const {
  createContent,
  getContent
} = require("../controllers/content.controller");

router.post("/", auth, role("creator", "admin"), createContent);

router.get(
  "/:creatorId",
  auth,
  role("subscriber", "admin"),
  subCheck,
  getContent
);

module.exports = router;
