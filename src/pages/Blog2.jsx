// src/pages/Blog2.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTranslation } from 'react-i18next';

const Blog2 = () => {
  const { t } = useTranslation();
  const pics = [2, 3, 4, 5].map((i) => `/assets/blog_2_pic_${i}.jpg`);

  return (
    <Layout>
      {/* ===================== HERO ===================== */}
      <header className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
            {t('blog2.hero.title', 'Modern Urban Living')}
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600">
            <em>{t('blog2.hero.subtitle', 'Navigating Challenges & Embracing Digital Transformation')}</em>
          </p>
        </div>
      </header>

      {/* ===================== MAIN ===================== */}
      <main className="py-16 bg-white">
        <article className="prose prose-lg max-w-3xl mx-auto text-gray-800 prose-headings:text-conexa-primary prose-headings:font-poppins px-4">
          <p>
            {t(
              'blog2.main.intro',
              'Urban living in multi-residential buildings has become a way of life in today’s fast-paced cities. While these communities offer affordability, shared maintenance costs, and opportunities for social interaction, they also present unique challenges that can affect the overall quality of life.'
            )}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.challenges.title', 'The Challenges of Communal Living')}
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold">
            {t('blog2.challenges.maintenance.title', 'Maintenance of Shared Spaces')}
          </h3>
          <p>
            {t(
              'blog2.challenges.maintenance.description',
              'Living in a multi-residential building means sharing common areas such as hallways, stairwells, courtyards, parking lots, and elevators. Maintaining these spaces can be a major source of conflict:'
            )}
          </p>
          <ul>
            <li>
              <strong>{t('blog2.challenges.maintenance.disagreement', 'Disagreements Over Costs')}:</strong>{' '}
              {t(
                'blog2.challenges.maintenance.disagreementDesc',
                'Disputes often arise regarding the allocation of maintenance expenses.'
              )}
            </li>
            <li>
              <strong>{t('blog2.challenges.maintenance.accountability', 'Accountability Issues')}:</strong>{' '}
              {t(
                'blog2.challenges.maintenance.accountabilityDesc',
                'Questions about who is responsible for damages or upkeep can further strain relationships.'
              )}
            </li>
          </ul>
          <img src={pics[0]} alt={t('blog2.challenges.maintenance.imgAlt', 'Shared space maintenance')} className="w-full rounded-lg shadow-md my-8" />

          <h3 className="text-2xl md:text-3xl font-semibold">
            {t('blog2.challenges.noise.title', 'Noise and Behavior')}
          </h3>
          <p>
            {t('blog2.challenges.noise.description', 'Noise complaints are among the most frequent issues reported by residents:')}
          </p>
          <ul>
            <li>
              <strong>{t('blog2.challenges.noise.daily', 'Daily Disruptions')}:</strong>{' '}
              {t('blog2.challenges.noise.dailyDesc', 'Loud music, noisy children, or pets can disturb neighbors.')}
            </li>
            <li>
              <strong>{t('blog2.challenges.noise.construction', 'Construction and Renovation')}:</strong>{' '}
              {t(
                'blog2.challenges.noise.constructionDesc',
                'Even necessary building repairs or renovations can cause friction when not communicated properly.'
              )}
            </li>
          </ul>
          <img src={pics[1]} alt={t('blog2.challenges.noise.imgAlt', 'Noise complaint')} className="w-full rounded-lg shadow-md my-8" />

          <h3 className="text-2xl md:text-3xl font-semibold">
            {t('blog2.challenges.decisionMaking.title', 'Collective Decision-Making')}
          </h3>
          <p>
            {t(
              'blog2.challenges.decisionMaking.description',
              'The process of making decisions as a community is fraught with challenges:'
            )}
          </p>
          <ul>
            <li>
              <strong>{t('blog2.challenges.decisionMaking.engagement', 'Lack of Engagement')}:</strong>{' '}
              {t('blog2.challenges.decisionMaking.engagementDesc', 'Often, residents show little interest in attending meetings.')}
            </li>
            <li>
              <strong>{t('blog2.challenges.decisionMaking.transparency', 'Transparency Issues')}:</strong>{' '}
              {t(
                'blog2.challenges.decisionMaking.transparencyDesc',
                'When representatives are not clear or impartial, it breeds distrust and dissatisfaction.'
              )}
            </li>
            <li>
              <strong>{t('blog2.challenges.decisionMaking.financial', 'Financial Disputes')}:</strong>{' '}
              {t(
                'blog2.challenges.decisionMaking.financialDesc',
                'Unclear financing for projects—like facade renovations or roof replacements—can lead to disagreements and delays.'
              )}
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.shift.title', 'The Digital Shift: Overcoming Communication Barriers')}
          </h2>
          <p>
            {t(
              'blog2.shift.description',
              'For years, platforms like WhatsApp and Facebook groups have been the go-to solutions for resident communication. However, these channels are often cluttered with irrelevant messages, causing critical information to be lost in the noise. Research indicates that as much as 40% of conflicts in residential communities can be traced back to poor communication.'
            )}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.findings.title', 'Key Findings from Recent Studies')}
          </h2>
          <ul>
            <li>
              <strong>{t('blog2.findings.satisfaction', 'Increased Satisfaction')}:</strong>{' '}
              {t('blog2.findings.satisfactionDesc', 'Digital platforms designed for building management have been shown to boost resident satisfaction by over 35%.')}
            </li>
            <li>
              <strong>{t('blog2.findings.reduction', 'Reduction in Conflicts')}:</strong>{' '}
              {t('blog2.findings.reductionDesc', 'Communities that implement specialized communication tools experience significantly fewer disagreements.')}
            </li>
            <li>
              <strong>{t('blog2.findings.decision', 'Streamlined Decision-Making')}:</strong>{' '}
              {t(
                'blog2.findings.decisionDesc',
                'With real-time updates and transparent information sharing, the decision-making process becomes more efficient and inclusive.'
              )}
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.practices.title', 'Successful Digital Practices in Urban Communities')}
          </h2>
          <ul>
            <li>
              {t(
                'blog2.practices.centralized',
                'Centralized Communication: Residents receive timely updates on meetings, emergencies, and maintenance schedules.'
              )}
            </li>
            <li>
              {t(
                'blog2.practices.documents',
                'Digital Document Repositories: Secure access to important documents, invoices, and regulations minimizes misunderstandings.'
              )}
            </li>
            <li>
              {t(
                'blog2.practices.reporting',
                'Efficient Issue Reporting: Digital tools enable residents to quickly report issues, schedule repairs, and track maintenance progress, thus reducing administrative hassles.'
              )}
            </li>
          </ul>
          <img src={pics[2]} alt={t('blog2.practices.documentsImgAlt', 'Digital document sharing')} className="w-full rounded-lg shadow-md my-8" />
          <img src={pics[3]} alt={t('blog2.practices.reportingImgAlt', 'Issue reporting interface')} className="w-full rounded-lg shadow-md my-8" />

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.future.title', 'Looking Ahead: The Future of Urban Housing')}
          </h2>
          <p>
            {t(
              'blog2.future.description',
              'As urbanization continues, the need for innovative solutions in residential management becomes ever more critical. Digital transformation is not a fleeting trend; it’s a necessity for creating sustainable, harmonious living environments.'
            )}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.trends.title', 'Emerging Trends in Residential Communities')}
          </h2>
          <ul>
            <li>
              {t(
                'blog2.trends.participation',
                'Enhanced Participation: Digital platforms empower residents to take an active role in community decision-making.'
              )}
            </li>
            <li>
              {t(
                'blog2.trends.safety',
                'Improved Safety: Integrated alarm systems, video surveillance, and real-time notifications enhance security.'
              )}
            </li>
            <li>
              {t(
                'blog2.trends.resources',
                'Resource Coordination: Transparent management of financial resources and maintenance tasks leads to a more efficient community.'
              )}
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.intro.title', 'Introducing Conexa: The Digital Revolution in Residential Living')}
          </h2>
          <p>
            {t(
              'blog2.intro.description',
              'After examining the challenges and trends in urban housing, it’s clear that practical, digital solutions are the future. Enter Conexa—a groundbreaking application that addresses the specific needs of modern residential communities.'
            )}
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold">
            {t('blog2.intro.features.title', 'What Conexa Brings to the Table')}
          </h3>
          <ul>
            <li>{t('blog2.intro.features.announcements', 'Official Announcements (Tenant Screen)')}</li>
            <li>{t('blog2.intro.features.chat', 'Organized Group Chat')}</li>
            <li>{t('blog2.intro.features.bulletin', 'Digital Bulletin Board')}</li>
            <li>{t('blog2.intro.features.reporting', 'Issue Reporting and Maintenance')}</li>
            <li>{t('blog2.intro.features.repository', 'Secure Document Repository')}</li>
            <li>{t('blog2.intro.features.marketplace', 'Marketplace and Local Deals')}</li>
            <li>{t('blog2.intro.features.modules', 'Additional Modules (carpooling, snow removal, security, etc.)')}</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold">
            {t('blog2.intro.impact.title', 'The Impact of Conexa')}
          </h3>
          <ul>
            <li>
              <strong>{t('blog2.intro.impact.conflicts', 'Reduced Conflicts')}:</strong>{' '}
              {t('blog2.intro.impact.conflictsDesc', 'A noticeable decrease in misunderstandings and disputes.')}
            </li>
            <li>
              <strong>{t('blog2.intro.impact.engagement', 'Increased Engagement')}:</strong>{' '}
              {t('blog2.intro.impact.engagementDesc', 'More residents actively participating in community decisions.')}
            </li>
            <li>
              <strong>{t('blog2.intro.impact.efficiency', 'Enhanced Efficiency')}:</strong>{' '}
              {t('blog2.intro.impact.efficiencyDesc', 'Faster issue resolution and improved management of shared resources.')}
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog2.conclusion.title', 'Conclusion: Embrace the Future of Communal Living')}
          </h2>
          <p>
            {t(
              'blog2.conclusion.first',
              'In today’s rapidly evolving urban landscapes, digital innovation is the key to overcoming the longstanding challenges of multi-residential living. Traditional methods simply cannot keep up with the dynamic needs of modern communities.'
            )}
          </p>
          <p>
            {t(
              'blog2.conclusion.second',
              'If you’re ready to join the digital revolution and take control of your community’s future, Conexa is here to help. Experience the benefits of streamlined communication, transparent decision-making, and a truly supportive community environment.'
            )}
          </p>

          <p className="text-center font-semibold mt-12">
            <a
              href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa"
              className="underline hover:text-conexa-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('blog2.cta', 'Try Conexa.life for Free')}
            </a>
          </p>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-conexa-light-grey border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/blog"
            className="inline-block bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full transition"
          >
            {t('blog2.footer.back', '← Back to Blog')}
          </Link>
        </div>
      </footer>
    </Layout>
  );
};

export default Blog2;
