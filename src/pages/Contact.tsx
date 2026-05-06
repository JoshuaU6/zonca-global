import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
    window.location.href = `mailto:zoncaglobalinvestment@gmail.com?subject=${encodeURIComponent(subject || 'Website Enquiry')}&body=${body}`;
  };

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
              {t('contact.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8"
            >
              {t('contact.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-1 w-20 bg-primary mx-auto"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-10 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

              {/* Info */}
              <div className="lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-5 md:space-y-6">

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">Factory</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        48 Lambe Iluyomade Street,<br />
                        By Vulcanizer Bus Stop,<br />
                        Off Ago Palace Way, Okota,<br />
                        Lagos, Nigeria
                      </p>
                      <h4 className="font-bold mt-3 mb-1 text-sm md:text-base">Showroom</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        52 Ligali Ayorinde,<br />
                        Victoria Island,<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">Phone</h4>
                      <p className="text-muted-foreground text-sm">
                        <a href="tel:+2348055408624" className="hover:text-primary transition-colors">
                          +234 8055408624
                        </a><br />
                        <a href="tel:+2348037747111" className="hover:text-primary transition-colors">
                          +234 8037747111
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">Email</h4>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:zoncaglobalinvestment@gmail.com" className="hover:text-primary transition-colors break-all">
                          zoncaglobalinvestment@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">{t('contact.info.hours')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('contact.info.hours.weekdays')}<br />
                        {t('contact.info.hours.saturday')}<br />
                        {t('contact.info.hours.sunday')}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border border-border p-6 md:p-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Send Us A Message</h3>
                  <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {t('contact.form.name')}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border h-12 px-4 focus:outline-none focus:border-primary text-foreground transition-colors text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {t('contact.form.email')}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border h-12 px-4 focus:outline-none focus:border-primary text-foreground transition-colors text-base"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-background border border-border h-12 px-4 focus:outline-none focus:border-primary text-foreground transition-colors text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {t('contact.form.subject')}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-background border border-border h-12 px-4 focus:outline-none focus:border-primary text-foreground transition-colors text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border h-32 p-4 focus:outline-none focus:border-primary text-foreground transition-colors resize-none text-base"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 h-14 px-8 font-bold tracking-wide uppercase transition-colors w-full text-sm"
                    >
                      {t('contact.form.submit')}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
