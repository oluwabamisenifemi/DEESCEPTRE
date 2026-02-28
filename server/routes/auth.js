const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (
        email !== process.env.ADMIN_EMAIL ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return res.status(401).json({ ok: false, error: "Invalid credentials" });
    }

    const token = jwt.sign(
        { role: "admin", email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.json({ ok: true, token });
});

module.exports = router;