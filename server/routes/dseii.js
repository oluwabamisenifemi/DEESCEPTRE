const express = require("express");
const fs = require("fs");
const path = require("path");
const auth = require("../middleware/auth");

const router = express.Router();

const DATA_DIR = path.join(__dirname, "..", "data");
const FILE = path.join(DATA_DIR, "dseii-interest.json");

const FIELDS = [
  "role",
  "interest",
  "name",
  "email",
  "phone",
  "organisation",
  "jobTitle",
  "location",
  "size",
  "message",
  "helpWith",
];

function readEntries() {
  if (!fs.existsSync(FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeEntries(list) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2), "utf-8");
  fs.renameSync(tmp, FILE);
}

// Public: save an expression of interest
router.post("/", (req, res) => {
  const body = req.body || {};

  const entry = {};
  for (const field of FIELDS) {
    entry[field] = String(body[field] || "").trim().slice(0, 2000);
  }
  entry.consent = body.consent === true;

  if (!entry.name || !entry.email || !entry.phone || !entry.organisation || !entry.message) {
    return res.status(400).json({ ok: false, message: "Please fill in all required fields." });
  }

  const list = readEntries();
  list.push({ ...entry, submittedAt: new Date().toISOString() });
  writeEntries(list);

  res.json({ ok: true, message: "Expression of interest received." });
});

// Admin only: see all entries
router.get("/", auth, (req, res) => {
  res.json({ ok: true, entries: readEntries() });
});

module.exports = router;