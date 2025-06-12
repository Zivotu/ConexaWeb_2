import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowLeft,
    Tag,
    Search,
    MessageSquare,
    Bell,
    Users,
    CreditCard,
    Star,
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next'; // Dodano za internacionalizaciju

const MarketplaceDetail: React.FC = () => {
    const { t } = useTranslation(); // Inicijalizacija useTranslation hooka
    const id = 'marketplace';
    const currentIndex = modulesList.findIndex((m) => m.id === id);
    const accentColor = modulesList[currentIndex].color;

    const moduleData: { [key: string]: any } = {
        marketplace: {
            id: 'marketplace',
            // Naslov modula je sada preveden
            title: t('marketplaceDetail.title', 'Marketplace'),
            // Opis modula je sada preveden
            description: t('marketplaceDetail.description', 'A secure community marketplace to buy, sell, or trade items with your neighbors.'),
            // Podnaslov modula je sada preveden
            subtitle: t('marketplaceDetail.subtitle', 'From furniture to electronics, list and discover items within your building or neighborhood.'),
            // Prošireni opis je sada preveden
            extendedDescription: t('marketplaceDetail.extendedDescription', 'List items in seconds, chat securely, schedule pickup, and manage your listings—all within a private network of verified residents. With built-in search, categories, and instant notifications, Marketplace brings local commerce right to your fingertips.'),
            highlights: [
                {
                    icon: Tag,
                    title: t('marketplaceDetail.highlights.listItemsEasily.title', 'List Items Easily'),
                    description: t('marketplaceDetail.highlights.listItemsEasily.description', 'Create listings with photos, descriptions, and prices in seconds.'),
                },
                {
                    icon: Search,
                    title: t('marketplaceDetail.highlights.searchFilter.title', 'Search & Filter'),
                    description: t('marketplaceDetail.highlights.searchFilter.description', 'Find items by category, keyword, or price range.'),
                },
                {
                    icon: MessageSquare,
                    title: t('marketplaceDetail.highlights.inAppMessaging.title', 'In-App Messaging'),
                    description: t('marketplaceDetail.highlights.inAppMessaging.description', 'Chat securely with buyers or sellers to negotiate and arrange details.'),
                },
                {
                    icon: Bell,
                    title: t('marketplaceDetail.highlights.instantAlerts.title', 'Instant Alerts'),
                    description: t('marketplaceDetail.highlights.instantAlerts.description', 'Get notified when new items match your interests.'),
                },
                {
                    icon: Users,
                    title: t('marketplaceDetail.highlights.trustSafety.title', 'Trust & Safety'),
                    description: t('marketplaceDetail.highlights.trustSafety.description', 'Only verified residents can buy or sell to ensure a safe environment.'),
                },
                {
                    icon: CreditCard,
                    title: t('marketplaceDetail.highlights.secureTransactions.title', 'Secure Transactions'),
                    description: t('marketplaceDetail.highlights.secureTransactions.description', 'Handle payments through the app for peace of mind.'),
                },
            ],
            testimonial: {
                quote: t('marketplaceDetail.testimonial.quote', '“I sold my old bicycle within hours and bought a bookshelf from my neighbor seamlessly!”'),
                author: t('marketplaceDetail.testimonial.author', 'Happy Resident'),
            },
            screenshot: '/assets/Marketplace_1.jpg',
            faq: [
                {
                    question: t('marketplaceDetail.faq.q1', 'Who can use Marketplace?'),
                    answer: t('marketplaceDetail.faq.a1', 'Any verified resident of the building or neighborhood can buy and sell items.'),
                },
                {
                    question: t('marketplaceDetail.faq.q2', 'How do I list an item?'),
                    answer: t('marketplaceDetail.faq.a2', 'Tap “New Listing,” upload photos, add title, description, price, and publish.'),
                },
                {
                    question: t('marketplaceDetail.faq.q3', 'How do I search for items?'),
                    answer: t('marketplaceDetail.faq.a3', 'Use the search bar to filter by keyword, category, or price.'),
                },
                {
                    question: t('marketplaceDetail.faq.q4', 'How are payments handled?'),
                    answer: t('marketplaceDetail.faq.a4', 'Payments can be arranged via in-app secure transactions or in-person at pickup.'),
                },
                {
                    question: t('marketplaceDetail.faq.q5', 'Can I negotiate price?'),
                    answer: t('marketplaceDetail.faq.a5', 'Yes—use the in-app chat to discuss pricing and meetups.'),
                },
            ],
        },
    };

    const module = moduleData['marketplace'];

    return (
        <Layout>
            {/* Breadcrumb */}
            <section className="bg-[#f5f5f5] py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-2 text-sm font-inter">
                        <Link
                            to="/modules"
                            className="text-[#2c42aa] hover:text-[#1e358a] flex items-center"
                        >
                            <ArrowLeft size={16} className="mr-1" />
                            {t('marketplaceDetail.breadcrumb.allModules', 'All Modules')}
                        </Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-700">{module.title}</span> {/* Module title is already translated */}
                    </div>
                </div>
            </section>

            <ModuleNav currentId="marketplace" />

            {/* Hero Section (Image & Text) */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
                        {/* Image */}
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                            <img
                                src={module.screenshot}
                                alt={t('marketplaceDetail.hero.imageAlt', 'Marketplace mock-up')}
                                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#2c42aa] object-contain"
                            />
                        </div>
                        {/* Text */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <Tag size={56} className="text-[#2c42aa]" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                                    {/* Naslov je sada u potpunosti unutar t() funkcije */}
                                    {t('marketplaceDetail.hero.heading', '{{moduleTitle}} – Buy, Sell, and Trade Locally', { moduleTitle: module.title })}
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
            <section className="py-12 bg-[#f5f5f5]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                            {t('marketplaceDetail.highlightsSection.title', 'Highlights')}
                        </h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {module.highlights.map((item: any, idx: number) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <Icon size={32} className="mb-3 text-[#2c42aa]" />
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
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                            {t('marketplaceDetail.faqSection.title', 'FAQ – {{moduleTitle}}', { moduleTitle: module.title })}
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
        </Layout>
    );
};

export default MarketplaceDetail;
