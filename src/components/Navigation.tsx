const [selectedLang, setSelectedLang] = useState('');

const applyTranslation = (lang: string): boolean => {
  const sel = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (sel && sel.value !== lang) {
    sel.value = lang;
    sel.dispatchEvent(new Event('change'));
    return true;
  }
  return false;
};

const translateTo = (lang: string) => {
  setSelectedLang(lang);
  applyTranslation(lang);
};

useEffect(() => {
  if (!selectedLang) return;
  if (!applyTranslation(selectedLang)) {
    const id = setInterval(() => {
      if (applyTranslation(selectedLang)) {
        clearInterval(id);
      }
    }, 500);
    return () => clearInterval(id);
  }
}, [selectedLang]);
export default Navigation;
