const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  subscriber: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startDate: Date,
  endDate: Date,
  graceEndDate: Date,
  status: {
    type: String,
    enum: ["active", "expired"]
  }
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
