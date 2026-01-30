import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Server, Code2, Database, CheckCircle2 } from 'lucide-react';

const MethodologySection: React.FC = () => {
  const steps = [
    {
      id: 'L1',
      layer: 'LAYER 1: DATA ACQUISITION',
      title: 'Satellite Telemetry',
      icon: Satellite,
      desc: 'We ingest raw LiDAR point-cloud data and solar irradiance maps from Sentinel-2 satellites and local meteorological stations.',
      details: ['NASA POWER API', 'LiDAR Point Cloud', 'Historical Weather Data']
    },
    {
      id: 'L2',
      layer: 'LAYER 2: GEOMETRIC CONSENSUS',
      title: '3D Voxel Engine',
      icon: Server,
      desc: 'Our proprietary geometry engine reconstructs your roof pitch, azimuth, and shading obstacles (trees, chimneys) to calculate usable surface area.',
      details: ['Vector Analysis', 'Shadow Ray-Tracing', 'Surface Segmentation']
    },
    {
      id: 'L3',
      layer: 'LAYER 3: VALUATION PROTOCOL',
      title: 'Financial Oracle',
      icon: Code2,
      desc: 'We cross-reference real-time energy spot prices, feed-in tariffs, and hardware depreciation curves to mint your property\'s value score.',
      details: ['Spot Price Oracle', 'ROI Projection', 'Asset Tokenization Logic']
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-20">
      
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">
          Proof of Calculation
        </h2>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
          PROTOCOL <span className="text-amber-500">ARCHITECTURE</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900/80 transition-all hover:border-amber-500/30 overflow-hidden"
          >
            {/* Background Tech Elements */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Database size={64} />
            </div>

            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-2 mb-6">
                    <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-mono font-bold text-amber-500 border border-slate-700">
                        {step.id}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        {step.layer}
                    </span>
                </div>

                <div className="mb-6 p-4 bg-slate-950/50 rounded-xl border border-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={32} className="text-slate-200 group-hover:text-amber-400 transition-colors" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                    {step.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {step.desc}
                </p>

                <div className="space-y-2 border-t border-slate-800 pt-6">
                    {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-500">
                            <CheckCircle2 size={12} className="text-emerald-500/50" />
                            {detail}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Bottom highlight bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-amber-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicator */}
      <div className="mt-16 border-t border-slate-800 pt-8 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
         {/* Simple text placeholders for logos to keep it clean */}
         <span className="text-lg font-black text-slate-400 tracking-wider">NASA POWER</span>
         <span className="text-lg font-black text-slate-400 tracking-wider">OPEN STREET MAP</span>
         <span className="text-lg font-black text-slate-400 tracking-wider">SENTINEL HUB</span>
         <span className="text-lg font-black text-slate-400 tracking-wider">NREL</span>
      </div>

    </div>
  );
};

export default MethodologySection;