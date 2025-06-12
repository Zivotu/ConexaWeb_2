// src/pages/Benefits.jsx
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Eye, Zap, Users, Settings, MapPin, Clock,
  MessageSquare, FileText, HelpCircle, Bell, Volume2,
  Car, ShoppingBag, BookOpen, ShieldAlert, Calendar, Vote
} from 'lucide-react';

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Eye,
      title: t('benefits.items.0.title', 'Transparency'),
      subtitle: t('benefits.items.0.subtitle', 'No hidden decisions'),
      description: t(
        'benefits.items.0.description',
        'All building-related decisions are made visible to residents. With open voting and real-time results, everyone stays informed and engaged.'
      ),
      features: [
        t('benefits.items.0.feature0', 'Open voting on community matters'),
        t('benefits.items.0.feature1', 'Real-time result updates'),
        t('benefits.items.0.feature2', 'Decision history transparency'),
        t('benefits.items.0.feature3', 'No closed-door meetings'),
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: t('benefits.items.1.title', 'Simplicity'),
      subtitle: t('benefits.items.1.subtitle', 'One app to replace them all'),
      description: t(
        'benefits.items.1.description',
        'Forget messy WhatsApp groups and paper notes. Conexa centralizes everything—from announcements to task delegation—into one intuitive interface.'
      ),
      features: [
        t('benefits.items.1.feature0', 'Unified communication hub'),
        t('benefits.items.1.feature1', 'Streamlined user experience'),
        t('benefits.items.1.feature2', 'Paperless & clutter-free'),
        t('benefits.items.1.feature3', 'Designed for all generations'),
      ],
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: t('benefits.items.2.title', 'Community'),
      subtitle: t('benefits.items.2.subtitle', 'Connect with your neighbours'),
      description: t(
        'benefits.items.2.description',
        'Build trust and cooperation with tools designed for healthy communication, event planning, and community support.'
      ),
      features: [
        t('benefits.items.2.feature0', 'Friendly neighborhood chat'),
        t('benefits.items.2.feature1', 'Shared responsibilities & initiatives'),
        t('benefits.items.2.feature2', 'Event creation & invites'),
        t('benefits.items.2.feature3', 'Tools to resolve disputes peacefully'),
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Settings,
      title: t('benefits.items.3.title', 'Flexibility'),
      subtitle: t('benefits.items.3.subtitle', 'Customize your experience'),
      description: t(
        'benefits.items.3.description',
        'Each building can activate only the modules it needs. Grow from essential tools to a full-featured community suite at your own pace.'
      ),
      features: [
        t('benefits.items.3.feature0', 'Optional feature activation'),
        t('benefits.items.3.feature1', 'Fits buildings of any size'),
        t('benefits.items.3.feature2', 'Roles and access control'),
        t('benefits.items.3.feature3', 'Future-ready upgrades'),
      ],
      color: 'bg-orange-500'
    },
    {
      icon: MapPin,
      title: t('benefits.items.4.title', 'Local Relevance'),
      subtitle: t('benefits.items.4.subtitle', 'Hyperlocal, not global'),
      description: t(
        'benefits.items.4.description',
        'Posts, offers, and notifications are shown based on your real-world location. Stay informed about what matters *here*, not somewhere else.'
      ),
      features: [
        t('benefits.items.4.feature0', 'Geo-targeted social posts'),
        t('benefits.items.4.feature1', 'Neighbourhood deals & services'),
        t('benefits.items.4.feature2', 'Only relevant events shown'),
        t('benefits.items.4.feature3', 'Dynamic radius filtering'),
      ],
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: t('benefits.items.5.title', 'Efficiency'),
      subtitle: t('benefits.items.5.subtitle', 'Streamlined decision-making'),
      description: t(
        'benefits.items.5.description',
        'Conexa reduces time spent on logistics. Automations, instant alerts, and simplified coordination cut through delays and chaos.'
      ),
      features: [
        t('benefits.items.5.feature0', 'Fewer physical meetings'),
        t('benefits.items.5.feature1', 'Digital issue reporting'),
        t('benefits.items.5.feature2', 'Voting with deadline reminders'),
        t('benefits.items.5.feature3', 'Faster response & repairs'),
      ],
      color: 'bg-indigo-500'
    },
  ];

  const modules = [
    {
      icon: FileText,
      label: t('benefits.modules.0.label', 'Notices'),
      path: '/modules/official-notices'
    },
    {
      icon: MessageSquare,
      label: t('benefits.modules.1.label', 'Chat'),
      path: '/modules/chat-room'
    },
    {
      icon: Vote,
      label: t('benefits.modules.2.label', 'Voting'),
      path: '/modules/official-notices'
    },
    {
      icon: BookOpen,
      label: t('benefits.modules.3.label', 'Quiz'),
      path: '/modules/quiz'
    },
    {
      icon: HelpCircle,
      label: t('benefits.modules.4.label', 'Repairs'),
      path: '/modules/home-repairs'
    },
    {
      icon: ShoppingBag,
      label: t('benefits.modules.5.label', 'Marketplace'),
      path: '/modules/marketplace'
    },
    {
      icon: Bell,
      label: t('benefits.modules.6.label', 'Noise'),
      path: '/modules/noise-alerts'
    },
    {
      icon: Volume2,
      label: t('benefits.modules.7.label', 'Alarm'),
      path: '/modules/alarm'
    },
    {
      icon: ShieldAlert,
      label: t('benefits.modules.8.label', 'Security'),
      path: '/modules/security'
    },
    {
      icon: Car,
      label: t('benefits.modules.9.label', 'Shared Rides'),
      path: '/modules/shared-rides'
    },
    {
      icon: Users,
      label: t('benefits.modules.10.label', 'Neighbourhood'),
      path: '/modules/local-posts'
    },
    {
      icon: Calendar,
      label: t('benefits.modules.11.label', 'Events'),
      path: '/modules/shared-tasks'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-conexa-light-grey to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-4">
            {t('benefits.hero.title', 'Why Residents Love Conexa')}
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t(
              'benefits.hero.subtitle',
              'Built for real people in real buildings. From zgrada modules to local services, discover how Conexa reshapes daily living.'
            )}
          </p>

          {/* Module Icons Row */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mb-6">
            {modules.map(({ icon: Icon, label, path }, idx) => (
              <Link
                key={idx}
                to={path}
                className="flex flex-col items-center w-20 transform transition-transform duration-200 ease-in-out hover:scale-110"
              >
                <div className="group bg-conexa-primary/10 p-3 rounded-xl mb-1 cursor-pointer transform transition-transform duration-200 ease-in-out group-hover:rotate-12">
                  <Icon className="text-conexa-primary" size={24} />
                </div>
                <span className="text-xs text-gray-700 text-center font-medium">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const IconComp = benefit.icon;
                return (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-14 h-14 ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComp className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="font-inter text-conexa-primary font-medium mb-3">
                            {benefit.subtitle}
                          </p>
                          <p className="font-inter text-gray-600 mb-4">
                            {benefit.description}
                          </p>
                          <ul className="space-y-1.5">
                            {benefit.features.map((feat, i) => (
                              <li key={i} className="flex items-center text-sm text-gray-500">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;
