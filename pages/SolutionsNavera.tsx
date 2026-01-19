import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { PageRoutes } from '../types';
import { Radio, ShieldAlert, Globe, Lock } from 'lucide-react';

const SolutionsNavera: React.FC = () => {
  return (
    <>
      <div className="bg-slate-950 py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="inline-block px-2 py-1 bg-amber-900/50 text-amber-500 text-xs font-bold uppercase mb-4 border border-amber-800">Electronic Defense</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">NAVERA</h1>
          <p className="text-xl text-amber-500/80 max-w-2xl font-mono uppercase tracking-widest">
            GNSS Integrity & Anti-Spoofing System
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-2xl text-white font-light">
            "Malaysia’s first GNSS Integrity & Anti-Spoofing System, designed to ensure secure and resilient PNT in hostile electromagnetic environments."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800 p-8 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-white mb-6 uppercase flex items-center">
              <ShieldAlert className="mr-3 text-amber-500" /> Resilience Architecture
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 mt-2 mr-3"></span>
                <span className="text-slate-300"><strong className="text-white">Multi-Constellation Support:</strong> Simultaneous tracking of GPS, Galileo, BeiDou, and GLONASS.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 mt-2 mr-3"></span>
                <span className="text-slate-300"><strong className="text-white">Threat Detection:</strong> Real-time algorithms to detect spoofing signals and jamming interference.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 mt-2 mr-3"></span>
                <span className="text-slate-300"><strong className="text-white">Atomic Clock Sync:</strong> Internal time comparison to validate satellite signal integrity.</span>
              </li>
               <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 mt-2 mr-3"></span>
                <span className="text-slate-300"><strong className="text-white">Passive Operation:</strong> Receive-only system that does not emit RF, maintaining platform stealth.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 border border-slate-700 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Strategic Value</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Reliance on foreign PNT systems creates a vulnerability in national defence. NAVERA provides a sovereign, trusted navigation capability that reduces dependency and enhances national safety across critical infrastructure and military assets.
              </p>
            </div>
            <div className="flex gap-4 text-slate-500">
               <Globe size={32} />
               <Radio size={32} />
               <Lock size={32} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button to={PageRoutes.CONTACT} variant="secondary">Request Technical Specification</Button>
        </div>
      </Section>
    </>
  );
};

export default SolutionsNavera;