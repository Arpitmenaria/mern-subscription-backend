const Content = require("../models/Content");

exports.createContent = async (req, res) => {
  const content = await Content.create({
    ...req.body,
    creator: req.user.id
  });
  res.json(content);
};

exports.getContent = async (req, res) => {
  const content = await Content.find({
    creator: req.params.creatorId
  });
  res.json(content);
};
