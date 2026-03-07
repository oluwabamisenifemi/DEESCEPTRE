const express = require("express");
const { readSite, writeSite } = require("../library/siteStore");
const auth = require("../middleware/auth");

const router = express.Router();

// Public: get site settings
router.get("/", (req, res) => {
  const site = readSite();
  res.json({ ok: true, site });
});

// Protected: update site settings
router.put("/", auth, (req, res) => {
  const { heroTitle, heroImageUrl, sectionImageUrl } = req.body || {};

  const patch = {};

  if (typeof heroTitle === "string") patch.heroTitle = heroTitle;
  if (typeof heroImageUrl === "string") patch.heroImageUrl = heroImageUrl;

  // NEW: second section image (permanent, like hero image)
  if (typeof sectionImageUrl === "string") patch.sectionImageUrl = sectionImageUrl;

  const site = writeSite(patch);
  res.json({ ok: true, site });
});

module.exports = router;