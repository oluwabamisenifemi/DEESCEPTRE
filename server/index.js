require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");
const projectRoutes = require("./routes/projects");
const testimonialRoutes = require("./routes/testimonials");
const siteRoutes = require("./routes/site");

const app = express();

app.use(cors());
app.use(express.json());

// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (req, res) =>
    res.json({ ok: true, message: "Backend is working ✅" })
);

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/site", siteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);