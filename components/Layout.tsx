import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Shield } from 'lucide-react';
import { PageRoutes } from '../types';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-300 font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="uppercase tracking-widest hidden sm:block">Advanced Embedded Electronics for Automated Systems</span>
          <div className="flex space-x-6">
            <a href="mailto:info@letilica.com" className="hover:text-sky-400 flex items-center gap-1">
              <Mail size={12} /> info@letilica.com
            </a>
            <span className="hidden sm:inline">|</span>
            <Link to={PageRoutes.CONTACT} className="hover:text-sky-400 font-bold text-sky-500">
              REQUEST BRIEFING
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={PageRoutes.HOME} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-sky-700 flex items-center justify-center rounded-sm">
                <Shield className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tighter font-mono group-hover:text-sky-400 transition-colors">LETILICA</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] leading-none">Defence Systems</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to={PageRoutes.HOME} className="text-sm font-semibold uppercase tracking-wide hover:text-sky-400 transition-colors">Home</Link>
              <Link to={PageRoutes.ABOUT} className="text-sm font-semibold uppercase tracking-wide hover:text-sky-400 transition-colors">About</Link>
              
              {/* Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="flex items-center text-sm font-semibold uppercase tracking-wide hover:text-sky-400 transition-colors focus:outline-none">
                  Solutions <ChevronDown size={14} className="ml-1" />
                </button>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-700 shadow-xl py-2 mt-0 rounded-sm">
                    <Link to={PageRoutes.SOLUTIONS_UNMANNED} className="block px-4 py-3 text-sm hover:bg-slate-800 hover:text-sky-400 border-l-2 border-transparent hover:border-sky-500">Unmanned Systems</Link>
                    <Link to={PageRoutes.SOLUTIONS_NAVERA} className="block px-4 py-3 text-sm hover:bg-slate-800 hover:text-sky-400 border-l-2 border-transparent hover:border-sky-500">NAVERA (GNSS Integrity)</Link>
                    <Link to={PageRoutes.SOLUTIONS_SIMULATOR} className="block px-4 py-3 text-sm hover:bg-slate-800 hover:text-sky-400 border-l-2 border-transparent hover:border-sky-500">Simulator System</Link>
                  </div>
                )}
              </div>

              <Link to={PageRoutes.RND} className="text-sm font-semibold uppercase tracking-wide hover:text-sky-400 transition-colors">R&D</Link>
              <Link to={PageRoutes.CAPABILITIES} className="text-sm font-semibold uppercase tracking-wide hover:text-sky-400 transition-colors">Capabilities</Link>
              <Link to={PageRoutes.CONTACT} className="px-4 py-2 border border-sky-600 text-sky-400 text-xs font-bold uppercase tracking-wider hover:bg-sky-600 hover:text-white transition-all">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to={PageRoutes.HOME} onClick={closeMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Home</Link>
              <Link to={PageRoutes.ABOUT} onClick={closeMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">About</Link>
              <div className="pl-4 border-l-2 border-slate-800 ml-3">
                <span className="block px-3 py-2 text-xs font-bold text-slate-500 uppercase">Solutions</span>
                <Link to={PageRoutes.SOLUTIONS_UNMANNED} onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-400 hover:text-white">Unmanned Systems</Link>
                <Link to={PageRoutes.SOLUTIONS_NAVERA} onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-400 hover:text-white">NAVERA</Link>
                <Link to={PageRoutes.SOLUTIONS_SIMULATOR} onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-400 hover:text-white">Simulator System</Link>
              </div>
              <Link to={PageRoutes.RND} onClick={closeMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">R&D</Link>
              <Link to={PageRoutes.CAPABILITIES} onClick={closeMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Capabilities</Link>
              <Link to={PageRoutes.CONTACT} onClick={closeMobileMenu} className="block px-3 py-3 text-base font-medium text-sky-400 hover:text-sky-300 hover:bg-slate-800 font-bold">Contact Us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center space-x-2 mb-4">
                <Shield className="text-sky-700" size={24} />
                <span className="text-xl font-bold text-white font-mono">LETILICA</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specializing in military-grade embedded electronics and autonomous platforms. Delivering sovereign capabilities for national defence.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to={PageRoutes.SOLUTIONS_UNMANNED} className="hover:text-sky-400 transition-colors">Unmanned Systems</Link></li>
                <li><Link to={PageRoutes.SOLUTIONS_NAVERA} className="hover:text-sky-400 transition-colors">NAVERA (Anti-Spoofing)</Link></li>
                <li><Link to={PageRoutes.SOLUTIONS_SIMULATOR} className="hover:text-sky-400 transition-colors">Simulator System</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to={PageRoutes.ABOUT} className="hover:text-sky-400 transition-colors">About Us</Link></li>
                <li><Link to={PageRoutes.CAPABILITIES} className="hover:text-sky-400 transition-colors">Capabilities</Link></li>
                <li><Link to={PageRoutes.RND} className="hover:text-sky-400 transition-colors">R&D</Link></li>
                <li><Link to={PageRoutes.CONTACT} className="hover:text-sky-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start">
                   <MapPin size={16} className="mt-1 mr-2 text-slate-500" />
                   <span>Cyberjaya, Malaysia</span>
                </li>
                <li className="flex items-center">
                   <Mail size={16} className="mr-2 text-slate-500" />
                   <a href="mailto:info@letilica.com" className="hover:text-white">info@letilica.com</a>
                </li>
                 <li className="flex items-center">
                   <Phone size={16} className="mr-2 text-slate-500" />
                   <span>+60 3-1234 5678</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} LETILICA. All rights reserved.</p>
            <p className="mt-2 md:mt-0 uppercase tracking-widest text-[10px] text-slate-600">Confidentiality Notice: Content for authorized personnel only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;