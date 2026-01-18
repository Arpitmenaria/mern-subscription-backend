const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/content", require("./routes/content.routes"));
app.use("/api/subscription", require("./routes/subscription.routes"));
app.use("/api/users", require("./routes/user.routes"));


module.exports = app;
