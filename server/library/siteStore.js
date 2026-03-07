const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const SITE_FILE = path.join(DATA_DIR, "site.json");

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(SITE_FILE)) {
    fs.writeFileSync(
      SITE_FILE,
      JSON.stringify(
        {
          heroTitle: "NEXUS APARTMENTS",
          heroImageUrl: "",
        },
        null,
        2
      ),
      "utf-8"
    );
  }
}

function readSite() {
  ensureFile();
  const raw = fs.readFileSync(SITE_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    // if file ever gets corrupted, don’t crash the server
    return { heroTitle: "NEXUS APARTMENTS", heroImageUrl: "" };
  }
}

function writeSite(patch) {
  ensureFile();
  const current = readSite();
  const next = { ...current, ...patch };
  // atomic-ish write
  const tmp = SITE_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(next, null, 2), "utf-8");
  fs.renameSync(tmp, SITE_FILE);
  return next;
}

module.exports = { readSite, writeSite };