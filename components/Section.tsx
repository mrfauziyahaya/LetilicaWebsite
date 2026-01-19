import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full ${darker ? 'bg-slate-950' : 'bg-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;