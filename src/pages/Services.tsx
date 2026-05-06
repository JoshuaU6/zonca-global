import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Ruler, PenTool, Hammer, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

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

export default function Services() {
  const { t } = useLanguage();

  const processSteps = [
    { icon: <Ruler className="w-6 h-6" />,       title: t('services.process.survey') },
    { icon: <PenTool className="w-6 h-6" />,      title: t('services.process.design') },
    { icon: <Hammer className="w-6 h-6" />,       title: t('services.process.fabrication') },
    { icon: <Wrench className="w-6 h-6" />,        title: t('services.process.installation') },
    { icon: <CheckCircle className="w-6 h-6" />,  title: t('services.process.handover') },
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
              {t('services.badge')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            >
              {t('services.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8"
            >
              {t('services.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-1 w-20 bg-primary mx-auto"
            />
          </div>
        </section>

        {/* Six Services Grid */}
        <section className="py-10 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
              {SERVICE_ITEMS.map((svc, i) => (
                <motion.div
                  key={svc.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b border-border">
                    <img
                      src={svc.img}
                      alt={t(`services.${svc.key}.title` as any)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 md:p-6 flex flex-col flex-grow">
                    <div className="w-5 h-0.5 bg-primary mb-2 md:mb-4" />
                    <h3 className="text-xs sm:text-base md:text-xl font-bold mb-1 md:mb-3 leading-snug">
                      {t(`services.${svc.key}.title` as any)}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-grow hidden sm:block">
                      {t(`services.${svc.key}.desc` as any)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 md:py-20 bg-card border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{t('services.process_badge')}</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10">{t('services.process.title')}</h2>
                <div className="space-y-5 md:space-y-6">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-4 md:gap-5">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="flex items-center gap-3 md:gap-4 flex-1">
                        <span className="text-3xl md:text-4xl font-bold text-border select-none">0{i + 1}</span>
                        <h3 className="text-base md:text-lg font-bold">{step.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative hidden md:block"
              >
                <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 z-0" />
                <img
                  src="/images/services-bg.webp"
                  alt="Fabrication Process"
                  className="relative z-10 w-full h-[460px] object-cover border border-border"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{t('home.cta.title')}</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-7 md:mb-8 max-w-xl mx-auto">{t('home.cta.text')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 h-13 md:h-14 px-8 md:px-10 font-bold tracking-wide uppercase transition-colors text-sm md:text-base"
            >
              {t('home.cta.button')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
