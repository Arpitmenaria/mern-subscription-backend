const Subscription = require("../models/Subscription");

module.exports = async (req, res, next) => {
  const subscription = await Subscription.findOne({
    subscriber: req.user.id,
    creator: req.params.creatorId
  });

  if (!subscription)
    return res.status(403).json({ error: "No subscription found" });

  const now = new Date();

  if (now > subscription.graceEndDate) {
    subscription.status = "expired";
    await subscription.save();
    return res.status(403).json({
      error: "Subscription expired. Please renew."
    });
  }

  next();
};
