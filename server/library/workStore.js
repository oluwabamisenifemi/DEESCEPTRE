const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const FILE = path.join(DATA_DIR, "works.json");

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify({ works: [] }, null, 2), "utf8");
}

function readWorks() {
  ensureFile();
  try {
    const raw = fs.readFileSync(FILE, "utf8");
    const parsed = JSON.parse(raw || "{}");
    return Array.isArray(parsed.works) ? parsed.works : [];
  } catch {
    return [];
  }
}

function writeWorks(nextWorks) {
  ensureFile();
  const payload = { works: nextWorks };
  fs.writeFileSync(FILE, JSON.stringify(payload, null, 2), "utf8");
  return nextWorks;
}

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createWork(data) {
  const works = readWorks();
  const now = new Date().toISOString();

  const work = {
    id: uid(),
    title: String(data.title || "").trim(),
    category: String(data.category || "").trim(),
    location: String(data.location || "").trim(),
    coverImageUrl: String(data.coverImageUrl || "").trim(),
    featured: !!data.featured,
    createdAt: now,
    updatedAt: now,
  };

  if (!work.title) throw new Error("Title is required");
  if (!work.coverImageUrl) throw new Error("Cover image is required");

  works.unshift(work);
  writeWorks(works);
  return work;
}

function updateWork(id, patch) {
  const works = readWorks();
  const idx = works.findIndex((w) => w.id === id);
  if (idx === -1) return null;

  const next = { ...works[idx] };

  if (typeof patch.title === "string") next.title = patch.title.trim();
  if (typeof patch.category === "string") next.category = patch.category.trim();
  if (typeof patch.location === "string") next.location = patch.location.trim();
  if (typeof patch.coverImageUrl === "string") next.coverImageUrl = patch.coverImageUrl.trim();
  if (typeof patch.featured === "boolean") next.featured = patch.featured;

  next.updatedAt = new Date().toISOString();

  works[idx] = next;
  writeWorks(works);
  return next;
}

function deleteWork(id) {
  const works = readWorks();
  const next = works.filter((w) => w.id !== id);
  if (next.length === works.length) return false;
  writeWorks(next);
  return true;
}

function getWork(id) {
  const works = readWorks();
  return works.find((w) => w.id === id) || null;
}

function listWorks() {
  return readWorks();
}

function listFeatured(limit = 8) {
  const works = readWorks().filter((w) => !!w.featured);
  return works.slice(0, Math.max(1, Math.min(50, Number(limit) || 8)));
}

module.exports = {
  listWorks,
  listFeatured,
  getWork,
  createWork,
  updateWork,
  deleteWork,
};