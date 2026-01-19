import React from 'react';
import Section from '../components/Section';
import { Cpu, Code, Target, Anchor, Layers, RefreshCw } from 'lucide-react';

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Complete In-House Design",
      icon: <Layers size={32} />,
      desc: "From PCB layout to mechanical chassis design, we control every aspect of the hardware development lifecycle to ensure sovereignty."
    },
    {
      title: "Custom Firmware & Software",
      icon: <Code size={32} />,
      desc: "We write our own code. No black boxes. This allows for deep optimization and security auditing of mission-critical logic."
    },
    {
      title: "Comprehensive Sensor Fusion",
      icon: <Target size={32} />,
      desc: "Integrating IMU, GNSS, LiDAR, and optical flow sensors to create a unified reliable state estimation for autonomous navigation."
    },
    {
      title: "End-to-End Integration",
      icon: <Anchor size={32} />,
      desc: "Full system integration including propulsion, power, payload, and communications, validated through rigorous testing."
    },
    {
      title: "Top-Tier Microprocessors",
      icon: <Cpu size={32} />,
      desc: "Utilizing industrial and automotive grade chips for durability, with readiness for alternative CPU architectures (RISC-V/ARM) for supply chain independence."
    },
    {
      title: "Easy Upgrades",
      icon: <RefreshCw size={32} />,
      desc: "Modular architecture allows for cost-effective feature additions and hardware swaps without retiring the entire platform."
    }
  ];

  return (
    <>
      <div className="bg-slate-950 py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white font-mono mb-2">Capabilities</h1>
          <p className="text-slate-400">Our core competencies in embedded systems.</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-slate-800 p-8 border border-slate-700 hover:border-slate-500 transition-all shadow-lg hover:shadow-sky-900/20">
              <div className="text-sky-500 mb-6">{cap.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-sm p-8 flex flex-wrap justify-center gap-8 text-center">
           <div className="px-6 py-2 border border-sky-900 bg-sky-900/20 text-sky-400 uppercase font-bold tracking-widest text-xs rounded-full">Sovereign Engineering</div>
           <div className="px-6 py-2 border border-sky-900 bg-sky-900/20 text-sky-400 uppercase font-bold tracking-widest text-xs rounded-full">Modular Architecture</div>
           <div className="px-6 py-2 border border-sky-900 bg-sky-900/20 text-sky-400 uppercase font-bold tracking-widest text-xs rounded-full">Maintainable Lifecycle</div>
        </div>
      </Section>
    </>
  );
};

export default Capabilities;