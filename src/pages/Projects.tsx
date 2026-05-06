import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    { img: '/images/project-1.webp',                   titleKey: 'projects.p1.title', categoryKey: 'projects.p1.category', location: 'Lagos, Nigeria' },
    { img: '/images/product-aluminum.webp',             titleKey: 'projects.p2.title', categoryKey: 'projects.p2.category', location: 'Abuja, Nigeria' },
    { img: '/images/product-glass.webp',                titleKey: 'projects.p3.title', categoryKey: 'projects.p3.category', location: 'Lagos, Nigeria' },
    { img: '/images/product-shutters.webp',             titleKey: 'projects.p4.title', categoryKey: 'projects.p4.category', location: 'Port Harcourt, Nigeria' },
    { img: '/images/product-pergola.webp',              titleKey: 'projects.p5.title', categoryKey: 'projects.p5.category', location: 'Lagos, Nigeria' },
    { img: '/images/product-steel.webp',                titleKey: 'projects.p6.title', categoryKey: 'projects.p6.category', location: 'Abuja, Nigeria' },
    { img: '/images/projects/project-tle.jpg',         titleKey: 'projects.p7.title', categoryKey: 'projects.p7.category', location: 'Ilorin, Kwara State' },
    { img: '/images/projects/project-nestoil.jpg',     titleKey: 'projects.p8.title', categoryKey: 'projects.p8.category', location: 'Lagos, Nigeria' },
    { img: '/images/projects/project-hayat.jpg',       titleKey: 'projects.p9.title', categoryKey: 'projects.p9.category', location: 'Lagos, Nigeria' },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-grow pt-20 md:pt-24 pb-16 md:pb-20">

        {/* Header */}
        <section className="bg-card border-b border-border py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            >
              {t('projects.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8"
            >
              {t('projects.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-1 w-20 bg-primary mx-auto"
            />
          </div>
        </section>

        {/* Grid */}
        <section className="py-10 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative overflow-hidden border border-border"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Gradient always visible on mobile, enhanced on hover for desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  {/* Text: always shown, just translates slightly on desktop hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5">
                      {t(project.categoryKey)}
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{project.location}</p>
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
