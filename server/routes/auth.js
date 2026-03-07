const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  console.log("LOGIN HIT");
  console.log("BODY:", req.body);
  console.log("ENV EMAIL:", process.env.ADMIN_EMAIL);
  console.log("ENV PASSWORD EXISTS:", !!process.env.ADMIN_PASSWORD);
  console.log("ENV JWT EXISTS:", !!process.env.JWT_SECRET);

  try {
    const { email, password } = req.body || {};

    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
      console.error("❌ ENV VARS MISSING");
      return res.status(500).json({
        error: "Missing env vars (ADMIN_EMAIL / ADMIN_PASSWORD / JWT_SECRET)",
      });
    }

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    if (
      email.trim() !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("✅ LOGIN SUCCESS");
    return res.json({ token });

  } catch (err) {
    console.error("🔥 LOGIN CRASH:", err);
    return res.status(500).json({
      error: "Server crashed during login",
      details: err.message,
    });
  }
});

module.exports = router;