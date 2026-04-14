const fs = require('fs');
const path = require('path');

// 🔧 CONFIGURACIÓN
const ROOT_DIR = 'C:\\Users\\edurz\\Downloads\\plantas';
const OUTPUT_FILE = 'plantas.md';
const BASE_PATH = '/assets/images/plantas';

// 🔥 títulos personalizados por carpeta
const CUSTOM_TITLES = {
  '02-2025': 'The Origins',
  '04-2025': 'El Cambio',
  '01-2026': 'El Apogeo',
};

function isValidFolder(name) {
  return /^\d{2}-\d{4}$/.test(name);
}

function parseFolderDate(folderName) {
  const [month, year] = folderName.split('-').map(Number);
  return new Date(year, month - 1);
}

function sortFolders(folders) {
  return folders.sort((a, b) => {
    return parseFolderDate(b) - parseFolderDate(a);
  });
}

// 🔥 ahora usa configuración
function getTitle(folder) {
  if (CUSTOM_TITLES[folder]) {
    return `## ${CUSTOM_TITLES[folder]} - ${folder}`;
  }
  return `## ${folder}`;
}

function generateMarkdown() {
  const folders = fs.readdirSync(ROOT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && isValidFolder(dirent.name))
    .map(dirent => dirent.name);

  const sortedFolders = sortFolders(folders);

  let md = `---
layout: default
---

# Plantas
`;

  for (const folder of sortedFolders) {
    const folderPath = path.join(ROOT_DIR, folder);

    const files = fs.readdirSync(folderPath)
      .filter(file => path.extname(file).toLowerCase() === '.webp')
      .sort((a, b) => parseInt(a) - parseInt(b));

    md += `\n${getTitle(folder)}\n`;

    for (const file of files) {
      const relativePath = `${BASE_PATH}/${folder}/${file}`;
      md += `![alt text](${relativePath})\n`;
    }
  }

  fs.writeFileSync(OUTPUT_FILE, md, 'utf-8');
  console.log(`✅ Markdown generado en ${OUTPUT_FILE}`);
}

generateMarkdown();