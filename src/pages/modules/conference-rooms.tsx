import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { useTranslation } from 'react-i18next'; // Dodano za internacionalizaciju

const Alarm: React.FC = () => {
  const { t } = useTranslation(); // Inicijalizacija useTranslation hooka

  return (
    <Layout>
      <ModuleNav currentId="alarm" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl text-gray-900">
            {/* Tekst je sada omotan t() funkcijom za prijevod */}
            {t('alarm.underConstruction', 'This module is still under construction with help from our users\' feedback. Coming soon!')}
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Alarm;
