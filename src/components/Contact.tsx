import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Globe, MapPin } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 border border-border">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-muted-foreground">Email</h4>
                  <a href="mailto:project@zoncaglobal.com" className="text-lg font-medium hover:text-primary transition-colors">
                    project@zoncaglobal.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 border border-border">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-muted-foreground">Website</h4>
                  <a href="https://www.zoncaglobal.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                    www.zoncaglobal.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.form.name')}
                </label>
                <Input 
                  id="name" 
                  className="bg-transparent border-b border-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg h-12" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.form.email')}
                </label>
                <Input 
                  id="email" 
                  type="email"
                  className="bg-transparent border-b border-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg h-12" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.form.message')}
                </label>
                <Textarea 
                  id="message" 
                  className="bg-transparent border-b border-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg min-h-[120px] resize-none" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-none h-14 text-sm tracking-wider uppercase font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                {t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
