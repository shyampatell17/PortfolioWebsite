const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'public', 'files');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all files from source to destination
fs.readdirSync(sourceDir).forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied ${file} to public/files/`);
}); 