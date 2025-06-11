import React from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hr', label: 'Hrvatski' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'ru', label: 'Русский' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'العربية' },
];

const LanguageSwitcher = () => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;

    // The Google translate dropdown lives inside the translator iframe.
    const iframe = document.querySelector<HTMLIFrameElement>('iframe[title="Google Translate"]');
    const select = iframe?.contentWindow?.document.querySelector<HTMLSelectElement>('.goog-te-combo');

    if (select) {
      select.value = lang;
      // Trigger Google's handler for language switching
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <select onChange={handleChange} className="border rounded p-1 text-sm">
      {languages.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
