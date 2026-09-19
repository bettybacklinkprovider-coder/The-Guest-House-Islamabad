import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const imageSizes = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* GH Monogram Image Container */}
      <div 
        className={`relative overflow-hidden rounded-lg shadow-sm shrink-0 border transition-transform duration-200 group-hover:scale-105 ${sizeClasses[size]} ${
          variant === 'light' 
            ? 'bg-white border-slate-200' 
            : variant === 'gold' 
            ? 'bg-amber-100 border-amber-300' 
            : 'bg-emerald-950 border-emerald-800'
        }`}
      >
        <img
          src="/logo.jpg"
          alt="The Guest House Islamabad Logo"
          className="w-full h-full object-cover mix-blend-multiply filter contrast-125"
          width={imageSizes[size]}
          height={imageSizes[size]}
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback SVG if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback Vector SVG Monogram GH */}
        <div className="absolute inset-0 flex items-center justify-center font-serif font-bold text-slate-900 pointer-events-none -z-10">
          <span className="text-sm tracking-tighter">GH</span>
        </div>
      </div>

      {/* Brand Text Labels */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif font-bold tracking-tight leading-tight ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-lg sm:text-xl'
          } ${
            variant === 'light' 
              ? 'text-white' 
              : 'text-emerald-950 group-hover:text-emerald-800'
          }`}>
            The Guest House
          </span>
          <span className={`font-semibold tracking-widest uppercase text-[10px] sm:text-[11px] ${
            variant === 'light' ? 'text-amber-300' : 'text-amber-700'
          }`}>
            Islamabad
          </span>
        </div>
      )}
    </div>
  );
};
