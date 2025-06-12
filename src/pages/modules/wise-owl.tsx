import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  MessageSquare,
  Bell,
  Star,
  Users,
  Calendar,
  Lock,
} from 'lucide-react';
// YouTubeEmbed nije korišten u ovom kodu, ali ostaje ako je potreban za druge module.
// import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next'; // Dodano za internacionalizaciju

const WiseOwlDetail: React.FC = () => {
  const { t } = useTranslation();
  const id = 'wise-owl';
  const currentIndex = modulesList.findIndex((m) => m.id === id);
  const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

  const accentColor = modulesList[currentIndex]?.color || '#008dea';

  const moduleData: { [key: string]: any } = {
    'wise-owl': {
      id: 'wise-owl',
      title: t('wiseOwlDetail.title', 'Wise Owl'),
      description: t(
        'wiseOwlDetail.description',
        'Receive daily motivational quotes and helpful tips straight to your device.'
      ),
      subtitle: t(
        'wiseOwlDetail.subtitle',
        'Start your day with inspiration curated for your community.'
      ),
      extendedDescription: t(
        'wiseOwlDetail.extendedDescription',
        'Wise Owl delivers handpicked quotes, quick advice, and mental wellness tips every morning. Save your favorites, share with neighbors, and track your personal growth over time.'
      ),
      highlights: [
        {
          icon: MessageSquare,
          title: t('wiseOwlDetail.highlights.dailyInspiration.title', 'Daily Inspiration'),
          description: t(
            'wiseOwlDetail.highlights.dailyInspiration.description',
            'Receive a new motivational quote every morning.'
          ),
        },
        {
          icon: Bell,
          title: t('wiseOwlDetail.highlights.notifications.title', 'Notifications'),
          description: t(
            'wiseOwlDetail.highlights.notifications.description',
            'Enable push notifications to never miss a quote.'
          ),
        },
        {
          icon: Star,
          title: t('wiseOwlDetail.highlights.favoriteQuotes.title', 'Favorite Quotes'),
          description: t(
            'wiseOwlDetail.highlights.favoriteQuotes.description',
            'Save and revisit your favorite quotes any time.'
          ),
        },
        {
          icon: Users,
          title: t('wiseOwlDetail.highlights.shareWithNeighbors.title', 'Share with Neighbors'),
          description: t(
            'wiseOwlDetail.highlights.shareWithNeighbors.description',
            'Share inspiring quotes directly with your community.'
          ),
        },
        {
          icon: Calendar,
          title: t('wiseOwlDetail.highlights.quoteHistory.title', 'Quote History'),
          description: t(
            'wiseOwlDetail.highlights.quoteHistory.description',
            'Browse past quotes via the integrated archive.'
          ),
        },
        {
          icon: Lock,
          title: t('wiseOwlDetail.highlights.privacyFirst.title', 'Privacy First'),
          description: t(
            'wiseOwlDetail.highlights.privacyFirst.description',
            'Your preferences and data are protected and private.'
          ),
        },
      ],
      testimonial: {
        quote: t(
          'wiseOwlDetail.testimonial.quote',
          '“Wise Owl brightens my mornings and keeps me motivated throughout the week.”'
        ),
        author: t('wiseOwlDetail.testimonial.author', 'Engaged Resident'),
      },
      screenshot: '/assets/Education_1.jpg',
      faq: [
        {
          question: t('wiseOwlDetail.faq.q1', 'How often do I receive quotes?'),
          answer: t(
            'wiseOwlDetail.faq.a1',
            'Quotes are delivered daily at a time you choose in settings.'
          ),
        },
        {
          question: t('wiseOwlDetail.faq.q2', 'Can I share quotes?'),
          answer: t(
            'wiseOwlDetail.faq.a2',
            'Yes, tap the share icon to send quotes to neighbors or external apps.'
          ),
        },
        {
          question: t('wiseOwlDetail.faq.q3', 'How do I save favorite quotes?'),
          answer: t(
            'wiseOwlDetail.faq.a3',
            'Tap the star icon on any quote to add it to your Favorites.'
          ),
        },
        {
          question: t('wiseOwlDetail.faq.q4', 'Can I browse previous quotes?'),
          answer: t(
            'wiseOwlDetail.faq.a4',
            'Yes, the Quote History section lets you browse all past daily quotes.'
          ),
        },
        {
          question: t('wiseOwlDetail.faq.q5', 'Is my data secure?'),
          answer: t(
            'wiseOwlDetail.faq.a5',
            'All data and preferences are encrypted and only accessible by you.'
          ),
        },
      ],
    },
  };

  const module = moduleData['wise-owl'];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-inter">
            <Link
              to="/modules"
              className="text-[#008dea] hover:text-[#006bbd] flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              {t('wiseOwlDetail.breadcrumb.allModules', 'All Modules')}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{module.title}</span>
          </div>
        </div>
      </section>

      <ModuleNav currentId="wise-owl" />

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src={module.screenshot}
                alt={t('wiseOwlDetail.hero.imageAlt', 'Wise Owl module mock-up')}
                className={
                  'max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[' +
                  accentColor +
                  '] object-contain'
                }
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start mb-4">
                <MessageSquare size={56} className={'text-[' + accentColor + ']'} />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                  {t('wiseOwlDetail.hero.heading', {
                    defaultValue: '{{moduleTitle}} – Feed the Mind, Inspire the Community',
                    moduleTitle: module.title,
                  })}
                </h1>
                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-3">
                  {module.description}
                </p>
                {module.subtitle && (
                  <p className="font-inter text-base lg:text-lg text-gray-500 max-w-prose mx-auto lg:mx-0">
                    {module.subtitle}
                  </p>
                )}
                {module.extendedDescription && (
                  <p className="font-inter text-base lg:text-lg text-gray-600 max-w-prose mx-auto lg:mx-0 mt-4">
                    {module.extendedDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {module.highlights && (
        <section className="py-12 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                {t('wiseOwlDetail.highlightsSection.title', 'Highlights')}
              </h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {module.highlights.map((item: any, idx: number) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <IconComponent size={32} className={'mb-3 text-[' + accentColor + ']'} />
                    <h3 className="font-poppins font-semibold text-base lg:text-lg text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm lg:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {module.testimonial && (
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <Card className="p-6 text-center bg-gray-50">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-inter text-base lg:text-lg text-gray-700 mb-2">
                  {module.testimonial.quote}
                </blockquote>
                <p className="font-poppins font-semibold text-gray-900 text-sm lg:text-base">
                  {module.testimonial.author}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* FAQ */}
      {module.faq && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                {t('wiseOwlDetail.faqSection.title', {
                  defaultValue: 'FAQ – {{moduleTitle}}',
                  moduleTitle: module.title,
                })}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {module.faq.map((item: any, idx: number) => (
                  <AccordionItem key={idx} value={`faq-item-${idx}`}>
                    <AccordionTrigger className="font-poppins font-medium text-left py-2">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-gray-600 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default WiseOwlDetail;
