import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored && stored !== i18n.language) {
      i18n.changeLanguage(stored);
    }
  }, [i18n]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="border border-gray-300 rounded-md p-2 text-sm bg-white text-gray-700"
    >
      <option value="en">English</option>
      <option value="hr">Hrvatski</option>
    </select>
  );
};

export default LanguageSelector;
