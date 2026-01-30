import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';

interface FloatingCtaProps {
  isVisible: boolean;
}

const FloatingCta: React.FC<FloatingCtaProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[600px] z-[60]"
        >
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-2xl flex items-center gap-2 shadow-black/50 ring-1 ring-white/10">
            
            <div className="pl-4 text-slate-400 hidden sm:block">
               <Search size={20} />
            </div>
            
            <input 
              type="text" 
              placeholder="Check another property address..." 
              className="flex-grow bg-transparent text-white px-2 sm:px-4 py-3 focus:outline-none text-sm font-medium placeholder:text-slate-500"
            />
            
            <button className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap">
              Calculate
              <ArrowRight size={14} />
            </button>
          
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;