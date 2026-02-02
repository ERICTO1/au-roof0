import React, { useState, useEffect } from 'react';
import SolarGlobe from './components/SolarGlobe';
import InfoCard from './components/InfoCard';
import CtaSection from './components/CtaSection';
import RankingSection from './components/RankingSection';
import MethodologySection from './components/MethodologySection';
import FooterSection from './components/FooterSection';
import FloatingCta from './components/FloatingCta';
import { SOLAR_METRICS } from './constants';
import { Zap, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const sections = document.querySelectorAll('section');
      let currentSection = 0;

      // Check which section is in view
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Standard check: is the section mostly in the viewport?
        if (rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);

      // Calculate total progress
      const totalScroll = document.body.scrollHeight - windowHeight;
      setScrollProgress(Math.min(scrollY / totalScroll, 1));

      // Floating CTA Logic: Show only after scrolling PAST the main CTA section.
      const ctaIndex = SOLAR_METRICS.length;

      // If we are currently looking at a section deeper than the CTA section, show floating bar.
      if (currentSection > ctaIndex) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we are in the "Dark Mode" zone (CTA, Rankings, Methodology, Footer)
  const isDarkZone = activeSection >= SOLAR_METRICS.length;

  return (
    <div className={`relative min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden transition-colors duration-1000 ease-in-out
        ${isDarkZone ? 'bg-black text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

      {/* --- HERO BACKGROUND (Visible only on Section 0) --- */}
      <div
        className={`fixed inset-0 z-0 transition-opacity duration-1000 ease-in-out ${activeSection === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // High-end dark architectural solar image
            backgroundImage: `url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2832&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-slate-900/90"></div>
        </div>
      </div>

      {/* --- GLOBE BACKGROUND (Reveals after Section 0, Fades/Darkens on Footer) --- */}
      <div
        className={`fixed inset-0 w-full h-full z-0 transition-all duration-1000 ease-in-out transform 
        ${activeSection === 0 ? 'opacity-0 scale-95 invisible' : 'visible opacity-100 scale-100'}
        ${isDarkZone ? 'opacity-20 grayscale scale-110 blur-sm' : ''}
        `}
      >
        <SolarGlobe
          // If we go past the metrics, keep showing the last metric's location on the globe but simpler
          activeData={SOLAR_METRICS[Math.min(activeSection, SOLAR_METRICS.length - 1)]}
          allData={SOLAR_METRICS}
        />
        {/* Overlay to blend globe */}
        <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t transition-colors duration-1000
            ${isDarkZone ? 'from-black via-black/80 to-transparent' : 'from-slate-50 via-transparent to-transparent opacity-80'}`}
        />
      </div>

      {/* Header / Nav */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center mix-blend-difference text-white transition-all duration-500
          ${isDarkZone ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="flex items-center gap-3">
          <Zap size={24} className="text-amber-400 fill-amber-400" />
          <span className="text-xl font-black tracking-widest uppercase">greensketch</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
        </div>
        <Menu className="md:hidden" />
      </header>

      {/* Main Scroll Content */}
      <main className="relative z-10 w-full">

        {/* Progress Tracker (Right Side) */}
        <div className={`fixed right-8 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-slate-200 hidden lg:block overflow-hidden rounded-full z-50 transition-opacity duration-500 ${isDarkZone ? 'opacity-0' : 'opacity-100'}`}>
          <div
            className="w-full bg-slate-900 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* 1. Metric Cards Sections */}
        {SOLAR_METRICS.map((item, index) => (
          <section
            key={item.id}
            className={`min-h-screen w-full flex items-center relative ${index === 0 ? 'justify-center' : 'justify-start md:pl-[10vw]'}`}
          >
            <div className="pointer-events-auto px-6 w-full max-w-7xl mx-auto">
              <InfoCard
                data={item}
                isActive={index === activeSection}
                isHero={index === 0}
              />
            </div>
          </section>
        ))}

        {/* 2. Main CTA Section (Input) */}
        <section className="min-h-screen w-full flex items-center justify-center relative bg-transparent">
          <CtaSection />
        </section>

        {/* 3. Ranking Section */}
        <section className="min-h-screen w-full flex items-center justify-center relative bg-transparent py-20">
          <RankingSection />
        </section>

        {/* 4. Methodology Section (New) */}
        <section className="w-full relative bg-transparent py-20">
          <MethodologySection />
        </section>

        {/* 5. Footer Section (New) */}
        <section className="w-full relative bg-transparent">
          <FooterSection />
        </section>

      </main>

      {/* Floating Sticky CTA (Shows when user scrolls past the main CTA) */}
      <FloatingCta isVisible={showFloatingCta} />

      {/* Floating Ticker - Bottom Left */}
      <div className={`fixed bottom-8 left-8 z-50 hidden md:flex flex-col gap-1 transition-opacity duration-500 ${isDarkZone ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          System Status: Online
        </div>
        <div className="text-xs font-mono text-slate-500">
          BLK: <span className="text-slate-900 font-bold">#18,294,002</span>
        </div>
      </div>

    </div>
  );
};

export default App;