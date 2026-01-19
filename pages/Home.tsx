import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { PageRoutes } from '../types';
import { Shield, Target, Cpu, CheckCircle2, Zap, BarChart3, Database } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/img/hero-bg.jpg")' }}
        >
          <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-sky-900/30 border border-sky-700/50 px-3 py-1 mb-6 rounded-sm">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
              <span className="text-sky-300 text-xs font-mono uppercase tracking-widest">Systems Online</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Military-Grade Automated Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-slate-400">Built In-House in Malaysia</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light">
              Pioneering advanced embedded electronics and autonomous platforms. 
              Sovereign design, resilient engineering, and mission-critical reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to={PageRoutes.SOLUTIONS_UNMANNED} variant="primary">Explore Solutions</Button>
              <Button to={PageRoutes.CONTACT} variant="outline">Request Briefing</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Snapshot */}
      <Section darker className="border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="p-4">
            <p className="text-4xl font-mono font-bold text-white mb-2">2019</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Incorporated 13 May</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-mono font-bold text-white mb-2">100%</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Bumiputera Company</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-mono font-bold text-white mb-2">In-House</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Hardware & Software</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-mono font-bold text-white mb-2">Mil-Spec</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Industrial & Defense</p>
          </div>
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white font-mono mb-4">Core Solutions</h2>
          <div className="h-1 w-20 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-slate-800 border border-slate-700 hover:border-sky-600 transition-all duration-300 flex flex-col">
            <div className="h-48 w-full bg-slate-700 relative overflow-hidden">
               <img src="/assets/img/unmanned-system-solution.jpeg" alt="Drone" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
               <div className="absolute top-4 left-4 bg-sky-700 px-2 py-1 text-xs font-bold text-white uppercase">Air / Land / Sea</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">Unmanned Automated Systems</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                High-endurance autonomous platforms designed for reliability and extended flight time. Fully adaptable to end-user mission profiles.
              </p>
              <Button to={PageRoutes.SOLUTIONS_UNMANNED} variant="outline" className="w-full">View Platforms</Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-slate-800 border border-slate-700 hover:border-amber-600 transition-all duration-300 flex flex-col">
            <div className="h-48 w-full bg-slate-700 relative overflow-hidden">
               <img src="/assets/img/navera.jpeg" alt="Radar" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
               <div className="absolute top-4 left-4 bg-amber-600 px-2 py-1 text-xs font-bold text-white uppercase">Electronic Warfare</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">NAVERA</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                GNSS Integrity & Anti-Spoofing. Passive receive-only technology to detect jamming and spoofing, ensuring resilient navigation.
              </p>
              <Button to={PageRoutes.SOLUTIONS_NAVERA} variant="outline" className="w-full border-amber-600/50 text-amber-500 hover:bg-amber-900/20">View NAVERA</Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-slate-800 border border-slate-700 hover:border-sky-600 transition-all duration-300 flex flex-col">
            <div className="h-48 w-full bg-slate-700 relative overflow-hidden">
               <img src="/assets/img/simulation-system.jpeg" alt="Simulator" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
               <div className="absolute top-4 left-4 bg-slate-600 px-2 py-1 text-xs font-bold text-white uppercase">Training</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">Simulator System</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Advanced motion simulation with real-time networking and 3D engine. Adaptable interfaces for training and mission rehearsal.
              </p>
              <Button to={PageRoutes.SOLUTIONS_SIMULATOR} variant="outline" className="w-full">View Simulator</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white font-mono mb-6">Mission Critical Engineering</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              At LETILICA, we don't just assemble parts. We commit to deep R&D, designing our firmware, hardware, and integration layers from the ground up to ensure data security and operational superiority in contested environments.
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {[
                "Unmanned Automated Systems",
                "Customizable Drone Solutions",
                "AI-Powered Data Processing",
                "Global Navigation Satellite System",
                "Stealth and Durability",
                "Advanced Motion Simulator"
              ].map((item, index) => (
                <li key={index} className="flex items-center bg-slate-900 p-4 border-l-4 border-sky-600">
                  <span className="text-sky-600 font-mono font-bold mr-4">0{index + 1}</span>
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Capabilities Icons */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-widest">Operational Capabilities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <Cpu />, title: "In-House Design" },
            { icon: <Database />, title: "Custom Firmware" },
            { icon: <Target />, title: "Sensor Fusion" },
            { icon: <CheckCircle2 />, title: "End-to-End Testing" },
            { icon: <Zap />, title: "Top-Tier Microprocessors" },
            { icon: <BarChart3 />, title: "Easy Upgrades" },
          ].map((cap, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-slate-800 border border-slate-700/50 hover:bg-slate-700 hover:border-sky-500 transition-all text-center group">
              <div className="text-sky-500 mb-4 group-hover:scale-110 transition-transform">{cap.icon}</div>
              <h3 className="text-white font-bold text-sm uppercase">{cap.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* R&D Teaser */}
      <Section darker className="border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white font-mono mb-4">Research & Development</h2>
            <ul className="flex flex-wrap gap-4 text-slate-400 mb-6">
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></div>Multiband (900K to 60GHz)</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></div>CWFM Radar</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></div>Self-healing MESH Network</li>
            </ul>
          </div>
          <Button to={PageRoutes.RND} variant="secondary">Explore R&D</Button>
        </div>
      </Section>

      {/* CTA Band */}
      <section className="py-16 bg-sky-900 border-t border-sky-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">For defence and industrial stakeholders</h2>
          <p className="text-sky-200 mb-8">Request a technical briefing to discuss specific operational requirements.</p>
          <Button to={PageRoutes.CONTACT} variant="white">Contact LETILICA</Button>
        </div>
      </section>
    </>
  );
};

export default Home;