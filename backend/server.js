const express = require("express");
const app = express();
const connectDb = require("./config/database.js");
require("dotenv").config();


connectDb();
app.use(express.json());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));