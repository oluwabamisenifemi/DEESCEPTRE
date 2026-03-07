const express = require("express");
const auth = require("../middleware/auth");
const {
  addWork,
  deleteWork,
  getWork,
  listWorks,
  updateWork,
  listFeatured,
} = require("../library/worksStore");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ ok: true, works: listWorks() });
});

router.get("/featured", (req, res) => {
  const limit = Number(req.query.limit || 8);
  res.json({ ok: true, works: listFeatured(limit) });
});

router.get("/:id", (req, res) => {
  const work = getWork(req.params.id);
  if (!work) {
    return res.status(404).json({ ok: false, error: "Work not found" });
  }
  res.json({ ok: true, work });
});

router.post("/", auth, (req, res) => {
  try {
    const work = addWork(req.body || {});
    res.json({ ok: true, work });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message || "Invalid payload" });
  }
});

router.put("/:id", auth, (req, res) => {
  const updated = updateWork(req.params.id, req.body || {});
  if (!updated) {
    return res.status(404).json({ ok: false, error: "Work not found" });
  }
  res.json({ ok: true, work: updated });
});

router.delete("/:id", auth, (req, res) => {
  const ok = deleteWork(req.params.id);
  if (!ok) {
    return res.status(404).json({ ok: false, error: "Work not found" });
  }
  res.json({ ok: true });
});

module.exports = router;