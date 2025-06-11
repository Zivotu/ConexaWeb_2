import React, { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const LanguageSelector: React.FC = () => {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hr,de,es,fr,pt,nl,ru,ja,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />
      <select onChange={handleChange} defaultValue="en">
        <option value="en">English</option>
        <option value="hr">Hrvatski</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
        <option value="nl">Nederlands</option>
        <option value="ru">Русский</option>
        <option value="ja">日本語</option>
        <option value="ar">العربية</option>
      </select>
    </>
  );
};

export default LanguageSelector;
