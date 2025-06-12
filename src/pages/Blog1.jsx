// src/pages/Blog1.jsx
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTranslation } from 'react-i18next';

/**
 * Blog1 - Smart Buildings, AI, and Digital Communities
 * Final version: only one image at the end (Blog_1_pic_1.jpg)
 */
const Blog1 = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* ===================== HERO ===================== */}
      <header className="bg-gradient-to-br from-conexa-light-grey to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
            {t('blog1.hero.title', 'Smart Buildings, AI, and Digital Communities')}
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600">
            <em>{t('blog1.hero.subtitle', 'The Paradox of Digital Connectivity')}</em>
          </p>
        </div>
      </header>

      {/* ===================== MAIN ===================== */}
      <main className="py-16 bg-white">
        <article className="prose prose-lg max-w-3xl mx-auto text-gray-800 prose-headings:text-conexa-primary prose-headings:font-poppins px-4">
          {/* Intro */}
          <p>
            {t(
              'blog1.intro.text',
              'We live in an era where our '
            )}
            <strong>{t('blog1.intro.bold1', 'phones are our constant companions')}</strong>
            {t(
              'blog1.intro.text2',
              ', delivering a new wave of notifications and likes every few seconds. However, despite ubiquitous online communication, global studies reveal surprisingly high rates of loneliness: '
            )}
            <strong>{t('blog1.intro.bold2', '13% of Europeans feel isolated most of the time')}</strong>
            {t(
              'blog1.intro.text3',
              ', while among young people (ages 18-24), that figure rises to '
            )}
            <strong>{t('blog1.intro.bold3', '57%')}</strong>
            {t(
              'blog1.intro.text4',
              '. This stark contrast reveals the key paradox of our digital networks - they can connect us to the world, but '
            )}
            <strong>{t('blog1.intro.bold4', 'not necessarily to the person living just next door')}</strong>
            {t('blog1.intro.text5', '.')}
          </p>

          <blockquote className="not-italic font-medium text-gray-700 border-l-4 border-conexa-primary pl-4">
            {t(
              'blog1.blockquote.text',
              '"Man is by nature a social animal." - Aristotle'
            )}
          </blockquote>

          <p>
            {t(
              'blog1.afterQuote.text1',
              "Aristotle's notion of sociability feels more relevant than ever in the age of algorithms, where the absence of "
            )}
            <strong>{t('blog1.afterQuote.bold1', 'genuine interaction')}</strong>
            {t(
              'blog1.afterQuote.text2',
              ' can feel like a battle already lost. To restore true closeness, we must devise ways for the '
            )}
            <strong>{t('blog1.afterQuote.bold2', 'digital and the physical')}</strong>
            {t('blog1.afterQuote.text3', ' to work in harmonious synergy.')}
          </p>

          {/* ===================== Orthogonality ===================== */}
          <h2>{t('blog1.orthogonality.title', 'Orthogonality of the Digital and the Neighbourhood')}</h2>
          <p>
            {t(
              'blog1.orthogonality.text1',
              'Over the centuries, urbanisation has brought advantages - opportunity, culture, infrastructure - but also '
            )}
            <strong>{t('blog1.orthogonality.bold1', 'anonymity, fragmented social ties')}</strong>
            {t(
              'blog1.orthogonality.text2',
              ', and the breakdown of traditional support networks. In '
            )}
            <em>{t('blog1.orthogonality.em1', 'Bowling Alone')}</em>
            {t(
              'blog1.orthogonality.text3',
              ', Robert Putnam argues that when communal activities disappear, social capital quickly weakens.'
            )}
          </p>
          <p>
            {t(
              'blog1.orthogonality.text4',
              'While online groups can expand overnight, '
            )}
            <strong>{t('blog1.orthogonality.bold2', 'word of mouth in a real neighbourhood')}</strong>
            {t('blog1.orthogonality.text5', ' still travels fast - often reaching the first twenty doors in no time.')}
          </p>

          {/* ===================== Psychology ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog1.psychology.title', 'The Psychology of Neighbourhoods and Sense of Belonging')}
          </h2>
          <p>
            {t(
              'blog1.psychology.text1',
              'In urban environments, researchers distinguish between '
            )}
            <strong>{t('blog1.psychology.bold1', 'satisfaction')}</strong>
            {t('blog1.psychology.text2', ' and ')}
            <strong>{t('blog1.psychology.bold2', 'belonging')}</strong>
            {t(
              'blog1.psychology.text3',
              '. Satisfaction shows which neighbourhood features matter day-to-day; belonging emerges through '
            )}
            <strong>{t('blog1.psychology.bold3', 'shared rituals and routines')}</strong>
            {t('blog1.psychology.text4', '.')}
          </p>
          <p>
            {t(
              'blog1.psychology.text5',
              'Sociologists Appold and Yuen, studying life-use diaries in Singapore, concluded that high-rise towers do not disrupt family life - provided '
            )}
            <strong>{t('blog1.psychology.bold4', 'shared spaces are well-designed')}</strong>
            {t('blog1.psychology.text6', '.')}
          </p>

          {/* ===================== Phygital ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog1.phygital.title', 'Phygital: The Synergy of Physical and Digital')}
          </h2>
          <p>
            {t(
              'blog1.phygital.text1',
              'The modern city demands a '
            )}
            <strong>{t('blog1.phygital.bold1', 'phygital approach')}</strong>
            {t(
              'blog1.phygital.text2',
              ': digital commands that play out in the real world. Imagine a push notification for tomorrow\'s snow clearance, after which a neighbour (or an algorithm) schedules a slot for everyone.'
            )}
          </p>
          <p>
            {t(
              'blog1.phygital.text3',
              'In practice, phygital implementation guides each resident through: '
            )}
            <strong>{t('blog1.phygital.bold2', 'notification → confirmation → reminder → action')}</strong>
            {t('blog1.phygital.text4', '.')}
          </p>

          {/* ===================== Pillars ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog1.pillars.title', 'Essential Elements of Quality Urban Life')}
          </h2>
          <h3>{t('blog1.pillars.space.title', '1. Space and Greenery')}</h3>
          <p>
            {t(
              'blog1.pillars.space.desc',
              'Nature within the city has a <strong>regenerative effect</strong>.'
            )}
          </p>
          <h3>{t('blog1.pillars.safety.title', '2. Safety and Reliability')}</h3>
          <p>
            {t(
              'blog1.pillars.safety.desc',
              'A sense of security comes not only from surveillance, but also from <strong>reliable neighbours</strong>.'
            )}
          </p>
          <h3>{t('blog1.pillars.community.title', '3. Acts of Community')}</h3>
          <p>
            {t(
              'blog1.pillars.community.desc',
              'Without <strong>collective action</strong>, there is no belonging.'
            )}
          </p>

          {/* ===================== Conexa ===================== */}
          <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-2">
            {t('blog1.conexa.title', 'Conexa.life at the Heart of the Story')}
          </h2>
          <p>
            {t(
              'blog1.conexa.text1',
              'Conexa.life is not just another app - it aims to be the <strong>backbone of a new digital culture for neighbourhoods</strong>.'
            )}
          </p>
          <p>
            {t(
              'blog1.conexa.text2',
              'In this way, every resident becomes an <strong>active participant</strong> rather than a passive observer.'
            )}
          </p>

          {/* ===================== Conclusion ===================== */}
          <h2>{t('blog1.conclusion.title', 'Conclusion - Returning the Warmth of the Neighbourhood')}</h2>
          <p>
            {t(
              'blog1.conclusion.text1',
              'Digital technology solves many problems, yet <strong>neighbourhood ties remain irreplaceable</strong>.'
            )}
          </p>
          <p>
            {t(
              'blog1.conclusion.text2',
              'Conexa.life is exactly that: a <strong>bridge between the digital and the real</strong>.'
            )}
          </p>

          {/* Final Image */}
          <img
            src="/assets/Blog_1_pic_1.jpg"
            alt={t('blog1.image.alt', 'Community interacting through Conexa')}
            className="rounded-lg shadow-md w-full md:w-2/3 mx-auto my-12"
            loading="lazy"
          />

          {/* CTA */}
          <p className="text-center font-semibold mt-12">
            <a
              href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa"
              className="underline hover:text-conexa-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('blog1.cta', 'Try Conexa.life for Free')}
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
            {t('blog1.back', '← Back to Blog')}
          </Link>
        </div>
      </footer>
    </Layout>
  );
};

export default Blog1;
