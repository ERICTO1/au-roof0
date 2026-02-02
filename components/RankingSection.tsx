import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, DollarSign, Zap, Clock, Percent, Activity, BarChart3, ArrowUpRight, ChevronDown, ChevronUp, Sun, Coins, Timer } from 'lucide-react';

const RankingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'aux'>('core');
  const [expandedCity, setExpandedCity] = useState<string | null>(null);

  const toggleCity = (city: string) => {
    setExpandedCity(expandedCity === city ? null : city);
  };

  // --- MOCK DATA ---
  const coreRankings = [
    { 
        rank: 1, 
        city: 'Sydney, NSW', 
        premium10y: '+$18,450', 
        premium20y: '+$45,200', 
        growth: '+12.4%',
        details: { gen: '20.5 kWh', invest: '$5,200', payback: '4.8 Yrs', yield: '$1,850', irr: '18.2%', eff: '3.9 kWh/kW' }
    },
    { 
        rank: 2, 
        city: 'Brisbane, QLD', 
        premium10y: '+$16,200', 
        premium20y: '+$41,800', 
        growth: '+14.1%',
        details: { gen: '24.2 kWh', invest: '$4,800', payback: '3.8 Yrs', yield: '$2,100', irr: '19.8%', eff: '4.8 kWh/kW' }
    },
    { 
        rank: 3, 
        city: 'Canberra, ACT', 
        premium10y: '+$15,800', 
        premium20y: '+$39,500', 
        growth: '+9.8%',
        details: { gen: '19.8 kWh', invest: '$5,500', payback: '5.2 Yrs', yield: '$1,900', irr: '16.5%', eff: '4.4 kWh/kW' }
    },
    { 
        rank: 4, 
        city: 'Perth, WA', 
        premium10y: '+$14,100', 
        premium20y: '+$36,200', 
        growth: '+11.2%',
        details: { gen: '23.8 kWh', invest: '$4,500', payback: '3.2 Yrs', yield: '$1,950', irr: '22.5%', eff: '4.7 kWh/kW' }
    },
    { 
        rank: 5, 
        city: 'Adelaide, SA', 
        premium10y: '+$13,500', 
        premium20y: '+$34,900', 
        growth: '+10.5%',
        details: { gen: '21.5 kWh', invest: '$4,200', payback: '3.5 Yrs', yield: '$1,750', irr: '18.5%', eff: '4.3 kWh/kW' }
    },
    { 
        rank: 6, 
        city: 'Melbourne, VIC', 
        premium10y: '+$12,200', 
        premium20y: '+$31,400', 
        growth: '+8.3%',
        details: { gen: '16.5 kWh', invest: '$5,100', payback: '5.8 Yrs', yield: '$1,400', irr: '14.2%', eff: '3.6 kWh/kW' }
    },
    { 
        rank: 7, 
        city: 'Darwin, NT', 
        premium10y: '+$11,800', 
        premium20y: '+$29,800', 
        growth: '+15.6%',
        details: { gen: '22.5 kWh', invest: '$6,200', payback: '4.1 Yrs', yield: '$2,450', irr: '20.1%', eff: '4.6 kWh/kW' }
    },
    { 
        rank: 8, 
        city: 'Hobart, TAS', 
        premium10y: '+$9,400', 
        premium20y: '+$24,100', 
        growth: '+6.2%',
        details: { gen: '14.2 kWh', invest: '$5,800', payback: '6.5 Yrs', yield: '$1,200', irr: '11.5%', eff: '3.2 kWh/kW' }
    },
  ];

  const auxMetrics = [
    { 
      title: 'Daily Generation', 
      icon: Zap, 
      unit: 'kWh/Day',
      data: [
        { label: 'Brisbane', value: '24.2' },
        { label: 'Perth', value: '23.8' },
        { label: 'Darwin', value: '22.5' },
        { label: 'Sydney', value: '20.1' }
      ]
    },
    { 
      title: 'Payback Period', 
      icon: Clock, 
      unit: 'Years',
      data: [
        { label: 'Perth', value: '3.2' },
        { label: 'Adelaide', value: '3.5' },
        { label: 'Brisbane', value: '3.8' },
        { label: 'Sydney', value: '4.5' }
      ]
    },
    { 
      title: 'Initial Investment', 
      icon: DollarSign, 
      unit: 'Avg 6.6kW',
      data: [
        { label: 'Adelaide', value: '$4,200' },
        { label: 'Perth', value: '$4,500' },
        { label: 'Brisbane', value: '$4,800' },
        { label: 'Melbourne', value: '$5,100' }
      ]
    },
    { 
      title: 'Annual Yield', 
      icon: Activity, 
      unit: 'AUD/Year',
      data: [
        { label: 'Darwin', value: '$2,450' },
        { label: 'Brisbane', value: '$2,100' },
        { label: 'Perth', value: '$1,950' },
        { label: 'Sydney', value: '$1,800' }
      ]
    },
    { 
      title: 'Internal RR', 
      icon: Percent, 
      unit: 'IRR %',
      data: [
        { label: 'Perth', value: '22.5%' },
        { label: 'Darwin', value: '20.1%' },
        { label: 'Brisbane', value: '19.8%' },
        { label: 'Adelaide', value: '18.5%' }
      ]
    },
    { 
      title: 'PV Efficiency', 
      icon: BarChart3, 
      unit: 'kWh/kW',
      data: [
        { label: 'Brisbane', value: '4.8' },
        { label: 'Perth', value: '4.7' },
        { label: 'Darwin', value: '4.6' },
        { label: 'Canberra', value: '4.4' }
      ]
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 relative z-20">
      
      {/* Section Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Market Intelligence</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
          NETWORK <span className="text-amber-500">CONSENSUS</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Aggregated performance metrics across the Australian decentralized energy grid.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button 
          onClick={() => setActiveTab('core')}
          className={`px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all border
            ${activeTab === 'core' 
              ? 'bg-amber-500 border-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
              : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500'}`}
        >
          Asset Valuation Index
        </button>
        <button 
          onClick={() => setActiveTab('aux')}
          className={`px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all border
            ${activeTab === 'aux' 
              ? 'bg-amber-500 border-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
              : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500'}`}
        >
          Performance Metrics
        </button>
      </div>

      {/* --- CORE RANKING TABLE --- */}
      {activeTab === 'core' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 backdrop-blur-md"
        >
          <div className="w-full">
            {/* Header */}
            <div className="flex border-b border-slate-800 text-xs font-mono uppercase tracking-widest text-slate-500">
                <div className="p-6 w-24">Rank</div>
                <div className="p-6 flex-1">Region / Node</div>
                <div className="p-6 w-48 text-right text-amber-500">10Y Asset Premium</div>
                <div className="p-6 w-48 text-right hidden md:block">20Y Asset Premium</div>
                <div className="p-6 w-32 text-right hidden sm:block">Growth</div>
                <div className="p-6 w-20"></div>
            </div>

            {/* Rows */}
            <div className="text-slate-300">
              {coreRankings.map((item) => {
                const isExpanded = expandedCity === item.city;
                return (
                    <React.Fragment key={item.city}>
                        <div 
                            onClick={() => toggleCity(item.city)}
                            className={`flex items-center cursor-pointer transition-colors border-b border-slate-800/50 
                                ${isExpanded ? 'bg-slate-800/50' : 'hover:bg-slate-800/30'}`}
                        >
                            <div className="p-6 w-24 font-mono text-slate-500">#{item.rank.toString().padStart(2, '0')}</div>
                            <div className="p-6 flex-1 font-bold text-white text-lg">{item.city}</div>
                            <div className="p-6 w-48 text-right font-mono text-amber-400 font-bold text-xl shadow-amber-500/10 drop-shadow-sm">{item.premium10y}</div>
                            <div className="p-6 w-48 text-right font-mono text-slate-400 hidden md:block">{item.premium20y}</div>
                            <div className="p-6 w-32 text-right font-mono text-emerald-400 hidden sm:block">{item.growth}</div>
                            <div className="p-6 w-20 text-right flex justify-end">
                                {isExpanded ? <ChevronUp className="text-amber-500" size={20} /> : <ChevronDown className="text-slate-600 group-hover:text-white" size={20} />}
                            </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-slate-900/80 border-b border-slate-800"
                                >
                                    <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <Sun size={14} className="text-amber-500" />
                                                Avg Daily Output
                                            </div>
                                            <div className="text-2xl font-mono text-white">{item.details.gen}</div>
                                            <div className="text-[10px] text-slate-600">Per household rooftop</div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <Coins size={14} className="text-emerald-500" />
                                                Initial Investment
                                            </div>
                                            <div className="text-2xl font-mono text-white">{item.details.invest}</div>
                                            <div className="text-[10px] text-slate-600">Avg 6.6kW system</div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <Timer size={14} className="text-blue-500" />
                                                Payback Period
                                            </div>
                                            <div className="text-2xl font-mono text-white">{item.details.payback}</div>
                                            <div className="text-[10px] text-slate-600">ROI Velocity</div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <Activity size={14} className="text-purple-500" />
                                                Annual Yield
                                            </div>
                                            <div className="text-2xl font-mono text-white">{item.details.yield}</div>
                                            <div className="text-[10px] text-slate-600">Net profit after consumption</div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <Percent size={14} className="text-pink-500" />
                                                Internal IRR
                                            </div>
                                            <div className="text-2xl font-mono text-white">{item.details.irr}</div>
                                            <div className="text-[10px] text-slate-600">Inflation adjusted</div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <BarChart3 size={14} className="text-orange-500" />
                                                PV Efficiency
                                            </div>
                                            <div className="text-2xl font-mono text-white">{item.details.eff}</div>
                                            <div className="text-[10px] text-slate-600">Grid throughput rating</div>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* --- AUXILIARY METRICS GRID --- */}
      {activeTab === 'aux' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {auxMetrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:border-amber-500/30 transition-all hover:bg-slate-900/80 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                  <metric.icon className="text-slate-400 group-hover:text-amber-500 transition-colors" size={20} />
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">{metric.title}</h3>
                    <span className="text-[10px] text-slate-500 font-mono">Unit: {metric.unit}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {metric.data.map((row, rIdx) => (
                  <div key={rIdx} className="flex justify-between items-center text-sm border-b border-dashed border-slate-800 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500 font-medium">{row.label}</span>
                    <span className="text-white font-mono font-bold">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

    </div>
  );
};

export default RankingSection;