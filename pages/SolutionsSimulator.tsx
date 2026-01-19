import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { PageRoutes } from '../types';
import { Gamepad2, Monitor, Network, Move } from 'lucide-react';

const SolutionsSimulator: React.FC = () => {
  return (
    <>
      <div className="bg-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
           <div className="inline-block px-2 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase mb-4 border border-slate-700">Training & Simulation</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">Simulator System</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            High-fidelity motion simulation integrated with real-time networking and 3D rendering engines.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
             <h2 className="text-2xl font-bold text-white mb-6">Immersive Fidelity</h2>
             <p className="text-slate-400 mb-4">
               Our simulator systems bridge the gap between digital training and physical reality. Built on a robust 3D rendering engine, the system supports high adaptability for various control interfaces including joysticks, throttle quadrants, and specialized switch panels.
             </p>
             <p className="text-slate-400">
               Whether for pilot training, R&D validation of flight models, or entertainment, the system delivers low-latency response and realistic physics.
             </p>
          </div>
          <div className="order-1 lg:order-2 h-64 bg-slate-800 rounded-sm border border-slate-700 flex items-center justify-center">
             <Gamepad2 size={64} className="text-slate-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800 p-6 border-t-2 border-sky-500">
            <h3 className="text-white font-bold mb-2">Training</h3>
            <p className="text-sm text-slate-400">Procedural training for unmanned and manned vehicle operators.</p>
          </div>
           <div className="bg-slate-800 p-6 border-t-2 border-sky-500">
            <h3 className="text-white font-bold mb-2">Research & Development</h3>
            <p className="text-sm text-slate-400">Safe environment for testing control laws and mission logic before field deployment.</p>
          </div>
           <div className="bg-slate-800 p-6 border-t-2 border-sky-500">
            <h3 className="text-white font-bold mb-2">Mission Rehearsal</h3>
            <p className="text-sm text-slate-400">Pre-mission visualization using imported terrain data.</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-700 p-8">
          <h3 className="text-xl font-bold text-white font-mono mb-6 uppercase text-center">System Components</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
             <div className="p-4 bg-slate-950">
               <Move className="mx-auto text-sky-600 mb-2" />
               <span className="text-sm font-bold text-slate-300">Motion Platform</span>
             </div>
             <div className="p-4 bg-slate-950">
               <Monitor className="mx-auto text-sky-600 mb-2" />
               <span className="text-sm font-bold text-slate-300">Display / VR</span>
             </div>
              <div className="p-4 bg-slate-950">
               <Gamepad2 className="mx-auto text-sky-600 mb-2" />
               <span className="text-sm font-bold text-slate-300">Control Interface</span>
             </div>
              <div className="p-4 bg-slate-950">
               <Network className="mx-auto text-sky-600 mb-2" />
               <span className="text-sm font-bold text-slate-300">Networking</span>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SolutionsSimulator;