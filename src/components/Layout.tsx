import Navigation from './Navigation';
import Footer from './Footer';
import GoogleTranslateWidget from './GoogleTranslateWidget';
import LanguageSwitcher from './LanguageSwitcher';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="self-end p-2 flex gap-2 items-center">
        <LanguageSwitcher />
        <GoogleTranslateWidget />
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
