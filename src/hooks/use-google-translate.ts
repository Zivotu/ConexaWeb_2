import { useCallback, useEffect } from 'react';

export const useGoogleTranslate = () => {
  // inject Google Translate script on mount
  useEffect(() => {

    const initTranslate = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const combo = document.querySelector(
        '#google_translate_element select.goog-te-combo'
      );
      if (combo) return; // already initialized

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

    if (window.google?.translate?.TranslateElement) {
      initTranslate();
      return;
    }

    window.googleTranslateElementInit = initTranslate;
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
