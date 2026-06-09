import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';
import { OptimizedVideo } from '../components/OptimizedVideo';

const PRODUCTS = [
  { key: 'aluminum',     img: '/images/product-aluminum.webp' },
  { key: 'glass',        img: '/images/product-glass.webp' },
  { key: 'guillotine',   img: '/images/product-guillotine.webp' },
  { key: 'pergola',      img: '/images/product-pergola.webp' },
  { key: 'steel',        img: '/images/product-steel.webp' },
  { key: 'shutters',     img: '/images/product-shutters.webp' },
  { key: 'electrical',   img: '/images/product-electrical-panel.jpg' },
  { key: 'racking',      img: '/images/racking-system.jpg' },
  { key: 'controlpanels',img: '/images/electrical-panels.jpg' },
];


export default function Products() {
  const { t } = useLanguage();

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
              {t('products.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8"
            >
              {t('products.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-1 w-20 bg-primary mx-auto"
            />
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-10 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group"
                >
                  <div className="bg-card border border-border overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden border-b border-border">
                      <OptimizedImage
                        src={product.img}
                        alt={t(`services.${product.key}.title` as any)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 md:p-6 flex flex-col flex-grow">
                      <div className="w-5 h-0.5 bg-primary mb-2 md:mb-3" />
                      <h3 className="text-xs sm:text-base md:text-xl font-bold mb-1 md:mb-3 leading-snug">
                        {t(`services.${product.key}.title` as any)}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">
                        {t(`services.${product.key}.desc` as any)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10 md:py-20 bg-card border-t border-border">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <div className="w-6 h-1 bg-primary mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold mb-3">Our Work in Action</h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                Watch how we bring precision engineering and quality craftsmanship to every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              {/* Video 1 — Instagram Reel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex flex-col"
              >
                <div className="w-full border border-border overflow-hidden bg-secondary" style={{ aspectRatio: '9/16', maxHeight: '520px' }}>
                  <iframe
                    src="https://www.instagram.com/p/DX87Sg4NDr8/embed/"
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    title="Zonca Global Instagram Reel"
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-foreground px-1">Project Showcase — Instagram</p>
              </motion.div>

              {/* Video 2 — Uploaded MP4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="w-full border border-border overflow-hidden bg-secondary" style={{ aspectRatio: '9/16', maxHeight: '520px' }}>
                  <OptimizedVideo
                    src="/videos/zonca-video.mp4"
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-foreground px-1">Fabrication & Installation</p>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
