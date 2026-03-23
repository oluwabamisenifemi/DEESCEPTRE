const express = require("express");
const auth = require("../middleware/auth");
const {
  listProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../library/propertiesStore");

const router = express.Router();

/* =========================
   PUBLIC ROUTES
========================= */

// Get all properties
router.get("/", (req, res) => {
  res.json({ ok: true, properties: listProperties() });
});

// Get single property by id or slug
router.get("/:id", (req, res) => {
  const property = getProperty(req.params.id);

  if (!property) {
    return res.status(404).json({
      ok: false,
      error: "Property not found",
    });
  }

  res.json({
    ok: true,
    property,
  });
});

/* =========================
   ADMIN ROUTES
========================= */

// Create property
router.post("/", auth, (req, res) => {
  try {
    const property = addProperty(req.body || {});
    res.json({ ok: true, property });
  } catch (err) {
    res.status(400).json({
      ok: false,
      error: err.message || "Could not create property",
    });
  }
});

// Update property
router.put("/:id", auth, (req, res) => {
  const updated = updateProperty(req.params.id, req.body || {});

  if (!updated) {
    return res.status(404).json({
      ok: false,
      error: "Property not found",
    });
  }

  res.json({
    ok: true,
    property: updated,
  });
});

// Delete property
router.delete("/:id", auth, (req, res) => {
  const ok = deleteProperty(req.params.id);

  if (!ok) {
    return res.status(404).json({
      ok: false,
      error: "Property not found",
    });
  }

  res.json({ ok: true });
});

module.exports = router;