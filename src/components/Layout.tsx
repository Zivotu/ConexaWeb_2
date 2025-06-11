import Navigation from './Navigation';
import Footer from './Footer';
import GoogleTranslateWidget from './GoogleTranslateWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="self-end p-2">
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
