const router = require("express").Router();
const { requireAuth } = require("../middleware/auth");

// TEMP in-memory storage (we'll persist later)
let site = {
    heroTitle: "NEXUS APARTMENTS",
    heroImageUrl: "", // admin will set this later
    pills: [
        {
            title: "Proven Track Record",
            body: "On-time, on-budget delivery with a focus on professionalism.",
        },
        {
            title: "Investor-Centric Approach",
            body: "Attracting partnerships through transparent, high-yield opportunities.",
        },
        {
            title: "Authority in the Space",
            body: "Bridging gaps with contemporary housing that combines aesthetics, functionality, and resilience.",
        },
    ],
};

router.get("/", (req, res) => {
    res.json({ ok: true, site });
});

// for admin later
router.put("/", requireAuth, (req, res) => {
    site = { ...site, ...req.body };
    res.json({ ok: true, site });
});

module.exports = router;