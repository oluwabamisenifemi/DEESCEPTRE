const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MAX_SIZE = 1920; // longest side, in pixels

// Resizes an uploaded image and saves it as a small .webp file.
// Returns the new file name. If anything goes wrong, the original
// file is kept and its original name is returned.
async function shrinkImage(filePath) {
  const dir = path.dirname(filePath);
  const originalName = path.basename(filePath);
  const newName = originalName.replace(/\.[^.]+$/, "") + ".webp";
  const newPath = path.join(dir, newName);

  try {
    await sharp(filePath)
      .rotate() // respect phone-photo orientation
      .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(newPath + ".tmp");

    fs.renameSync(newPath + ".tmp", newPath);
    if (newPath !== filePath) fs.unlinkSync(filePath);
    return newName;
  } catch (err) {
    console.error("Image shrink failed, keeping original:", err.message);
    if (fs.existsSync(newPath + ".tmp")) fs.unlinkSync(newPath + ".tmp");
    return originalName;
  }
}

module.exports = shrinkImage;