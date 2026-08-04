require("dotenv").config();


const express = require("express");
const path = require("path");
const cors = require("cors");
const articlesRoutes = require("./routes/articles");

const app = express();
const enquiryRoute = require("./routes/enquiry");

/* =====================
   MIDDLEWARE
===================== */
app.use(cors());
app.use(express.json());
app.use("/api/enquiry", enquiryRoute);
/* =====================
   STATIC FILES
===================== */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* =====================
   SAFE REQUIRE (prints the real crash)
===================== */
function safeRequire(label, modulePath) {
  try {
    return require(modulePath);
  } catch (err) {
    console.error(`\n❌ Failed to load: ${label}`);
    console.error(`   Path: ${modulePath}\n`);
    console.error(err);
    process.exit(1);
  }
}

/* =====================
   ROUTES
===================== */
app.use("/api/auth", safeRequire("auth routes", "./routes/auth"));
app.use("/api/upload", safeRequire("upload routes", "./routes/upload"));
app.use("/api/site", safeRequire("site routes", "./routes/site"));
app.use("/api/works", safeRequire("works routes", "./routes/works"));
app.use("/api/properties", safeRequire("properties routes", "./routes/properties"));
app.use("/uploads", express.static("uploads"));
app.use("/api/articles", articlesRoutes);

/* =====================
   START SERVER
===================== */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});