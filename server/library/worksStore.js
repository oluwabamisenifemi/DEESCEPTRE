const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const FILE_PATH = path.join(DATA_DIR, "works.json");

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify({ works: [] }, null, 2), "utf8");
  }
}

function readDB() {
  ensureFile();
  try {
    const raw = fs.readFileSync(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw || "{}");
    if (!Array.isArray(parsed.works)) parsed.works = [];
    return parsed;
  } catch {
    return { works: [] };
  }
}

function writeDB(db) {
  ensureFile();
  fs.writeFileSync(FILE_PATH, JSON.stringify(db, null, 2), "utf8");
  return db;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugify(s = "") {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listWorks() {
  const db = readDB();
  return [...db.works].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

function listFeatured(limit = 8) {
  return listWorks()
    .filter((w) => !!w.isFeatured)
    .slice(0, Math.max(0, Number(limit) || 8));
}

function getWork(idOrSlug) {
  const db = readDB();
  return db.works.find((w) => w.id === idOrSlug || w.slug === idOrSlug) || null;
}

function addWork(payload) {
  const db = readDB();

  const title = String(payload.title || "").trim();
  const coverImageUrl = String(payload.coverImageUrl || "").trim();

  if (!title) throw new Error("title is required");
  if (!coverImageUrl) throw new Error("coverImageUrl is required");

  const baseSlug = slugify(payload.slug || title) || makeId();
  let slug = baseSlug;
  let n = 2;
  while (db.works.some((w) => w.slug === slug)) {
    slug = `${baseSlug}-${n++}`;
  }

  const work = {
    id: makeId(),
    slug,
    title,
    category: String(payload.category || "").trim(),
    location: String(payload.location || "").trim(),
    overview: String(payload.overview || "").trim(),
    description: String(payload.description || "").trim(),
    coverImageUrl,
    gallery: Array.isArray(payload.gallery) ? payload.gallery : [],
    isFeatured: !!payload.isFeatured,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  db.works.unshift(work);
  writeDB(db);
  return work;
}

function updateWork(id, patch = {}) {
  const db = readDB();
  const idx = db.works.findIndex((w) => w.id === id);
  if (idx === -1) return null;

  const current = db.works[idx];
  const next = { ...current };

  if (typeof patch.title === "string") next.title = patch.title.trim();
  if (typeof patch.category === "string") next.category = patch.category.trim();
  if (typeof patch.location === "string") next.location = patch.location.trim();
  if (typeof patch.overview === "string") next.overview = patch.overview.trim();
  if (typeof patch.description === "string") next.description = patch.description.trim();
  if (typeof patch.coverImageUrl === "string") next.coverImageUrl = patch.coverImageUrl.trim();
  if (Array.isArray(patch.gallery)) next.gallery = patch.gallery;
  if (typeof patch.isFeatured === "boolean") next.isFeatured = patch.isFeatured;

  next.updatedAt = Date.now();
  db.works[idx] = next;
  writeDB(db);
  return next;
}

function deleteWork(id) {
  const db = readDB();
  const before = db.works.length;
  db.works = db.works.filter((w) => w.id !== id);
  writeDB(db);
  return db.works.length !== before;
}

module.exports = {
  addWork,
  deleteWork,
  getWork,
  listWorks,
  updateWork,
  listFeatured,
};