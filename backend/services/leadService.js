const axios = require("axios");
const Lead = require("../models/lead");

exports.processNames = async (namesString) => {
  // convert input string to array
  const namesArray = namesString.split(",").map(name => name.trim());

  const results = [];

  for (const name of namesArray) {
    // call API
    const response = await axios.get(`https://api.nationalize.io?name=${name}`);

    // safe handling in case API returns no country
    const data = response.data.country?.[0] || {
      country_id: "NA",
      probability: 0
    };

    const probability = data.probability;
    const country = data.country_id;

    // business rule
    const status = probability > 0.6 ? "Verified" : "To Check";

    // save in DB
    const lead = await Lead.create({
      name,
      country,
      probability,
      status,
      synced: false
    });

    results.push(lead);
  }

  return results;
};

