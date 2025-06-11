// This hook assumes the Google Translate widget is already
// loaded on the page. It simply exposes a translateTo(lang)
// function that updates the hidden select element injected by
// the widget. The component using this hook should ensure the
// script has been loaded (see index.html).

/**
 * Returns a function to translate the page to the given language code.
 * If the Google widget has not loaded yet, the translation will be
 * retried until it becomes available.
 */
export function useGoogleTranslate() {
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

  return translateTo;
}
