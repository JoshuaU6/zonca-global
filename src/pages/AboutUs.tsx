import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { CheckCircle2, Shield, Wrench, Clock, Leaf, Users, Lightbulb } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';

export default function AboutUs() {
  const { t } = useLanguage();
  const projects = useCountUp(200, 2000);
  const years    = useCountUp(10,  1800);
  const clients  = useCountUp(150, 2200);

  const pillars = [
    { icon: <Shield className="w-5 h-5" />,       label: t('about.pillar.quality') },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: t('about.pillar.price') },
    { icon: <Clock className="w-5 h-5" />,        label: t('about.pillar.delivery') },
    { icon: <Lightbulb className="w-5 h-5" />,    label: t('about.pillar.solution') },
    { icon: <Wrench className="w-5 h-5" />,        label: t('about.pillar.development') },
    { icon: <Leaf className="w-5 h-5" />,          label: t('about.pillar.environment') },
    { icon: <Users className="w-5 h-5" />,         label: t('about.pillar.training') },
  ];

  const services = [
    { img: '/images/service-aluminum.webp',   key: 'aluminum' },
    { img: '/images/service-glass.webp',      key: 'glass' },
    { img: '/images/service-guillotine.webp', key: 'guillotine' },
    { img: '/images/service-pergola.webp',    key: 'pergola' },
    { img: '/images/service-steel.webp',      key: 'steel' },
    { img: '/images/service-shutters.webp',   key: 'shutters' },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-grow pt-20 md:pt-24 pb-16 md:pb-20">

        {/* Header */}
        <section className="bg-card border-b border-border py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-xs font-bold uppercase tracking-widest mb-3"
            >
              {t('about.badge')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            >
              {t('about.title')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-1 w-20 bg-primary mx-auto"
            />
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('about.who_badge')}</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-6">{t('about.who_title')}</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
                  {t('about.company_desc')}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t('about.commitment')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 z-0" />
                <OptimizedImage
                  src="/images/our-story.jpg"
                  alt="Zonca Global Workshop"
                  className="relative z-10 w-full h-64 sm:h-80 md:h-[480px] object-cover border border-border"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-20 bg-card border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-3 gap-0 text-center divide-x divide-border">
              <div className="p-6 md:p-10" ref={projects.ref}>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2 md:mb-3">{projects.count}+</div>
                <div className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-muted-foreground leading-tight">
                  {t('about.stats.projects_label')}
                </div>
              </div>
              <div className="p-6 md:p-10" ref={years.ref}>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2 md:mb-3">{years.count}+</div>
                <div className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-muted-foreground leading-tight">
                  {t('about.stats.years_label')}
                </div>
              </div>
              <div className="p-6 md:p-10" ref={clients.ref}>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2 md:mb-3">{clients.count}+</div>
                <div className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-muted-foreground leading-tight">
                  {t('about.stats.clients_label')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Pillars */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('about.pillars_badge')}</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{t('about.pillars_title')}</h2>
              <p className="text-muted-foreground text-sm md:text-lg">{t('about.pillars_subtitle')}</p>
            </div>
            {/* 2 cols mobile → 4 cols tablet → 7 cols desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card border border-border p-4 md:p-5 flex flex-col items-center text-center hover:border-primary/50 transition-colors gap-2 md:gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {pillar.icon}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-muted-foreground leading-tight">
                    {pillar.label}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary">{i + 1}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 md:py-20 bg-card border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('about.offer_badge')}</p>
              <h2 className="text-2xl md:text-4xl font-bold">{t('about.offer_title')}</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group relative overflow-hidden border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={svc.img}
                      alt={t(`services.${svc.key}.title` as any)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-bold text-foreground">
                      {t(`services.${svc.key}.title` as any)}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
