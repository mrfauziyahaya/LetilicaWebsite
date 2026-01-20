import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: 'Unmanned Systems',
    message: '',
    honeypot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam
    
    // Simulate submission
    alert('Thank you for your interest. A representative will contact you shortly.');
    setFormData({ name: '', organization: '', email: '', phone: '', interest: 'Unmanned Systems', message: '', honeypot: '' });
  };

  return (
    <>
      <div className="bg-slate-950 py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white font-mono mb-2">Contact</h1>
          <p className="text-slate-400">Get in touch with our engineering team.</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Reach Out</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-sky-500 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-white font-bold uppercase mb-1">Headquarters</h3>
                  <p className="text-slate-400">No 21-1, Jalan Wangsa Delima 2A,</p>
                  <p className="text-slate-400">Pusat Bandar Wangsa Maju,</p>
                  <p className="text-slate-400">53300 Kuala Lumpur, Malaysia</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-sky-500 mt-1 mr-4" size={24} />
                 <div>
                  <h3 className="text-white font-bold uppercase mb-1">Email</h3>
                  <a href="mailto:info@letilica.com" className="text-slate-400 hover:text-white transition-colors">info@letilica.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-sky-500 mt-1 mr-4" size={24} />
                 <div>
                  <h3 className="text-white font-bold uppercase mb-1">Phone</h3>
                  <p className="text-slate-400">+60172821709</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-sky-500 mt-1 mr-4" size={24} />
                 <div>
                  <h3 className="text-white font-bold uppercase mb-1">Working Hours</h3>
                  <p className="text-slate-400">Monday - Friday: 09:00 - 18:00 (MYT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800 p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Request Briefing</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-sky-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Organization</label>
                  <input required type="text" name="organization" value={formData.organization} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-sky-500 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-sky-500 focus:outline-none" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-sky-500 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Area of Interest</label>
                <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-sky-500 focus:outline-none">
                  <option value="Unmanned Systems">Unmanned Automated Systems</option>
                  <option value="NAVERA">NAVERA (GNSS Integrity)</option>
                  <option value="Simulator">Simulator System</option>
                  <option value="R&D">Research & Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 focus:border-sky-500 focus:outline-none"></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full">Send Request</Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;