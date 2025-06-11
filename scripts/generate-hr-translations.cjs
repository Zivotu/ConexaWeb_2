#!/usr/bin/env node


require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');

if (!process.env.GOOGLE_API_KEY) {
  console.error('❌ Please set GOOGLE_API_KEY in your .env');
  process.exit(1);
}
const apiKey = process.env.GOOGLE_API_KEY;

// 1) Popis fajlova (relativno na root)
const files = [
  'src/components/Footer.tsx',
  'src/pages/About.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Index.tsx',
  'src/pages/Contact.tsx',
  'src/pages/NotFound.tsx',
];

// 2) Parsiraj svaki file i izvuci sve t('file.key','fallback') pozive
const translations = {}; // { fileKey: { subKey: originalText, ... }, ... }

files.forEach(filePath => {
  const src = fs.readFileSync(filePath, 'utf-8');
  const re = /t\(\s*['"]([^'"]+)['"]\s*,\s*['"`]([^'"`]+?)['"`]\s*\)/g;
  let m;
  while ((m = re.exec(src))) {
    const fullKey = m[1];           // e.g. "footer.description"
    const original = m[2].trim();   // e.g. "Transform..."
    const [fileKey, ...rest] = fullKey.split('.');
    const subKey = rest.join('.');
    translations[fileKey] = translations[fileKey] || {};
    translations[fileKey][subKey] = original;
  }
});

// 3) Prevedi svaki skup tekstova putem Google Translate API-ja
(async () => {
  const hrTranslations = {};

  for (const fileKey of Object.keys(translations)) {
    const entries = translations[fileKey];
    const texts = Object.values(entries);
    console.log(`🔄 Translating ${texts.length} strings for "${fileKey}" to Croatian...`);

    const res = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      { q: texts, target: 'hr', format: 'text' }
    );

    const translated = res.data.data.translations.map(t => t.translatedText);
    const fileHr = {};
    Object.keys(entries).forEach((subKey, i) => {
      fileHr[subKey] = translated[i];
    });

    hrTranslations[fileKey] = fileHr;
  }

  // 4) Učitaj postojeći JSON (ako postoji)
  const outPath = path.resolve('src/locales/hr/translation.json');
  let existing = {};
  if (fs.existsSync(outPath)) {
    existing = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
  }

  // 5) Merge i spremi novi JSON
  const merged = { ...existing, ...hrTranslations };
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`✅ Croatian translations written to ${outPath}`);
})();
