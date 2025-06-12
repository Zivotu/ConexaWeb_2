import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowLeft,
    Car,
    Calendar,
    Bell,
    Users,
    MapPin,
    Lock,
    Star,
} from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next'; // Dodano za internacionalizaciju

const ParkingSharingDetail: React.FC = () => {
    const { t } = useTranslation(); // Inicijalizacija useTranslation hooka
    const id = 'parking-sharing';
    const currentIndex = modulesList.findIndex((m) => m.id === id);
    // Pretpostavljamo da su prevModule i nextModule zadržani iako se ne koriste u ovom kodu
    const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
    const nextModule =
        currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;

    // Boja akcenta za modul, pretpostavljam da je definirana u modulesList
    const accentColor = modulesList[currentIndex]?.color || '#41aa45'; // Dodana fallback vrijednost

    const moduleData: { [key: string]: any } = {
        'parking-sharing': {
            id: 'parking-sharing',
            title: t('parkingSharingDetail.title', 'Parking Sharing'),
            description: t('parkingSharingDetail.description', 'Find and share parking spots with your neighbors effortlessly.'),
            subtitle: t('parkingSharingDetail.subtitle', 'Maximize community parking by sharing unused spaces.'),
            extendedDescription: t('parkingSharingDetail.extendedDescription', 'Whether you have a driveway you don’t use all day or need a spot close to home, Parking Sharing connects you with verified neighbors. List your space or reserve one in seconds, all within a secure, private community platform.'),
            youtubeVideoId: 'moH4zKk0Nu0',
            highlights: [
                {
                    icon: Car,
                    title: t('parkingSharingDetail.highlights.listYourSpace.title', 'List Your Space'),
                    description: t('parkingSharingDetail.highlights.listYourSpace.description', 'Share your unused parking spot with verified neighbors and earn rewards.'),
                },
                {
                    icon: Calendar,
                    title: t('parkingSharingDetail.highlights.easyReservations.title', 'Easy Reservations'),
                    description: t('parkingSharingDetail.highlights.easyReservations.description', 'Reserve a spot for any date and time through the integrated calendar.'),
                },
                {
                    icon: Bell,
                    title: t('parkingSharingDetail.highlights.instantNotifications.title', 'Instant Notifications'),
                    description: t('parkingSharingDetail.highlights.instantNotifications.description', 'Get real-time alerts when your reservation is confirmed or canceled.'),
                },
                {
                    icon: Users,
                    title: t('parkingSharingDetail.highlights.communityVerified.title', 'Community Verified'),
                    description: t('parkingSharingDetail.highlights.communityVerified.description', 'Only neighbors can join to ensure trust and security.'),
                },
                {
                    icon: MapPin,
                    title: t('parkingSharingDetail.highlights.mapIntegration.title', 'Map Integration'),
                    description: t('parkingSharingDetail.highlights.mapIntegration.description', 'Visualize available spots on an interactive neighborhood map.'),
                },
                {
                    icon: Lock,
                    title: t('parkingSharingDetail.highlights.secureTransactions.title', 'Secure Transactions'),
                    description: t('parkingSharingDetail.highlights.secureTransactions.description', 'All payments and data are encrypted for your safety.'),
                },
            ],
            testimonial: {
                quote: t('parkingSharingDetail.testimonial.quote', '“I found a parking spot next to my apartment within minutes. The community is amazing!”'),
                author: t('parkingSharingDetail.testimonial.author', 'Satisfied Resident'),
            },
            screenshot: '/assets/Parking_1.jpg',
            faq: [
                {
                    question: t('parkingSharingDetail.faq.q1', 'Who can use this module?'),
                    answer: t('parkingSharingDetail.faq.a1', 'All verified residents of your building or neighborhood have access to Parking Sharing.'),
                },
                {
                    question: t('parkingSharingDetail.faq.q2', 'How do I list my parking spot?'),
                    answer: t('parkingSharingDetail.faq.a2', 'Navigate to “List Space,” add photos, set availability, and choose your price. Neighbors can then reserve it instantly.'),
                },
                {
                    question: t('parkingSharingDetail.faq.q3', 'How do I reserve a spot?'),
                    answer: t('parkingSharingDetail.faq.a3', 'Search available spots on the map, select your date and time, and confirm your reservation. You’ll receive a notification when it’s approved.'),
                },
                {
                    question: t('parkingSharingDetail.faq.q4', 'Is there a fee to use Parking Sharing?'),
                    answer: t('parkingSharingDetail.faq.a4', 'There is a small service fee on each reservation, transparently displayed before you confirm your booking.'),
                },
                {
                    question: t('parkingSharingDetail.faq.q5', 'What happens if someone cancels my reservation?'),
                    answer: t('parkingSharingDetail.faq.a5', 'You’ll receive an instant notification and can choose another nearby spot or request a refund automatically.'),
                },
            ],
        },
    };

    const module = moduleData['parking-sharing'];

    return (
        <Layout>
            {/* Breadcrumb */}
            <section className="bg-[#f5f5f5] py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-2 text-sm font-inter">
                        <Link
                            to="/modules"
                            className="text-[#41aa45] hover:text-[#339933] flex items-center"
                        >
                            <ArrowLeft size={16} className="mr-1" />
                            {t('parkingSharingDetail.breadcrumb.allModules', 'All Modules')}
                        </Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-700">{module.title}</span> {/* Naslov modula je već preveden */}
                    </div>
                </div>
            </section>

            <ModuleNav currentId="parking-sharing" />

            {/* Hero Section (Image & Text) */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
                        {/* Left column: screenshot */}
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                            <img
                                src={module.screenshot}
                                alt={t('parkingSharingDetail.hero.imageAlt', 'Parking Sharing mock-up')}
                                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#41aa45] object-contain"
                            />
                        </div>

                        {/* Right column: icon + text */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <Car size={56} className="text-[#41aa45]" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                                    {/* Naslov je sada u potpunosti unutar t() funkcije */}
                                    {t('parkingSharingDetail.hero.heading', '{{moduleTitle}} – Make Space for Your Neighbors', { moduleTitle: module.title })}
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
            {module.highlights && module.highlights.length > 0 && (
                <section className="py-12 bg-[#f5f5f5]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-8">
                            <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                                {t('parkingSharingDetail.highlightsSection.title', 'Highlights')}
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
                                        <IconComponent size={32} className="mb-3 text-[#41aa45]" />
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
            {module.faq && module.faq.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-8">
                            <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                                {t('parkingSharingDetail.faqSection.title', 'FAQ – {{moduleTitle}}', { moduleTitle: module.title })}
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

            {/* Video */}
            {module.youtubeVideoId && (
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-4">
                            <h2 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">
                                {t('parkingSharingDetail.youtubeSection.title', 'Watch a Video About Parking Sharing')}
                            </h2>
                        </div>
                        <YouTubeEmbed
                            videoId={module.youtubeVideoId}
                            title={t('parkingSharingDetail.youtubeSection.videoTitle', 'Parking Sharing Overview')}
                            className="max-w-3xl mx-auto"
                        />
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default ParkingSharingDetail;
