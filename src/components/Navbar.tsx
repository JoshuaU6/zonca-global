import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const LANGUAGES = {
  en: { code: 'GB', name: 'English' },
  fr: { code: 'FR', name: 'Français' },
  tr: { code: 'TR', name: 'Türkçe' }
} as const;

type LangKey = keyof typeof LANGUAGES;

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [location] = useLocation();

  // Separate refs so desktop and mobile don't clobber each other
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideDesktop = desktopLangRef.current?.contains(target);
      const insideMobile = mobileLangRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/products', label: t('nav.products') },
    { href: '/services', label: t('nav.services') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/contact', label: t('nav.contact') },
  ];


  const LangDropdownItems = () => (
    <>
      {(Object.keys(LANGUAGES) as LangKey[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => {
            setLang(l);
            setIsLangOpen(false);
          }}
          className="w-full flex items-center px-4 py-2.5 hover:bg-secondary transition-colors text-left"
        >
          <div className="w-6 flex justify-center mr-3">
            {lang === l && <div className="w-2 h-2 rounded-full bg-primary" />}
          </div>
          <span className="text-xs font-bold font-mono mr-2 text-muted-foreground">
            {LANGUAGES[l].code}
          </span>
          <span className={`text-sm font-semibold ${lang === l ? 'text-foreground' : 'text-muted-foreground'}`}>
            {LANGUAGES[l].name}
          </span>
        </button>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-6">

          {/* Logo — white logo on dark bg; transparent dark logo in light mode */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={theme === 'dark' ? '/images/zonca-logo-dark.png' : '/images/zonca-logo-light-transparent.png'}
              alt="Zonca Global Investment Ltd"
              className="h-10 w-auto object-contain block transition-all duration-300"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav — lg+ only */}
          <div className="hidden lg:flex items-center gap-5 flex-1 justify-end">
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                      isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary/80 hover:bg-secondary border border-border transition-colors flex-shrink-0"
            >
              {theme === 'dark'
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-slate-600" />
              }
            </button>

            {/* Language Dropdown — DESKTOP: uses its own ref */}
            <div className="relative border-l border-border pl-4 flex-shrink-0" ref={desktopLangRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(prev => !prev)}
                className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary text-foreground px-3 py-1.5 rounded-full transition-colors border border-border"
              >
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold font-mono">{LANGUAGES[lang as LangKey]?.code ?? 'GB'}</span>
                <span className="text-xs font-semibold">{LANGUAGES[lang as LangKey]?.name ?? 'English'}</span>
                <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-xl overflow-hidden py-1 z-50">
                  <LangDropdownItems />
                </div>
              )}
            </div>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="lg:hidden flex items-center gap-2">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/80 border border-border"
            >
              {theme === 'dark'
                ? <Sun className="w-3.5 h-3.5 text-amber-400" />
                : <Moon className="w-3.5 h-3.5 text-slate-600" />
              }
            </button>

            {/* Language Dropdown — MOBILE: uses its own separate ref */}
            <div className="relative" ref={mobileLangRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(prev => !prev)}
                className="flex items-center gap-1.5 bg-secondary/80 text-foreground px-2.5 py-1.5 rounded-full border border-border"
              >
                <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs font-bold">{LANGUAGES[lang as LangKey]?.code ?? 'GB'}</span>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-card border border-border rounded-xl shadow-xl overflow-hidden py-1 z-50">
                  <LangDropdownItems />
                </div>
              )}
            </div>

            <button
              type="button"
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-5 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider py-3 px-2 border-b border-border/30 last:border-0 ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
