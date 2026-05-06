import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                {t('about.company_desc')}
              </p>
              <p className="leading-relaxed">
                {t('about.commitment')}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 border border-border bg-secondary/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">10+</div>
              <div className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                {t('about.stats.years')}
              </div>
            </div>
            
            <div className="p-8 border border-border bg-secondary/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">500+</div>
              <div className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                {t('about.stats.projects')}
              </div>
            </div>
            
            <div className="p-8 border border-border bg-secondary/20 sm:col-span-2">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">3</div>
              <div className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                {t('about.stats.countries')}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
