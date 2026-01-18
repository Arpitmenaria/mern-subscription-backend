const Subscription = require("../models/Subscription");

exports.subscribe = async (req, res) => {
  const days = req.body.plan === "yearly" ? 365 : 30;

  const start = new Date();
  const end = new Date(start);
  end.setDate(end.getDate() + days);

  const grace = new Date(end);
  grace.setDate(grace.getDate() + 3);

  await Subscription.findOneAndUpdate(
    {
      subscriber: req.user.id,
      creator: req.params.creatorId
    },
    {
      startDate: start,
      endDate: end,
      graceEndDate: grace,
      status: "active"
    },
    { upsert: true }
  );

  res.json({ message: "Subscription active" });
};
