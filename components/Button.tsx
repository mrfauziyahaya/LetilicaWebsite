import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900";
  
  const variants = {
    primary: "border-transparent bg-sky-700 text-white hover:bg-sky-600 focus:ring-sky-500 shadow-lg shadow-sky-900/50",
    secondary: "border-transparent bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-500 shadow-lg shadow-amber-900/50",
    outline: "border-slate-500 text-slate-300 hover:bg-slate-800 hover:border-slate-400 focus:ring-slate-500",
    white: "border-transparent bg-white text-sky-900 hover:bg-slate-100 focus:ring-white shadow-lg shadow-black/20"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;