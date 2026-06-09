import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'wouter';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { OptimizedImage } from '../components/OptimizedImage';
import { OptimizedVideo } from '../components/OptimizedVideo';

const SERVICE_ITEMS = [
  { key: 'aluminum',             img: '/images/service-aluminum.webp' },
  { key: 'glass',                img: '/images/service-glass.webp' },
  { key: 'guillotine',           img: '/images/service-guillotine.webp' },
  { key: 'pergola',              img: '/images/service-pergola.webp' },
  { key: 'steel',                img: '/images/service-steel.webp' },
  { key: 'shutters',             img: '/images/service-shutters.webp' },
  { key: 'electrical',           img: '/images/electrical-panels.jpg' },
  { key: 'fabrication_install',  img: '/images/services-bg.webp' },
  { key: 'racking',              img: '/images/racking-system.jpg' },
];

const CLIENTS = [
  { name: 'Mantrac / CAT',              img: '/images/logos/mantrac-cat.jpg' },
  { name: 'Hayat',                       img: '/images/logos/hayat.jpg' },
  { name: 'Julius Berger',              img: '/images/logos/julius-berger.jpg' },
  { name: 'FrieslandCampina WAMCO',     img: '/images/logos/frieslandcampina.jpg' },
  { name: 'Grundfos',                   img: '/images/logos/grundfos.jpg' },
  { name: 'LAMATA',                     img: '/images/logos/lamata.jpg' },
  { name: 'Prime Medicare',             img: '/images/logos/prime-medicare.jpg' },
  { name: 'CBC Construction',           img: '/images/logos/cbc-construction.jpg' },
  { name: 'Ikeja Electric',             img: '/images/logos/ikeja-electric.jpg' },
  { name: 'Craneburg Construction',     img: '/images/logos/craneburg.jpg' },
  { name: 'TLE',                        img: '/images/logos/tle.jpg' },
  { name: 'Lanre Bhadmus Industries',   img: '/images/logos/lanre-bhadmus.jpg' },
  { name: 'SAHCO',                      img: '/images/logos/sahco.jpg' },
];

export default function Home() {
  const { t } = useLanguage();
  const projects = useCountUp(200, 2000);
  const years    = useCountUp(10,  1800);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-grow pt-0">

        {/* Hero */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/images/hero.webp"
              alt="Architectural Glass Building"
              priority={true}
              className="w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 py-20 pt-28 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-5 md:mb-6 leading-[1.1]">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl font-light">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 h-13 sm:h-14 px-7 md:px-8 font-semibold tracking-wide uppercase transition-colors text-sm md:text-base"
                >
                  {t('hero.cta.primary')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-border bg-background/50 hover:bg-secondary active:bg-secondary/80 text-foreground h-13 sm:h-14 px-7 md:px-8 font-semibold tracking-wide uppercase backdrop-blur transition-colors text-sm md:text-base"
                >
                  {t('hero.cta.secondary')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('services.badge')}</p>
                <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">{t('home.services.title')}</h2>
                <div className="h-1 w-16 md:w-20 bg-primary" />
              </div>
              <Link
                href="/services"
                className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors uppercase tracking-wider text-sm"
              >
                {t('home.services.view_all')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {SERVICE_ITEMS.map((svc, i) => (
                <motion.div
                  key={svc.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group relative overflow-hidden border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={svc.img}
                      alt={t(`services.${svc.key}.title` as any)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                    <div className="w-4 md:w-6 h-0.5 bg-primary mb-1.5 md:mb-2" />
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground leading-tight">
                      {t(`services.${svc.key}.title` as any)}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 md:hidden">
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-border bg-card hover:bg-secondary active:bg-secondary/80 text-foreground h-12 px-6 font-semibold tracking-wide uppercase transition-colors w-full text-sm"
              >
                {t('home.services.view_all')}
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By / References */}
        <section className="py-12 md:py-16 bg-background border-b border-border">
          <div className="container px-4 md:px-6 text-center mb-8 md:mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('trust.badge')}</p>
            <h2 className="text-xl md:text-3xl font-bold">{t('trust.heading')}</h2>
          </div>

          {/* Infinite marquee strip */}
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            <div
              className="flex items-center gap-5 md:gap-8 w-max"
              style={{ animation: 'marquee 28s linear infinite' }}
              onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
              onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
            >
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center bg-white border border-border/20 hover:border-primary/40 transition-colors cursor-default"
                  style={{ width: '160px', height: '80px', padding: '12px 16px' }}
                >
                  <OptimizedImage
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work in Action — Videos */}
        <section className="py-14 md:py-24 bg-background border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Behind The Work</p>
                <h2 className="text-2xl md:text-5xl font-bold mb-3">Our Work in Action</h2>
                <div className="h-1 w-16 md:w-20 bg-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {[
                { src: '/videos/home-v1.mp4', label: 'Fabrication' },
                { src: '/videos/home-v2.mp4', label: 'Installation' },
                { src: '/videos/home-v3.mp4', label: 'Site Work' },
                { src: '/videos/home-v4.mp4', label: 'Finishing' },
                { src: '/videos/home-v5.mp4', label: 'Projects' },
                { src: '/videos/home-v6.mp4', label: 'Team' },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group relative overflow-hidden border border-border hover:border-primary/50 transition-colors bg-secondary"
                >
                  <div className="aspect-video overflow-hidden">
                    <OptimizedVideo
                      src={v.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">{v.label}</p>
                    <button
                      aria-label="Enter fullscreen"
                      onClick={(e) => {
                        const video = (e.currentTarget.closest('.group') as HTMLElement)?.querySelector('video');
                        if (video) {
                          if (video.requestFullscreen) video.requestFullscreen();
                          else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                          else if ((video as any).webkitEnterFullscreen) (video as any).webkitEnterFullscreen();
                        }
                      }}
                      className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-white/80 hover:text-primary active:text-primary p-2 touch-manipulation"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-16 md:py-24 bg-card border-y border-border overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-primary/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 z-0" />
                <img
                  src="/images/our-story.webp"
                  alt="Zonca Global Team"
                  className="relative z-10 w-full h-64 sm:h-80 md:h-[500px] object-cover border border-border"
                />
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('about.who_badge')}</p>
                <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6">{t('home.about.title')}</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-7 md:mb-8 leading-relaxed">
                  {t('home.about.text')}
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div ref={projects.ref}>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{projects.count}+</div>
                    <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{t('about.stats.projects_label')}</div>
                  </div>
                  <div ref={years.ref}>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{years.count}+</div>
                    <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{t('about.stats.years_label')}</div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary/90 h-13 md:h-14 px-7 md:px-8 font-semibold tracking-wide uppercase transition-colors text-sm md:text-base"
                >
                  {t('home.about.cta')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">{t('home.cta.title')}</h2>
            <p className="text-base md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto">
              {t('home.cta.text')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 justify-center bg-background text-foreground hover:bg-secondary active:bg-secondary/80 h-13 md:h-14 px-8 md:px-10 font-bold tracking-wide uppercase transition-colors text-sm md:text-base"
            >
              {t('home.cta.button')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
