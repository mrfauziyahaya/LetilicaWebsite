import React from 'react';
import Section from '../components/Section';
import { PageRoutes } from '../types';
import { Link } from 'react-router-dom';
import { Shield, Flag, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-slate-950 py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white font-mono mb-2">About LETILICA</h1>
          <div className="flex items-center text-sm text-slate-500 space-x-2">
            <Link to={PageRoutes.HOME} className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About</span>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-sky-500 pl-4">Company Overview</h2>
          <div className="prose prose-invert prose-lg text-slate-400 mb-12">
            <p className="mb-4">
              Incorporated on 13 May 2019, LETILICA is a 100% Bumiputera company focused on designing and manufacturing advanced embedded electronics for automated systems.
            </p>
            <p className="mb-4">
              We specialize in military drone platforms, auxiliary guidance systems, and industrial automation solutions. Our engineering philosophy centers on creating platforms with extended flight times, exceptional reliability, and high adaptability to end-user needs.
            </p>
            <p>
              By controlling the design process of both hardware and software in-house, we ensure that every system deployed meets rigorous standards for durability and data security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-8 border-t-4 border-sky-600 rounded-sm">
              <div className="flex items-center mb-4">
                <Compass className="text-sky-500 mr-3" size={28} />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Vision</h3>
              </div>
              <p className="text-slate-300">
                To be the premier provider of sovereign automated systems, setting the standard for resilience and innovation in the ASEAN defense sector.
              </p>
            </div>

            <div className="bg-slate-800 p-8 border-t-4 border-amber-600 rounded-sm">
               <div className="flex items-center mb-4">
                <Flag className="text-amber-500 mr-3" size={28} />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Mission</h3>
              </div>
              <p className="text-slate-300">
                To design, build, and deploy robust unmanned solutions that enhance national security and industrial efficiency through precision engineering and deep-tech innovation.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-8">
            <h3 className="text-lg font-bold text-white mb-6 text-center uppercase tracking-widest">Operating Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "Precision Engineering",
                 "Reliability in Contested Environments",
                 "Sovereign Capability (Design Independence)",
                 "Modular & Upgradeable Architectures"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center p-3 bg-slate-950">
                   <Shield className="text-sky-600 mr-3" size={16} />
                   <span className="text-sm font-semibold text-slate-300">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;