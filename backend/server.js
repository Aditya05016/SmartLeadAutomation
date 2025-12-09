const express = require("express");
const app = express();
const connectDb = require("./config/database.js");
require("dotenv").config();

connectDb();
app.use(express.json());
app.use("/api", require("./routes/leadRoutes"));

// start cron
require("./cron/cronJob");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
