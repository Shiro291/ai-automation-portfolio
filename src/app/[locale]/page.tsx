'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import LeadMagnet from '../../components/LeadMagnet';
import DualThreat from '../../components/DualThreat';
import Timeline from '../../components/Timeline';

export default function Home() {
  const t = useTranslations('Hero');
  const tNav = useTranslations('Navigation');
  const tCase = useTranslations('CaseStudies');
  const tServices = useTranslations('Services');
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'id' : 'en';

  const servicesData = [
    {
      id: "architecture",
      title: tServices('offerings.0.title'),
      description: tServices('offerings.0.description'),
      roi: tServices('offerings.0.roi'),
      icon: "🏗️",
    },
    {
      id: "gamification",
      title: tServices('offerings.1.title'),
      description: tServices('offerings.1.description'),
      roi: tServices('offerings.1.roi'),
      icon: "🎮",
    },
    {
      id: "conversion",
      title: tServices('offerings.2.title'),
      description: tServices('offerings.2.description'),
      roi: tServices('offerings.2.roi'),
      icon: "⚡",
    }
  ];

  const caseStudies = [
    {
      id: "meca",
      title: tCase('projects.0.title'),
      role: tCase('projects.0.role'),
      problem: tCase('projects.0.problem'),
      solution: tCase('projects.0.solution'),
      impact: tCase('projects.0.impact'),
      link: tCase('projects.0.link'),
    },
    {
      id: "tatasurya",
      title: tCase('projects.1.title'),
      role: tCase('projects.1.role'),
      problem: tCase('projects.1.problem'),
      solution: tCase('projects.1.solution'),
      impact: tCase('projects.1.impact'),
      link: tCase('projects.1.link'),
    },
    {
      id: "edumetrics",
      title: tCase('projects.2.title'),
      role: tCase('projects.2.role'),
      problem: tCase('projects.2.problem'),
      solution: tCase('projects.2.solution'),
      impact: tCase('projects.2.impact'),
      link: tCase('projects.2.link'),
    },
    {
      id: "wiseboard",
      title: tCase('projects.3.title'),
      role: tCase('projects.3.role'),
      problem: tCase('projects.3.problem'),
      solution: tCase('projects.3.solution'),
      impact: tCase('projects.3.impact'),
      link: tCase('projects.3.link'),
    }
  ];

  // Framer Motion Variants for Staggered "Brutalist" Entry
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col p-6 md:p-12 lg:p-24 selection:bg-primary selection:text-white">
      {/* Navigation (Sticky & Glassmorphism over Brutalist base) */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-between items-center mb-16 md:mb-32 backdrop-blur-xl sticky top-4 md:top-8 z-50 rounded-2xl p-4 md:px-8 border-2 border-border/50 bg-white/70 dark:bg-slate-900/70 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
          <h1 className="font-heading font-black text-2xl tracking-tighter whitespace-nowrap">Fathan Faqih Ali</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden lg:flex gap-8 font-heading font-bold text-sm tracking-wide">
            <Link href="#projects" className="hover:text-primary transition-colors duration-200">{tNav('projects')}</Link>
            <Link href="#services" className="hover:text-primary transition-colors duration-200">{tNav('services')}</Link>
          </nav>

          <div className="h-6 w-px bg-border/50 hidden md:block" />

          {/* Language Toggle (i18n-localization) */}
          <Link
            href={`/${otherLocale}`}
            className="flex items-center justify-center border-2 border-foreground px-4 py-1.5 text-xs font-black rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Bahasa Indonesia'}`}
          >
            {locale === 'en' ? 'ID' : 'EN'}
          </Link>

          <button className="hidden md:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-heading font-bold text-sm transition-all duration-200 shadow-brutal hover:translate-y-1 hover:translate-x-1 hover:shadow-none">
            {tNav('contact')}
          </button>
        </div>
      </motion.header>

      {/* Hero Section (Marketing Psychology: Authority Bias & High Contrast) */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 max-w-7xl mx-auto flex flex-col justify-center gap-8 md:gap-12 w-full"
      >
        {/* Sub-label positioning context */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <span className="px-3 py-1 bg-muted text-muted-foreground border border-border rounded-full text-xs font-bold font-mono tracking-widest uppercase shadow-sm">
            AI Systems Engineer
          </span>
          <span className="px-3 py-1 bg-muted text-muted-foreground border border-border rounded-full text-xs font-bold font-mono tracking-widest uppercase shadow-sm">
            {locale === 'en' ? 'Based in ID' : 'Berbasis di ID'}
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] font-heading font-black tracking-tighter text-balance uppercase"
        >
          {t('title')}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-body max-w-4xl text-balance border-l-8 border-primary pl-6 py-2 font-medium"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-8 md:mt-12">
          <button className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-5 font-heading font-black text-lg md:text-xl rounded-xl transition-all duration-200 shadow-brutal-lg hover:translate-y-2 hover:translate-x-2 hover:shadow-none group">
            {t('cta_primary')}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <button className="flex items-center justify-center bg-transparent text-foreground border-4 border-foreground hover:bg-muted px-8 py-5 font-heading font-black text-lg md:text-xl rounded-xl transition-all duration-200">
            {t('cta_secondary')}
          </button>
        </motion.div>
      </motion.section>

      {/* Philosophy Section (The Dual-Threat Strategy Integration) */}
      <DualThreat />

      {/* Case Studies Section (Interactive Portfolio & Editorial Brutalism) */}
      <section id="projects" className="py-24 md:py-32 max-w-7xl mx-auto w-full border-t border-border mt-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-2">
            {tCase('section_title')}
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl">
            {tCase('section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((project, index) => (
            <div
              key={project.id}
              className="interactive-card bg-white dark:bg-slate-900 group flex flex-col h-full rounded-2xl overflow-hidden"
            >
              {/* Screenshot injected for the brutalist style */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-64 md:h-80 bg-muted border-b-2 border-transparent group-hover:border-foreground transition-colors w-full relative overflow-hidden flex items-center justify-center">
                <Image
                  src={`/${project.id === 'meca' ? 'meca.png' : project.id === 'tatasurya' ? 'tatasurya.png' : project.id === 'edumetrics' ? 'edumetrics.svg' : 'wiseboard.png'}`}
                  alt={`${project.title} Interface Thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.3] hover:sepia-0 contrast-125 saturate-50 hover:saturate-100"
                  suppressHydrationWarning
                />
              </a>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-black text-2xl tracking-tight leading-tight pr-4">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xs font-bold font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {project.role.split('&')[0]}
                  </span>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <h4 className="text-xs font-bold font-mono tracking-widest text-muted-foreground uppercase mb-1">The Problem</h4>
                    <p className="text-sm border-l-2 border-muted-foreground/30 pl-3">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono tracking-widest text-primary uppercase mb-1">Architectural Solution</h4>
                    <p className="text-sm font-medium border-l-2 border-primary pl-3">{project.solution}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col gap-4 mt-auto">
                  <div className="bg-foreground text-background p-3 rounded-lg flex items-center gap-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <span className="block text-[10px] font-bold font-mono tracking-widest uppercase opacity-80">Measured Impact</span>
                      <span className="text-sm font-bold leading-tight">{project.impact}</span>
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full font-heading font-bold text-sm tracking-wide group-hover:text-primary transition-colors">
                    {locale === 'en' ? 'Explore Technical Architecture' : 'Eksplorasi Arsitektur Teknis'}
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exaggerated CV & Professional Trajectory Timeline */}
      <Timeline />

      {/* Services & Capabilities Section */}
      <section id="services" className="py-24 md:py-32 max-w-7xl mx-auto w-full border-t border-border mt-12 mb-24">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-4">
            {tServices('section_title')}
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl px-4">
            {tServices('section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 border-2 border-border hover:border-foreground p-8 rounded-2xl transition-all duration-300 hover:shadow-brutal hover:-translate-y-2 group flex flex-col"
            >
              <div className="w-16 h-16 bg-muted border-2 border-border rounded-xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary transition-all duration-300 shadow-sm">
                {service.icon}
              </div>

              <h3 className="font-heading font-black text-2xl tracking-tight leading-tight uppercase mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                {service.description}
              </p>

              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-auto border-l-4 border-l-primary group-hover:bg-primary/10 transition-colors">
                <span className="block text-[10px] font-bold font-mono tracking-widest text-primary uppercase mb-1">
                  Expected ROI
                </span>
                <span className="text-sm font-bold font-heading text-foreground">
                  {service.roi}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Magnet Calculator Section */}
      <LeadMagnet />
    </main>
  );
}
