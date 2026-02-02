import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';

const FooterSection: React.FC = () => {
    return (
        <footer className="w-full bg-slate-950 border-t border-slate-900 pt-20 pb-10 px-6 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-2xl font-black tracking-widest text-white uppercase">greensketch</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Decentralizing energy infrastructure intelligence. Empowering homeowners to become grid validators.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Twitter size={18} /></a>
                        <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Github size={18} /></a>
                        <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Disc size={18} /></a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Protocol</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Governance</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Tokenomics</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Whitepaper</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Roadmap</a></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Data & API</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Developer Docs</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Oracle Feeds</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">System Status</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Node Explorer</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Stay Updated</h4>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                        <button className="bg-white text-black px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <p>&copy; 2024 greensketch. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-400">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;