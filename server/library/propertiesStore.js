const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const FILE_PATH = path.join(DATA_DIR, "properties.json");

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify({ properties: [] }, null, 2), "utf8");
  }
}

function readDB() {
  ensureFile();
  try {
    const raw = fs.readFileSync(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw || "{}");
    if (!Array.isArray(parsed.properties)) parsed.properties = [];
    return parsed;
  } catch {
    return { properties: [] };
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

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function normalizeVariables(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => ({
      id: item?.id ? String(item.id) : makeId(),
      label: String(item?.label || "").trim(),
      value: String(item?.value || "").trim(),
    }))
    .filter((item) => item.label || item.value);
}

function listProperties() {
  const db = readDB();
  return [...db.properties].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

function getProperty(idOrSlug) {
  const db = readDB();
  return (
    db.properties.find((p) => p.id === idOrSlug || p.slug === idOrSlug) || null
  );
}

function addProperty(payload) {
  const db = readDB();

  const name = String(payload.name || "").trim();
  const coverImageUrl = String(payload.coverImageUrl || "").trim();

  if (!name) throw new Error("name is required");
  if (!coverImageUrl) throw new Error("coverImageUrl is required");

  const baseSlug = slugify(payload.slug || name) || makeId();
  let slug = baseSlug;
  let n = 2;

  while (db.properties.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${n++}`;
  }

  const property = {
    id: makeId(),
    slug,
    propertyText: String(payload.propertyText || "").trim(),
    name,
    location: String(payload.location || "").trim(),
    value: String(payload.value || "").trim(),
    description: String(payload.description || "").trim(),
    coverImageUrl,
    gallery: normalizeStringArray(payload.gallery),
    amenities: normalizeStringArray(payload.amenities),
    variables: normalizeVariables(payload.variables),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  db.properties.unshift(property);
  writeDB(db);
  return property;
}

function updateProperty(id, patch = {}) {
  const db = readDB();
  const idx = db.properties.findIndex((p) => p.id === id);

  if (idx === -1) return null;

  const current = db.properties[idx];
  const next = { ...current };

  if (typeof patch.propertyText === "string") next.propertyText = patch.propertyText.trim();
  if (typeof patch.name === "string") next.name = patch.name.trim();
  if (typeof patch.location === "string") next.location = patch.location.trim();
  if (typeof patch.value === "string") next.value = patch.value.trim();
  if (typeof patch.description === "string") next.description = patch.description.trim();
  if (typeof patch.coverImageUrl === "string") next.coverImageUrl = patch.coverImageUrl.trim();

  if (Array.isArray(patch.gallery)) next.gallery = normalizeStringArray(patch.gallery);
  if (Array.isArray(patch.amenities)) next.amenities = normalizeStringArray(patch.amenities);
  if (Array.isArray(patch.variables)) next.variables = normalizeVariables(patch.variables);

  next.updatedAt = Date.now();
  db.properties[idx] = next;
  writeDB(db);
  return next;
}

function deleteProperty(id) {
  const db = readDB();
  const before = db.properties.length;
  db.properties = db.properties.filter((p) => p.id !== id);
  writeDB(db);
  return db.properties.length !== before;
}

module.exports = {
  listProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
};