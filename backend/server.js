const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/database.js");
require("dotenv").config();

connectDb();

// middlewares
app.use(cors());          // << added
app.use(express.json());

// routes
app.use("/api", require("./routes/leadRoutes"));

// start cron
require("./cron/cronJob");

app.get("/", (req, res) => {
  res.send("Backend server is running");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
