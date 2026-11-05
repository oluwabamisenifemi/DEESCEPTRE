const express = require("express");
const fs = require("fs");
const path = require("path");
const auth = require("../middleware/auth");

const router = express.Router();

const DATA_DIR = path.join(__dirname, "..", "data");
const FILE = path.join(DATA_DIR, "meetings.json");

const FIELDS = [
  "name",
  "email",
  "phone",
  "investorType",
  "investmentRange",
  "meetingFormat",
  "preferredDate",
  "preferredTime",
  "message",
];

function readMeetings() {
  if (!fs.existsSync(FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeMeetings(list) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2), "utf-8");
  fs.renameSync(tmp, FILE);
}

// Public: save a meeting request
router.post("/", (req, res) => {
  const body = req.body || {};

  // Keep only the expected fields, as short trimmed text
  const request = {};
  for (const field of FIELDS) {
    request[field] = String(body[field] || "").trim().slice(0, 1000);
  }

  if (!request.name || !request.email || !request.phone) {
    return res.status(400).json({ ok: false, message: "Name, email and phone are required." });
  }

  const list = readMeetings();
  list.push({ ...request, submittedAt: new Date().toISOString() });
  writeMeetings(list);

  res.json({ ok: true, message: "Meeting request received." });
});

// Admin only: see all requests
router.get("/", auth, (req, res) => {
  res.json({ ok: true, meetings: readMeetings() });
});

module.exports = router;