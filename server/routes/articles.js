const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const router = express.Router();

const dataDir = path.join(__dirname, "../data");
const uploadsDir = path.join(__dirname, "../uploads/articles");
const dataFile = path.join(dataDir, "articles.json");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, "[]", "utf8");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const safeName = file.originalname
      .replace(ext, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    cb(null, `${Date.now()}-${safeName}${ext}`);
  },
});

const upload = multer({ storage });

function readArticles() {
  try {
    const raw = fs.readFileSync(dataFile, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function writeArticles(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), "utf8");
}

function makeSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

router.get("/", (req, res) => {
  const articles = readArticles().sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  res.json(articles);
});

router.get("/published", (req, res) => {
  const articles = readArticles()
    .filter((item) => item.status === "published")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json(articles);
});

router.get("/:slug", (req, res) => {
  const articles = readArticles();
  const article = articles.find((item) => item.slug === req.params.slug);

  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }

  res.json(article);
});

router.post("/", upload.single("coverImage"), (req, res) => {
  const {
    title,
    excerpt,
    content,
    author,
    category,
    status = "draft",
    mediumUrl = "",
    seoTitle = "",
    seoDescription = "",
  } = req.body;

  if (!title || !excerpt || !content) {
    return res.status(400).json({
      message: "Title, excerpt, and content are required",
    });
  }

  const articles = readArticles();
  const baseSlug = makeSlug(title);
  let slug = baseSlug;
  let counter = 1;

  while (articles.some((item) => item.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  const article = {
    id: Date.now().toString(),
    title,
    slug,
    excerpt,
    content,
    author: author || "Admin",
    category: category || "Insights",
    status,
    mediumUrl,
    seoTitle: seoTitle || title,
    seoDescription: seoDescription || excerpt,
    coverImage: req.file ? `/uploads/articles/${req.file.filename}` : "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  articles.push(article);
  writeArticles(articles);

  res.status(201).json(article);
});

router.put("/:id", upload.single("coverImage"), (req, res) => {
  const articles = readArticles();
  const index = articles.findIndex((item) => item.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Article not found" });
  }

  const existing = articles[index];

  let updatedSlug = existing.slug;

  if (req.body.title && req.body.title !== existing.title) {
    const baseSlug = makeSlug(req.body.title);
    updatedSlug = baseSlug;
    let counter = 1;

    while (
      articles.some(
        (item, i) => i !== index && item.slug === updatedSlug
      )
    ) {
      updatedSlug = `${baseSlug}-${counter}`;
      counter += 1;
    }
  }

  const updated = {
    ...existing,
    title: req.body.title || existing.title,
    slug: updatedSlug,
    excerpt: req.body.excerpt || existing.excerpt,
    content: req.body.content || existing.content,
    author: req.body.author || existing.author,
    category: req.body.category || existing.category,
    status: req.body.status || existing.status,
    mediumUrl: req.body.mediumUrl || existing.mediumUrl || "",
    seoTitle: req.body.seoTitle || existing.seoTitle,
    seoDescription: req.body.seoDescription || existing.seoDescription,
    updatedAt: new Date().toISOString(),
  };

  if (req.file) {
    updated.coverImage = `/uploads/articles/${req.file.filename}`;
  }

  articles[index] = updated;
  writeArticles(articles);

  res.json(updated);
});

router.delete("/:id", (req, res) => {
  const articles = readArticles();
  const filtered = articles.filter((item) => item.id !== req.params.id);

  if (filtered.length === articles.length) {
    return res.status(404).json({ message: "Article not found" });
  }

  writeArticles(filtered);
  res.json({ message: "Article deleted successfully" });
});

module.exports = router;