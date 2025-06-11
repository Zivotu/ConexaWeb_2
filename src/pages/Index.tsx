// src/pages/Index.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import ClickSpark from "@/components/ClickSpark";
// import SplashCursor from "@/components/SplashCursor"; // još uvijek onemogućeno
import { Button } from "@/components/ui/button";
import {
  Star,
  Play,
  Vote,
  Megaphone,
  MessageCircle,
  Wrench,
  ShoppingBag,
  ClipboardList,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    isDesktop ? (
      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {children}
      </ClickSpark>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <Layout>
        {showBanner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setShowBanner(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-4 text-center">
                {t("index.banner.title")}
              </h1>
              <p className="font-inter text-gray-700 text-center mb-6">
                {t("index.banner.description")}
              </p>
              <div className="text-center">
                <Button
                  onClick={() => setShowBanner(false)}
                  className="bg-conexa-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {t("index.banner.getStarted")}
                </Button>
              </div>
            </div>
          </div>
        )}

        <section className="relative flex items-center py-8 bg-gradient-to-br from-conexa-light-grey via-white to-blue-50">
          <div className="absolute inset-0" />
          <div className="container mx-auto px-4 z-10">
            <HeroCarousel />
          </div>
        </section>

        <section className="py-6 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <a
                href="https://www.youtube.com/shorts/82Nsgn200iM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-conexa-primary hover:text-blue-700 transition-colors"
              >
                <Play className="w-8 h-8" />
                <div className="flex flex-col items-center">
                  <span className="font-poppins font-semibold text-xl md:text-2xl">
                    {t("index.socialProof.video")}
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=K-08rgQU75U&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-orange-500 hover:text-orange-700 mt-2 transition-colors"
                  >
                    <Megaphone className="w-5 h-5" />
                    <span className="font-inter font-medium text-base">
                      {t("index.socialProof.podcast")}
                    </span>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-r from-conexa-primary to-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="font-poppins font-semibold text-3xl text-white mb-4">
                {t("index.results.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-poppins font-bold text-white mb-2">
                  85%
                </div>
                <p className="font-inter text-white/90">
                  {t("index.results.stat1")}
                </p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-poppins font-bold text-white mb-2">
                  60%
                </div>
                <p className="font-inter text-white/90">
                  {t("index.results.stat2")}
                </p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-poppins font-bold text-white mb-2">
                  90%
                </div>
                <p className="font-inter text-white/90">
                  {t("index.results.stat3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-poppins font-semibold text-4xl text-gray-900 mb-4">
                  {t("index.features.title")}
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                  {t("index.features.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <Vote className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t("index.features.instantVoting.title")}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t("index.features.instantVoting.description")}
                  </p>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <Megaphone className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t("index.features.announcements.title")}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t("index.features.announcements.description")}
                  </p>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t("index.features.chat.title")}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t("index.features.chat.description")}
                  </p>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <Wrench className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t("index.features.maintenance.title")}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t("index.features.maintenance.description")}
                  </p>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <ShoppingBag className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t("index.features.marketplace.title")}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t("index.features.marketplace.description")}
                  </p>
                </div>

                <Link
                  to="/modules/bulletin-board"
                  className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-conexa-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block"
                >
                  <div className="w-12 h-12 mb-4 bg-conexa-primary/10 rounded-xl flex items-center justify-center group-hover:bg-conexa-primary group-hover:scale-110 transition-all duration-300">
                    <ClipboardList className="w-6 h-6 text-conexa-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {t("index.features.bulletin.title")}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {t("index.features.bulletin.description")}
                  </p>
                </Link>

              </div>

              <div className="text-center mb-8">
                <Link to="/modules">
                  <Button
                    variant="outline"
                    className="text-lg px-8 py-6 transition-all hover:scale-105 border-2 hover:border-conexa-primary hover:text-conexa-primary"
                  >
                    {t("index.features.exploreModules")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-conexa-light-grey to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-poppins font-semibold text-4xl text-gray-900 text-center mb-12">
                {t("index.testimonials.title")}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="font-inter text-gray-700 mb-4">
                      {t(`index.testimonials.quote${i}`)}
                    </p>
                    <p className="font-poppins font-semibold text-gray-900">
                      {t(`index.testimonials.author${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-semibold text-4xl text-gray-900 text-center mb-12">
                {t("index.faq.title")}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q:1, question: t("index.faq.q1"), answer: t("index.faq.a1") },
                  { q:2, question: t("index.faq.q2"), answer: t("index.faq.a2") },
                  { q:3, question: t("index.faq.q3"), answer: t("index.faq.a3") },
                  { q:4, question: t("index.faq.q4"), answer: t("index.faq.a4") },
                  { q:5, question: t("index.faq.q5"), answer: t("index.faq.a5") },
                ].map(({q, question, answer}) => (
                  <AccordionItem key={q} value={`item-${q}`}>
                    <AccordionTrigger className="font-poppins font-medium text-left">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-gray-600">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-br from-conexa-primary to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-poppins font-semibold text-4xl text-white mb-6">
                {t("index.pricing.title")}
              </h2>
              <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto mb-6">
                {t("index.pricing.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-conexa-primary hover:bg-gray-100 text-lg px-8 py-6 transition-all hover:scale-105 font-semibold">
                  {t("index.pricing.startFree")}
                </Button>
                <Link to="/pricing">
                  <Button
                    variant="outline"
                    className="text-lg px-8 py-6 transition-all hover:scale-105 border-2 border-white bg-transparent text-white hover:bg-white hover:text-conexa-primary font-semibold"
                  >
                    {t("index.pricing.viewPricing")}
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <span className="bg-white text-conexa-primary font-medium px-4 py-2 rounded-full">
                  {t("index.pricing.isoCertified")}
                </span>
                <span className="bg-white text-conexa-primary font-medium px-4 py-2 rounded-full">
                  {t("index.pricing.gdpr")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Wrapper>
  );
};

export default Index;
