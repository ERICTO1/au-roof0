import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Satellite } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-center relative z-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-20 shadow-[0_0_80px_-20px_rgba(245,158,11,0.3)]"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
             }} 
        />
        
        {/* Laser Scanner Effect */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_#f59e0b] animate-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-950/50 border border-amber-500/30 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
            <Cpu size={16} className="text-amber-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">AI Valuation Engine V2.0</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            ACTIVATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 animate-gradient bg-300%">
              ROOFTOP NODE
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Don't let your assets sit dormant. Our AI analyzes satellite topography and irradiance data to calculate your property's precise <span className="text-amber-400 font-bold">Mining Hashrate</span>.
          </p>

          {/* Input Module */}
          <div className="relative w-full max-w-xl mx-auto group/input">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-20 group-hover/input:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-slate-950 border border-slate-700 rounded-2xl p-2 transition-colors focus-within:border-amber-500/50">
                <div className="pl-4 text-slate-500">
                    <Satellite size={24} />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter property address to scan..." 
                  className="w-full bg-transparent text-white px-4 py-4 focus:outline-none text-lg font-medium placeholder:text-slate-600"
                />
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap">
                  Run Simulation
                  <ArrowRight size={16} />
                </button>
            </div>
            
            {/* Disclaimer / Data Points */}
            <div className="flex justify-between mt-4 px-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Input: Geo-Coordinates</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Output: Yield Forecast</span>
            </div>
          </div>

        </div>
      </motion.div>
      
      <div className="mt-8 text-slate-500 text-sm">
         Joined by <span className="text-white font-bold">14,023</span> homeowners this week.
      </div>
    </div>
  );
};

export default CtaSection;