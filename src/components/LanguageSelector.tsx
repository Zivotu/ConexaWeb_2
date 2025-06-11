import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue={i18n.language} className="border rounded p-1 text-sm">
      <option value="en">English</option>
      <option value="hr">Hrvatski</option>
    </select>
  );
};

export default LanguageSelector;
