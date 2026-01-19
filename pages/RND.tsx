import React from 'react';
import Section from '../components/Section';
import { Microscope, Radio, Share2, FileCode2 } from 'lucide-react';

const RND: React.FC = () => {
  return (
    <>
      <div className="bg-slate-950 py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white font-mono mb-2">Research & Development</h1>
          <p className="text-slate-400">Pushing the boundaries of embedded systems.</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-slate-300">
            We are committed to pushing the boundaries of what is possible in autonomous systems. Our R&D division focuses on overcoming the limitations of current commercial off-the-shelf technology to create sovereign, military-grade intellectual property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800 p-8 border border-slate-700 hover:border-sky-500 transition-colors group">
            <Radio className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-white mb-3">Multiband Comms</h3>
            <p className="text-slate-400 text-sm">
              Researching resilient communication links spanning from 900KHz up to 60GHz to ensure connectivity in jammed environments.
            </p>
          </div>
          <div className="bg-slate-800 p-8 border border-slate-700 hover:border-sky-500 transition-colors group">
            <Microscope className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-white mb-3">CWFM Radar</h3>
            <p className="text-slate-400 text-sm">
              Developing Continuous Wave Frequency Modulation radar systems for precise altimetry and object detection in compact form factors.
            </p>
          </div>
           <div className="bg-slate-800 p-8 border border-slate-700 hover:border-sky-500 transition-colors group">
            <Share2 className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-white mb-3">MESH Networks</h3>
            <p className="text-slate-400 text-sm">
              Self-healing network protocols allowing drone swarms to maintain data integrity even when individual nodes are compromised.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-16">
          <h2 className="text-2xl font-bold text-white font-mono mb-8 text-center">Engineering Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {["Requirements & Architecture", "Prototyping & Validation", "Integration Testing", "Field Feedback Loop"].map((step, i) => (
               <div key={i} className="bg-slate-900 p-6 text-center relative">
                 <div className="text-5xl font-bold text-slate-800 absolute top-2 right-4 z-0">{i + 1}</div>
                 <div className="relative z-10">
                   <FileCode2 className="mx-auto text-slate-500 mb-3" />
                   <h4 className="text-white font-bold">{step}</h4>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default RND;