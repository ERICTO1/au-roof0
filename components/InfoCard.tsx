import React from 'react';
import { motion } from 'framer-motion';
import { MetricData } from '../types';
import { Clock, TrendingUp, Zap, Wallet, Activity, Home, Gem, ChevronDown, ArrowRight } from 'lucide-react';

interface InfoCardProps {
  data: MetricData;
  isActive: boolean;
  isHero?: boolean;
}

const iconMap = {
  clock: Clock,
  'trending-up': TrendingUp,
  zap: Zap,
  wallet: Wallet,
  activity: Activity,
  home: Home,
  gem: Gem,
};

const InfoCard: React.FC<InfoCardProps> = ({ data, isActive, isHero = false }) => {
  const Icon = iconMap[data.icon];

  // --- HERO VARIANT DESIGN ---
  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-5xl mx-auto relative z-20"
      >
        {/* Intro Tag */}
        <span className="text-sm font-bold tracking-[0.3em] text-amber-400 uppercase mb-8 border-b border-amber-500/30 pb-4 shadow-sm">
          The Complete Sunshine Rush Leaderboard
        </span>

        {/* Massive Headline */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 drop-shadow-2xl">
          SOLAR<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">RUSH</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light leading-relaxed mb-12 drop-shadow-lg">
          Identify high-yield <span className="font-semibold text-amber-400">Real World Assets</span> (RWA) in the Australian photovoltaic network.
        </p>

        {/* Hero CTA */}
        <div className="flex gap-4 mb-20">
          <button className="bg-amber-500 text-black px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]">
            Start Exploring
          </button>
          <button className="bg-black/30 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all">
            Read Whitepaper
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -bottom-32 flex flex-col items-center gap-2 text-slate-400/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 text-white/50">Scroll to Locate</span>
        </motion.div>
      </motion.div>
    );
  }

  // --- STANDARD CARD DESIGN ---
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isActive ? 1 : 0.3, x: isActive ? 0 : -20, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden p-8 md:p-10 rounded-3xl backdrop-blur-md transition-all duration-300 w-full max-w-lg
        ${isActive
          ? 'bg-white/80 border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]'
          : 'bg-white/30 border border-white/50'}`}
    >

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex justify-between items-start">
          <div className={`p-4 rounded-2xl ${isActive ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'}`}>
            <Icon size={24} />
          </div>
          {isActive && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Live Data</span>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
            {data.city} Region
          </h4>
          <h2 className={`text-4xl md:text-5xl font-black leading-none tracking-tight mb-4 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
            {data.title}
          </h2>
        </div>

        <div className="py-6 border-t border-slate-100">
          <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-5xl font-mono font-medium tracking-tighter 
                ${isActive ? 'text-amber-500' : 'text-slate-300'}`}>
              {data.value}
            </span>
          </div>
          <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{data.subValue}</div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          {data.description}
        </p>

        {isActive && (
          <div className="flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-slate-900 cursor-pointer group">
            View Asset Details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InfoCard;