import { useEffect } from 'react';

/**
 * Loads the Google Translate script and returns a function to translate
 * the page to the given language code. If the Google widget has not
 * loaded yet, the translation will be retried until it becomes available.
 */
export function useGoogleTranslate(
  pageLang = 'en',
  languages = 'en,hr,de'
) {
  function apply(lang: string): boolean {
    const sel = document.querySelector('.goog-te-combo') as
      | HTMLSelectElement
      | null;
    if (sel && sel.value !== lang) {
      sel.value = lang;
      sel.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  }

  function translateTo(lang: string) {
    if (!apply(lang)) {
      const id = setInterval(() => {
        if (apply(lang)) {
          clearInterval(id);
        }
      }, 500);
    }
  }

  useEffect(() => {
    if ((window as any).google?.translate?.TranslateElement) return;

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: pageLang,
          includedLanguages: languages,
          autoDisplay: false,
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );

      const css = `
        #google_translate_element, .goog-te-combo, .goog-logo-link,
        .goog-te-gadget span, .goog-te-banner-frame,
        .goog-te-gadget-icon, .goog-te-balloon-frame,
        #goog-gt-tt { display:none!important }
        body { top:0!important }
      `;
      const style = document.createElement('style');
      style.innerHTML = css;
      document.head.appendChild(style);
    };

    const script = document.createElement('script');
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.defer = true;
    document.body.appendChild(script);
  }, [pageLang, languages]);

  return translateTo;
}
