import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  type?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  children,
  href,
  type = 'primary',
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseClasses = type === 'primary' 
    ? 'bg-brand-orange text-white hover:bg-brand-orange-dark' 
    : 'bg-transparent text-white border-2 border-brand-orange hover:bg-brand-orange';
  
  const classes = `${baseClasses} px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow hover:-translate-y-1 inline-flex items-center justify-center ${className}`;

  return (
    <Link to={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}