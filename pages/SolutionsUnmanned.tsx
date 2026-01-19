import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { PageRoutes } from '../types';
import { Plane, Battery, Settings, Wrench, ArrowDownCircle } from 'lucide-react';

const SolutionsUnmanned: React.FC = () => {
  return (
    <>
       <div className="bg-slate-950 py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-900/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block px-2 py-1 bg-sky-900/50 text-sky-400 text-xs font-bold uppercase mb-4 border border-sky-800">Air / Land / Sea</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">Unmanned Automated Systems</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Development, manufacturing, and deployment of high-performance platforms designed for superior endurance and payload flexibility.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { name: "NODE Series", imgURL: "/assets/img/node.jpeg", desc: "Tactical Multi-rotor for urban ISR." },
            { name: "SCOUT", imgURL: "/assets/img/scout.jpeg", desc: "Long-range fixed-wing surveillance." },
            { name: "DENGGI Series", imgURL: "/assets/img/denggi.jpg", desc: "Specialized heavy-lift industrial vector." },
            { name: "HAN2", imgURL: "/assets/img/unmanned-system-solution.jpeg", desc: "Next-gen hybrid propulsion platform." },
          ].map((platform, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 flex flex-col hover:border-sky-500 transition-colors">
              <div className="h-48 bg-slate-700 overflow-hidden relative">
                 <img src={platform.imgURL} alt={platform.name} className="w-full h-full object-cover opacity-70" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white font-mono mb-2">{platform.name}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow">{platform.desc}</p>
                <div className="space-y-3">
                  <button className="w-full py-2 border border-slate-600 text-slate-300 text-xs uppercase font-bold hover:bg-slate-700 transition-colors">View Specs</button>
                  <button className="w-full py-2 bg-sky-700 text-white text-xs uppercase font-bold hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
                    <ArrowDownCircle size={14} /> Brochure (PDF)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Performance Characteristics</h3>
            <ul className="space-y-6">
              {[
                { icon: <Battery />, title: "Extended Flight Time", text: "Optimized power management systems for long-endurance missions." },
                { icon: <Plane />, title: "High Reliability", text: "Redundant flight controllers and failsafe mechanisms standard on all military models." },
                { icon: <Settings />, title: "Modular Payloads", text: "Universal mounting rails allowing quick swap of EO/IR, LiDAR, or cargo." },
              ].map((item, idx) => (
                <li key={idx} className="flex">
                  <div className="mr-4 text-sky-500 bg-slate-800 p-3 h-fit rounded-sm border border-slate-700">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 flex flex-col justify-center items-center text-center">
            <Wrench className="text-slate-600 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Lifecycle Support</h3>
            <p className="text-slate-400 text-sm mb-6">
              Our commitment extends beyond delivery. We provide field maintainability training, end-user configurable profiles, and a clear upgrade pathway for all airframes.
            </p>
            <Button to={PageRoutes.CONTACT} variant="primary">Request Platform Demo</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SolutionsUnmanned;