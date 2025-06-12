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
  'src/lib/modules.ts',
];

// 2) Parsiraj svaki file i izvuci sve t('key','fallback') pozive
const translations = {};

files.forEach(filePath => {
  // Učitamo sadržaj fajla
  const content = fs.readFileSync(filePath, 'utf-8');

  // Regex koji podržava escaped znakove unutar fallback-a
  const re = /t\(\s*['"]([^'"]+)['"]\s*,\s*(['"`])((?:\\.|(?!\2).)*)\2\s*\)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const fullKey = m[1];           // npr. "contact.hero.subtitle"
    let original = m[3];            // npr. "Ready to transform... We\'d love..."
    // maknemo escape slashove
    original = original.replace(/\\'/g, "'").replace(/\\"/g, '"').trim();

    const [ns, ...rest] = fullKey.split('.');
    const subKey = rest.join('.');
    translations[ns] = translations[ns] || {};
    translations[ns][subKey] = original;
  }
});

// 3) Prevedi skupove tekstova
(async () => {
  const hrTranslations = {};

  for (const ns of Object.keys(translations)) {
    const entries = translations[ns];
    const texts = Object.values(entries);
    if (!texts.length) continue;

    console.log(`🔄 Translating ${texts.length} strings for "${ns}"...`);
    let translated;
    try {
      const res = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        { q: texts, target: 'hr', format: 'text' }
      );
      translated = res.data.data.translations.map(t => t.translatedText);
    } catch (err) {
      console.error(`❌ Error translating "${ns}":`, err.message);
      continue;
    }

    hrTranslations[ns] = {};
    Object.keys(entries).forEach((sub, i) => {
      hrTranslations[ns][sub] = translated[i];
    });
  }

  // 4) Merge u postojeći JSON
  const outPath = path.resolve('src/locales/hr/translation.json');
  let existing = {};
  if (fs.existsSync(outPath)) {
    existing = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
  }

  const merged = { ...existing, ...hrTranslations };
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`✅ Croatian translations written to ${outPath}`);
})();
