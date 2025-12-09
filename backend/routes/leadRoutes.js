const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");

// POST /api/leads
router.post("/leads", leadController.createLeads);

module.exports = router;
