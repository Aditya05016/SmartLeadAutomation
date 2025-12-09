// we will use service later, so import it here
const leadService = require("../services/leadService");

exports.createLeads = async (req, res) => {
  try {
    const { names } = req.body;   // expecting { names: "Aditya, Ravi, ..." }

    if (!names) {
      return res.status(400).json({ message: "Names are required" });
    }

    // call service to process names (API call + DB save)
    const results = await leadService.processNames(names);

    return res.status(201).json({
      message: "Leads processed successfully",
      data: results,
    });

  } catch (error) {
    console.log("Error creating leads", error);
    return res.status(500).json({ message: "Server error" });
  }
};
