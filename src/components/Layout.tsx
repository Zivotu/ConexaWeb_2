import Navigation from './Navigation';
import Footer from './Footer';
import LanguageSelector from './LanguageSelector';
import { useGoogleTranslate } from '@/hooks/use-google-translate';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const translateTo = useGoogleTranslate();

  useEffect(() => {
    const userLang = (navigator.language || '').substring(0, 2);
    const first = !localStorage.getItem('conexaLangSet');
    if (first && ['hr', 'en', 'de'].includes(userLang)) {
      translateTo(userLang);
      localStorage.setItem('conexaLangSet', '1');
    }
  }, [translateTo]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="self-end p-2">
        <LanguageSelector onSelect={translateTo} />
        <div id="google_translate_element" className="mt-2" />
      </div>
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
