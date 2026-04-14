const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT_DIR = 'C:\\Users\\edurz\\Downloads\\plantas'; // <-- CAMBIA ESTO

// extensiones válidas
const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function processFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  // filtrar solo imágenes
//   const images = files.filter(file =>
//     validExtensions.includes(path.extname(file).toLowerCase())
//   );

  const images = files
    .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  let counter = 1;

  for (const file of images) {
    const inputPath = path.join(folderPath, file);
    const outputPath = path.join(folderPath, `${counter}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      // borrar archivo original SOLO si no es ya webp con ese nombre
      if (inputPath !== outputPath) {
        fs.unlinkSync(inputPath);
      }

      console.log(`✔ Convertido: ${file} → ${counter}.webp`);
      counter++;
    } catch (error) {
      console.error(`❌ Error con ${file}:`, error.message);
    }
  }
}

function main() {
  const folders = fs.readdirSync(ROOT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folder of folders) {
    const folderPath = path.join(ROOT_DIR, folder);
    console.log(`\n📂 Procesando: ${folder}`);
    processFolder(folderPath);
  }
}

main();