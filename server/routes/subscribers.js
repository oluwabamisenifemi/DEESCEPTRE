const express = require("express");
const fs = require("fs");
const path = require("path");
const auth = require("../middleware/auth");

const router = express.Router();

const DATA_DIR = path.join(__dirname, "..", "data");
const FILE = path.join(DATA_DIR, "subscribers.json");

function readSubscribers() {
  if (!fs.existsSync(FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeSubscribers(list) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2), "utf-8");
  fs.renameSync(tmp, FILE);
}

// Public: add an email to the list
router.post("/", (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return res.status(400).json({ ok: false, message: "Please enter a valid email address." });
  }

  const list = readSubscribers();

  if (list.some((s) => s.email === email)) {
    return res.json({ ok: true, message: "You're already subscribed." });
  }

  list.push({ email, source: String(req.body?.source || "website").slice(0, 50), date: new Date().toISOString() });
  writeSubscribers(list);

  res.json({ ok: true, message: "Thanks! You're on the list." });
});

// Admin only: see the list
router.get("/", auth, (req, res) => {
  res.json({ ok: true, subscribers: readSubscribers() });
});

module.exports = router;