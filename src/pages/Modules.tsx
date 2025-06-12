import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Building, Users, Zap, Shield, Globe, Clock, MessageSquare,
    HelpCircle, Clipboard, FileText, Brain, Calendar, Camera,
    Bell, Volume2, Car, MapPin
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Modules = () => {
    const { t } = useTranslation();

    const modules = {
        building: [
            {
                id: 'official-notices',
                title: t('modules.building.officialNotices.title', 'Official Notices'),
                description: t('modules.building.officialNotices.description', 'Digital voting, announcements, and push alerts for building decisions'),
                icon: Building,
                features: [
                    t('modules.building.officialNotices.features.0', 'Digital polls'),
                    t('modules.building.officialNotices.features.1', 'Push notifications'),
                    t('modules.building.officialNotices.features.2', 'Voting history'),
                    t('modules.building.officialNotices.features.3', 'Admin controls')
                ]
            },
            {
                id: 'chat-room',
                title: t('modules.building.chatRoom.title', 'Chat Room'),
                description: t('modules.building.chatRoom.description', 'Closed group chat with images, reactions, and anonymous view count'),
                icon: MessageSquare,
                features: [
                    t('modules.building.chatRoom.features.0', 'Group messaging'),
                    t('modules.building.chatRoom.features.1', 'Image sharing'),
                    t('modules.building.chatRoom.features.2', 'Message reactions'),
                    t('modules.building.chatRoom.features.3', 'Anonymous viewing')
                ]
            },
            {
                id: 'quiz',
                title: t('modules.building.quiz.title', 'Quiz'),
                description: t('modules.building.quiz.description', 'Daily trivia with instant explanations and building leaderboard'),
                icon: HelpCircle,
                features: [
                    t('modules.building.quiz.features.0', 'Daily questions'),
                    t('modules.building.quiz.features.1', 'Instant feedback'),
                    t('modules.building.quiz.features.2', 'Leaderboards'),
                    t('modules.building.quiz.features.3', 'Community engagement')
                ]
            },
            {
                id: 'bulletin-board',
                title: t('modules.building.bulletinBoard.title', 'Bulletin Board'),
                description: t('modules.building.bulletinBoard.description', 'Internal vs public ads with geo-radius and micro-payments'),
                icon: Clipboard,
                features: [
                    t('modules.building.bulletinBoard.features.0', 'Internal/public ads'),
                    t('modules.building.bulletinBoard.features.1', 'Geo-targeting'),
                    t('modules.building.bulletinBoard.features.2', 'Payment integration'),
                    t('modules.building.bulletinBoard.features.3', 'Ad management')
                ]
            },
            {
                id: 'documents',
                title: t('modules.building.documents.title', 'Documents'),
                description: t('modules.building.documents.description', 'Secure PDF/DOCX repository with version history and search'),
                icon: FileText,
                features: [
                    t('modules.building.documents.features.0', 'Secure storage'),
                    t('modules.building.documents.features.1', 'Version control'),
                    t('modules.building.documents.features.2', 'Search function'),
                    t('modules.building.documents.features.3', 'Access permissions')
                ]
            },
            {
                id: 'wise-owl',
                title: t('modules.building.wiseOwl.title', 'Wise Owl'),
                description: t('modules.building.wiseOwl.description', 'Micro-learning hub starting with daily proverbs, expanding to full courses'),
                icon: Brain,
                features: [
                    t('modules.building.wiseOwl.features.0', 'Daily content'),
                    t('modules.building.wiseOwl.features.1', 'Learning paths'),
                    t('modules.building.wiseOwl.features.2', 'Progress tracking'),
                    t('modules.building.wiseOwl.features.3', 'Community wisdom')
                ]
            },
            {
                id: 'shared-tasks',
                title: t('modules.building.sharedTasks.title', 'Shared Tasks'),
                description: t('modules.building.sharedTasks.description', 'Automatic rota for cleaning, snow shovelling with easy swaps'),
                icon: Calendar,
                features: [
                    t('modules.building.sharedTasks.features.0', 'Auto scheduling'),
                    t('modules.building.sharedTasks.features.1', 'Task swapping'),
                    t('modules.building.sharedTasks.features.2', 'Push reminders'),
                    t('modules.building.sharedTasks.features.3', 'Completion tracking')
                ]
            },
            {
                id: 'security',
                title: t('modules.building.security.title', 'Security'),
                description: t('modules.building.security.description', 'Live camera feeds consolidated in one dashboard'),
                icon: Camera,
                features: [
                    t('modules.building.security.features.0', 'Live feeds'),
                    t('modules.building.security.features.1', 'Multi-camera view'),
                    t('modules.building.security.features.2', 'Recording access'),
                    t('modules.building.security.features.3', 'Security alerts')
                ]
            },
            {
                id: 'alarm',
                title: t('modules.building.alarm.title', 'Alarm'),
                description: t('modules.building.alarm.description', 'One-tap audio/video alert to every neighbour for emergencies'),
                icon: Bell,
                features: [
                    t('modules.building.alarm.features.0', 'Emergency alerts'),
                    t('modules.building.alarm.features.1', 'Audio/video alerts'),
                    t('modules.building.alarm.features.2', 'Instant broadcast'),
                    t('modules.building.alarm.features.3', 'Emergency contacts')
                ]
            },
            {
                id: 'noise-alerts',
                title: t('modules.building.noiseAlerts.title', 'Noise Alerts'),
                description: t('modules.building.noiseAlerts.description', 'Schedule noisy works with optional 4-hour advance reminders'),
                icon: Volume2,
                features: [
                    t('modules.building.noiseAlerts.features.0', 'Work scheduling'),
                    t('modules.building.noiseAlerts.features.1', 'Advance warnings'),
                    t('modules.building.noiseAlerts.features.2', 'Noise tracking'),
                    t('modules.building.noiseAlerts.features.3', 'Neighbour courtesy')
                ]
            }
        ],
        community: [
            {
                id: 'marketplace',
                title: t('modules.community.marketplace.title', 'Marketplace'),
                description: t('modules.community.marketplace.description', 'Geo-targeted offers & events with 15-day auto-expire, free NGO slots'),
                icon: Globe,
                features: [
                    t('modules.community.marketplace.features.0', 'Local offers'),
                    t('modules.community.marketplace.features.1', 'Event listings'),
                    t('modules.community.marketplace.features.2', 'Auto-expiry'),
                    t('modules.community.marketplace.features.3', 'NGO support')
                ]
            },
            {
                id: 'home-repairs',
                title: t('modules.community.homeRepairs.title', 'Home Repairs'),
                description: t('modules.community.homeRepairs.description', 'Photo fault reporting with time-slot picker and verified techs'),
                icon: Zap,
                features: [
                    t('modules.community.homeRepairs.features.0', 'Photo reporting'),
                    t('modules.community.homeRepairs.features.1', 'Verified technicians'),
                    t('modules.community.homeRepairs.features.2', 'Time booking'),
                    t('modules.community.homeRepairs.features.3', 'Service ratings')
                ]
            },
            {
                id: 'parking-sharing',
                title: t('modules.community.parkingSharing.title', 'Parking Sharing'),
                description: t('modules.community.parkingSharing.description', 'Peer-to-peer parking spot requests and approvals'),
                icon: Car,
                features: [
                    t('modules.community.parkingSharing.features.0', 'Spot sharing'),
                    t('modules.community.parkingSharing.features.1', 'Request system'),
                    t('modules.community.parkingSharing.features.2', 'Approval workflow'),
                    t('modules.community.parkingSharing.features.3', 'Usage tracking')
                ]
            },
            {
                id: 'shared-rides',
                title: t('modules.community.sharedRides.title', 'Shared Rides'),
                description: t('modules.community.sharedRides.description', 'Real-time map with offers, active rides, history, and ratings'),
                icon: MapPin,
                features: [
                    t('modules.community.sharedRides.features.0', 'Real-time tracking'),
                    t('modules.community.sharedRides.features.1', 'Ride offers'),
                    t('modules.community.sharedRides.features.2', 'Rating system'),
                    t('modules.community.sharedRides.features.3', 'Route optimization')
                ]
            },
            {
                id: 'local-posts',
                title: t('modules.community.localPosts.title', 'Local Posts'),
                description: t('modules.community.localPosts.description', 'Geo-fenced social posts with three visibility levels and anonymity'),
                icon: Users,
                features: [
                    t('modules.community.localPosts.features.0', 'Geo-fencing'),
                    t('modules.community.localPosts.features.1', 'Visibility controls'),
                    t('modules.community.localPosts.features.2', 'Anonymous posting'),
                    t('modules.community.localPosts.features.3', 'Local engagement')
                ]
            }
        ],
        special: [
            {
                id: 'business-networking',
                title: t('modules.special.businessNetworking.title', 'Business Networking'),
                description: t('modules.special.businessNetworking.description', 'Connect with local entrepreneurs and business owners (Coming 2025)'),
                icon: Building,
                features: [
                    t('modules.special.businessNetworking.features.0', 'Professional networking'),
                    t('modules.special.businessNetworking.features.1', 'Business directory'),
                    t('modules.special.businessNetworking.features.2', 'Collaboration tools'),
                    t('modules.special.businessNetworking.features.3', 'Event hosting')
                ],
                comingSoon: true
            },
            {
                id: 'conference-rooms',
                title: t('modules.special.conferenceRooms.title', 'Conference Rooms'),
                description: t('modules.special.conferenceRooms.description', 'Book shared spaces for meetings and events (Coming 2026)'),
                icon: Users,
                features: [
                    t('modules.special.conferenceRooms.features.0', 'Space booking'),
                    t('modules.special.conferenceRooms.features.1', 'Calendar integration'),
                    t('modules.special.conferenceRooms.features.2', 'Equipment management'),
                    t('modules.special.conferenceRooms.features.3', 'Usage analytics')
                ],
                comingSoon: true
            }
        ]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-conexa-light-grey to-white pt-20 pb-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6">
                        {t('modules.hero.title', 'Choose Your Modules')}
                    </h1>
                    <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('modules.hero.description', 'Activate only what your building needs. Start with essentials, add more features as your community grows.')}
                    </p>
                </div>
            </section>

            {/* Modules Tabs */}
            <section className="pt-12 pb-20 bg-white">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="building" className="max-w-7xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 mb-16 bg-gray-50 p-2 rounded-2xl shadow-sm border border-gray-200 h-16">
                            <TabsTrigger
                                value="building"
                                className="text-lg py-4 px-6 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-conexa-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-gray-100"
                            >
                                <Building className="w-5 h-5 mr-2" />
                                {t('modules.tabs.building', 'Building')}
                            </TabsTrigger>
                            <TabsTrigger
                                value="community"
                                className="text-lg py-4 px-6 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-conexa-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-gray-100"
                            >
                                <Users className="w-5 h-5 mr-2" />
                                {t('modules.tabs.community', 'Community')}
                            </TabsTrigger>
                            <TabsTrigger
                                value="special"
                                className="text-lg py-4 px-6 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-gray-100"
                            >
                                <Zap className="w-5 h-5 mr-2" />
                                {t('modules.tabs.special', 'Special')}
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="building">
                            <div className="mb-8">
                                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">{t('modules.buildingSection.title', 'Building Modules')}</h2>
                                <p className="font-inter text-gray-600">{t('modules.buildingSection.description', 'Internal building management and resident communication tools.')}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {modules.building.map((module) => {
                                    const IconComponent = module.icon;
                                    return (
                                        <Link key={module.id} to={`/modules/${module.id}`}>
                                            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                                                <CardContent className="p-6">
                                                    <div className="flex items-start space-x-4 mb-4">
                                                        <div className="p-3 rounded-lg bg-blue-100 text-conexa-primary">
                                                            <IconComponent size={24} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2 group-hover:text-conexa-primary transition-colors">
                                                                {module.title}
                                                            </h3>
                                                            <p className="font-inter text-gray-600 text-sm mb-4">
                                                                {module.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {module.features.slice(0, 3).map((feature, index) => (
                                                            <div key={index} className="flex items-center text-sm text-gray-500">
                                                                <div className="w-1.5 h-1.5 bg-conexa-primary rounded-full mr-2"></div>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                        {module.features.length > 3 && (
                                                            <div className="text-sm text-gray-400">
                                                                {t('modules.featuresMore', '+{{count}} more features', { count: module.features.length - 3 })}
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                        </TabsContent>

                        <TabsContent value="community">
                            <div className="mb-8">
                                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">{t('modules.communitySection.title', 'Community Modules')}</h2>
                                <p className="font-inter text-gray-600">{t('modules.communitySection.description', 'Connect with your local neighbourhood and surrounding community.')}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {modules.community.map((module) => {
                                    const IconComponent = module.icon;
                                    return (
                                        <Link key={module.id} to={`/modules/${module.id}`}>
                                            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                                                <CardContent className="p-6">
                                                    <div className="flex items-start space-x-4 mb-4">
                                                        <div className="p-3 rounded-lg bg-green-100 text-conexa-accent">
                                                            <IconComponent size={24} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2 group-hover:text-conexa-accent transition-colors">
                                                                {module.title}
                                                            </h3>
                                                            <p className="font-inter text-gray-600 text-sm mb-4">
                                                                {module.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {module.features.slice(0, 3).map((feature, index) => (
                                                            <div key={index} className="flex items-center text-sm text-gray-500">
                                                                <div className="w-1.5 h-1.5 bg-conexa-accent rounded-full mr-2"></div>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                        {module.features.length > 3 && (
                                                            <div className="text-sm text-gray-400">
                                                                {t('modules.featuresMore', '+{{count}} more features', { count: module.features.length - 3 })}
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                        </TabsContent>

                        <TabsContent value="special">
                            <div className="mb-8">
                                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">{t('modules.specialSection.title', 'Special Modules')}</h2>
                                <p className="font-inter text-gray-600">{t('modules.specialSection.description', 'Advanced features for professional networking and enhanced community engagement.')}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {modules.special.map((module) => {
                                    const IconComponent = module.icon;
                                    return (
                                        <Card key={module.id} className="relative h-full opacity-75">
                                            <CardContent className="p-6">
                                                <div className="flex items-start space-x-4 mb-4">
                                                    <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                                                        <IconComponent size={24} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center mb-2">
                                                            <h3 className="font-poppins font-semibold text-lg text-gray-900 mr-2">
                                                                {module.title}
                                                            </h3>
                                                            {module.comingSoon && (
                                                                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                                                                    {t('modules.comingSoon', 'Coming Soon')}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="font-inter text-gray-600 text-sm mb-4">
                                                            {module.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    {module.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center text-sm text-gray-500">
                                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-conexa-light-grey">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-4">
                        {t('modules.cta.title', 'Ready to Get Started?')}
                    </h2>
                    <p className="font-inter text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        {t('modules.cta.description', 'Start with our free plan and activate modules as your community grows.')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pricing">
                            <Button className="bg-conexa-primary hover:bg-blue-700 text-lg px-8 py-6 transition-all hover:scale-105">
                                {t('modules.cta.viewPricing', 'View Pricing')}
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" className="text-lg px-8 py-6 transition-all hover:scale-105">
                                {t('modules.cta.contactSales', 'Contact Sales')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Modules;