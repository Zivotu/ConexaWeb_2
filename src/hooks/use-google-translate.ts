import { useCallback, useEffect } from 'react';

export const useGoogleTranslate = () => {
  // inject Google Translate script on mount
  useEffect(() => {
    const hasTranslate = !!window.google?.translate?.TranslateElement;
    if (hasTranslate) return;

    window.googleTranslateElementInit = () => {
      if (!window.google) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hr,de',
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const translateTo = useCallback((lang: string) => {
    function apply(): boolean {
      const combo = document.querySelector<HTMLSelectElement>(
        '#google_translate_element select.goog-te-combo'
      );
      if (combo && combo.value !== lang) {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
        return true;
      }
      return !!combo;
    }

    if (!apply()) {
      const id = setInterval(() => {
        if (apply()) {
          clearInterval(id);
        }
      }, 500);
    }
  }, []);

  return translateTo;
};

export default useGoogleTranslate;
