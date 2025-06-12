import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ModuleNav from '@/components/ModuleNav';
import { modulesList } from '@/lib/modules';
import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowLeft,
    Calendar,
    Bell,
    MessageSquare,
    Users,
    Clock,
    History,
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

const NoiseAlertsDetail: React.FC = () => {
    const { t } = useTranslation(); // Inicijalizacija useTranslation hooka
    const id = 'noise-alerts';
    const currentIndex = modulesList.findIndex((m) => m.id === id);
    const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null; // Zadržano, iako se ne koristi u trenutnom kodu
    const nextModule =
        currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null; // Zadržano, iako se ne koristi u trenutnom kodu

    const accentColor = modulesList[currentIndex].color;

    const moduleData: { [key: string]: any } = {
        'noise-alerts': {
            id: 'noise-alerts',
            title: t('noiseAlertsDetail.title', 'Noise Alerts – Respect Your Neighbors, Keep the Peace'),
            description: t('noiseAlertsDetail.description', 'Planning a party or renovation? Let your neighbors know in advance – pick a date and time, and everyone gets notified. Peace begins with communication.'),
            subtitle: t('noiseAlertsDetail.subtitle', ''), // Originalno prazan string, ostaje prazan ali prevediv
            extendedDescription: t('noiseAlertsDetail.extendedDescription', 'Avoid unexpected disturbances by scheduling any potentially noisy activity ahead of time. Select a time slot, describe what you’re planning, and all verified residents receive a notification. Neighbors can acknowledge or request adjustments to ensure harmony—keeping your building calm and connected.'),
            youtubeVideoId: 'fjtRJPjf3WY',
            highlights: [
                {
                    icon: Calendar,
                    title: t('noiseAlertsDetail.highlights.scheduleNoiseEvents.title', 'Schedule Noise Events'),
                    description: t('noiseAlertsDetail.highlights.scheduleNoiseEvents.description', 'Create a new alert by choosing date, time, and activity—neighbors see it immediately.'),
                },
                {
                    icon: Bell,
                    title: t('noiseAlertsDetail.highlights.realTimeNotifications.title', 'Real-Time Notifications'),
                    description: t('noiseAlertsDetail.highlights.realTimeNotifications.description', 'Everyone in the building receives a push notification when a new noise alert is posted.'),
                },
                {
                    icon: MessageSquare,
                    title: t('noiseAlertsDetail.highlights.acknowledgementSystem.title', 'Acknowledgement System'),
                    description: t('noiseAlertsDetail.highlights.acknowledgementSystem.description', 'Neighbors can confirm they’ve seen your alert or send a request if the time isn’t convenient.'),
                },
                {
                    icon: Users,
                    title: t('noiseAlertsDetail.highlights.verifiedCommunity.title', 'Verified Community'),
                    description: t('noiseAlertsDetail.highlights.verifiedCommunity.description', 'Only registered residents and admins can post or respond, ensuring genuine interactions.'),
                },
                {
                    icon: Clock,
                    title: t('noiseAlertsDetail.highlights.quietHoursOverride.title', 'Quiet Hours Override'),
                    description: t('noiseAlertsDetail.highlights.quietHoursOverride.description', 'Automatic reminders are disabled during designated quiet hours unless explicitly overridden by admins.'),
                },
                {
                    icon: History,
                    title: t('noiseAlertsDetail.highlights.alertHistoryLog.title', 'Alert History Log'),
                    description: t('noiseAlertsDetail.highlights.alertHistoryLog.description', 'View past alerts, including acknowledgements and any follow-up notes, for full transparency.'),
                },
            ],
            testimonial: {
                quote: t('noiseAlertsDetail.testimonial.quote', '“With Noise Alerts, I never get surprised by late-night renovations. Love the peace of mind!”'),
                author: t('noiseAlertsDetail.testimonial.author', 'Community Member'),
            },
            screenshot: '/assets/Noise_1.jpg',
            faq: [
                {
                    question: t('noiseAlertsDetail.faq.q1', 'Who can post a noise alert?'),
                    answer: t('noiseAlertsDetail.faq.a1', 'Any verified resident or building administrator can schedule a noise alert for their apartment or unit.'),
                },
                {
                    question: t('noiseAlertsDetail.faq.q2', 'How far in advance should I schedule?'),
                    answer: t('noiseAlertsDetail.faq.a2', 'We recommend posting at least 24 hours before your planned activity. However, you can schedule up to two weeks ahead if needed.'),
                },
                {
                    question: t('noiseAlertsDetail.faq.q3', 'Can I modify or cancel an alert?'),
                    answer: t('noiseAlertsDetail.faq.a3', 'Yes—open the alert from “My Alerts,” choose “Edit” to adjust time or details, or tap “Cancel” to withdraw the notification.'),
                },
                {
                    question: t('noiseAlertsDetail.faq.q4', 'Will I be notified if neighbors respond?'),
                    answer: t('noiseAlertsDetail.faq.a4', 'Absolutely. If someone requests an adjustment or confirms they’ve seen your alert, you’ll receive a real-time notification.'),
                },
                {
                    question: t('noiseAlertsDetail.faq.q5', 'How are quiet hours handled?'),
                    answer: t('noiseAlertsDetail.faq.a5', 'During designated quiet hours, posting a new alert requires admin approval. All building members see the pending notification once approved.'),
                },
            ],
        },
    };

    const module = moduleData['noise-alerts'];

    return (
        <Layout>
            {/* Breadcrumb */}
            <section className="bg-[#f5f5f5] py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-2 text-sm font-inter">
                        <Link
                            to="/modules"
                            className="text-[#ff6f42] hover:text-[#e65a2f] flex items-center"
                        >
                            <ArrowLeft size={16} className="mr-1" />
                            {t('noiseAlertsDetail.breadcrumb.allModules', 'All Modules')}
                        </Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-700">{module.title}</span>
                    </div>
                </div>
            </section>

            <ModuleNav currentId="noise-alerts" />

            {/* Hero Section (Image & Text) */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
                        {/* Left column: screenshot */}
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                            <img
                                src={module.screenshot}
                                alt={t('noiseAlertsDetail.hero.imageAlt', 'Noise Alerts mock-up')}
                                className="max-h-[500px] w-auto rounded-xl shadow-2xl ring-4 ring-[#ff6f42] object-contain"
                            />
                        </div>

                        {/* Right column: icon + text */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <Calendar size={56} className="text-[#ff6f42]" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h1 className="font-poppins font-semibold text-3xl lg:text-4xl text-gray-900 mb-4">
                                    {module.title}
                                </h1>
                                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-3">
                                    {module.description}
                                </p>
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
                                {t('noiseAlertsDetail.highlightsSection.title', 'Highlights')}
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
                                        <IconComponent size={32} className="mb-3 text-[#ff6f42]" />
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
                                {t('noiseAlertsDetail.faqSection.title', 'FAQ – {{moduleTitle}}', { moduleTitle: module.title })}
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
                                {t('noiseAlertsDetail.youtubeSection.title', 'Watch a Video About Noise Alerts')}
                            </h2>
                        </div>
                        <YouTubeEmbed
                            videoId={module.youtubeVideoId}
                            title={t('noiseAlertsDetail.youtubeSection.videoTitle', 'Noise Alerts Overview')}
                            className="max-w-3xl mx-auto"
                        />
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default NoiseAlertsDetail;
