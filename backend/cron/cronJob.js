const cron = require("node-cron");
const Lead = require("../models/lead")

cron.schedule("*/5 * * * *", async () => {
  console.log("Cron job running...");

  try {
    const leads = await Lead.find({
      status: "Verified",
      synced: false
    });

    // if nothing to sync
    if (leads.length === 0) return;

    for (const lead of leads) {
      console.log(`[CRM Sync] Sending verified lead ${lead.name} to Sales Team...`);

      // update so we don’t sync again
      lead.synced = true;
      await lead.save();
    }

  } catch (error) {
    console.log("Cron job error:", error);
  }
});
