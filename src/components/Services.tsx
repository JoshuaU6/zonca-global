import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Layers, Maximize, Sun, Hammer, ShieldCheck } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'aluminum',
      icon: <Building2 className="w-6 h-6" />,
      titleKey: 'services.aluminum.title',
      descKey: 'services.aluminum.desc',
      image: '/images/service-aluminum.webp'
    },
    {
      id: 'glass',
      icon: <Layers className="w-6 h-6" />,
      titleKey: 'services.glass.title',
      descKey: 'services.glass.desc',
      image: '/images/service-glass.webp'
    },
    {
      id: 'guillotine',
      icon: <Maximize className="w-6 h-6" />,
      titleKey: 'services.guillotine.title',
      descKey: 'services.guillotine.desc',
      image: '/images/service-guillotine.webp'
    },
    {
      id: 'pergola',
      icon: <Sun className="w-6 h-6" />,
      titleKey: 'services.pergola.title',
      descKey: 'services.pergola.desc',
      image: '/images/service-pergola.webp'
    },
    {
      id: 'steel',
      icon: <Hammer className="w-6 h-6" />,
      titleKey: 'services.steel.title',
      descKey: 'services.steel.desc',
      image: '/images/service-steel.webp'
    },
    {
      id: 'shutters',
      icon: <ShieldCheck className="w-6 h-6" />,
      titleKey: 'services.shutters.title',
      descKey: 'services.shutters.desc',
      image: '/images/service-shutters.webp'
    }
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t('services.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative bg-card border border-border overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={t(service.titleKey)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm p-3 border border-border/50 text-foreground">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col bg-card">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>
                <div className="mt-auto pt-8">
                  <div className="w-8 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
