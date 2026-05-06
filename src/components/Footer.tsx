import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/zoncaglobalinvestmentltd',
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/zoncaglobal',
    icon: <Twitter className="w-4 h-4" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/zoncagloballtd',
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@zoncagloballimited',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@zoncaglobalinvestmentlimited?si=nO2Z_06rStdPuNkK',
    icon: <Youtube className="w-4 h-4" />,
  },
];

export function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="bg-card border-t border-border pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <picture>
                <source
                  srcSet={theme === 'dark' ? '/images/zonca-logo-dark.webp' : '/images/zonca-logo-light.webp'}
                  type="image/webp"
                />
                <img
                  src={theme === 'dark' ? '/images/zonca-logo-dark.png' : '/images/zonca-logo-light.png'}
                  alt="Zonca Global Investment Ltd"
                  className="h-9 md:h-11 w-auto object-contain block"
                />
              </picture>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Architectural Metal & Glass fabrication and installation. Excellence in every detail.
            </p>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 md:mb-6">Quick Links</h4>
            <div className="flex flex-col space-y-2.5">
              <Link href="/about"    className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('nav.products')}</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('nav.services')}</Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('nav.projects')}</Link>
              <Link href="/contact"  className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>

          {/* Contact Info — full width on mobile */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 md:mb-6">{t('contact.info.title')}</h4>
            <div className="flex flex-col space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Factory:</span> 48 Lambe Iluyomade Street, By Vulcanizer Bus Stop, Off Ago Palace Way, Okota, Lagos, Nigeria<br />
                  <span className="font-semibold text-foreground">Showroom:</span> 52 Ligali Ayorinde, Victoria Island, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  <a href="tel:+2348055408624" className="hover:text-primary transition-colors">+234 8055408624</a>
                  {' / '}
                  <a href="tel:+2348037747111" className="hover:text-primary transition-colors">+234 8037747111</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:zoncaglobalinvestment@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  zoncaglobalinvestment@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                  </svg>
                </span>
                <a href="https://www.zoncaglobal.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  www.zoncaglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <p className="text-xs">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
