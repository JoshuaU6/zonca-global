import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { OptimizedImage } from '../components/OptimizedImage';

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

  const tripoliImages = [
    '/images/projects/Tripoli/IMG-20260605-WA0012.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0014.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0015.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0017.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0018.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0019.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0020.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0021.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0022.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0023.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0024.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0025.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0026.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0027.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0028.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0029.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0030.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0031.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0032.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0033.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0034.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0035.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0036.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0037.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0038.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0039.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0040.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0041.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0042.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0043.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0044.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0045.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0046.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0047.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0048.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0049.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0050.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0051.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0052.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0053.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0054.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0055.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0056.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0057.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0058.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0059.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0060.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0061.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0062.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0063.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0064.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0065.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0066.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0067.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0068.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0069.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0070.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0071.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0072.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0073.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0074.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0075.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0076.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0077.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0078.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0079.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0080.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0081.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0082.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0083.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0084.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0085.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0086.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0087.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0088.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0089.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0090.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0091.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0092.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0093.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0094.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0095.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0096.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0097.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0098.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0099.jpg',
    '/images/projects/Tripoli/IMG-20260605-WA0100.jpg',
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
                    <OptimizedImage
                      src={project.img}
                      alt={t(project.titleKey)}
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

        {/* Tripoli - Mall Design Gallery */}
        <section className="py-10 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold">Mall Design by Zonca & Fargo in Tripoli, Libya</h2>
              <p className="text-muted-foreground mt-2">A selection of images from the Tripoli mall project.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {tripoliImages.map((src, idx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.01 }}
                  className="overflow-hidden border border-border group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={src}
                      alt={`Mall Design Tripoli ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
