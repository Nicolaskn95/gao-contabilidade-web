import React from 'react';

export const LighthouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    {...props}
  >
    <defs>
      <radialGradient id="light-beam-gradient" cx="50%" cy="0%" r="100%">
        <stop offset="0%" stopColor="var(--light-color, var(--color-gao-gold, #eab308))" stopOpacity="0.8" />
        <stop offset="100%" stopColor="var(--light-color, var(--color-gao-gold, #eab308))" stopOpacity="0" />
      </radialGradient>
    </defs>

    <g>
      <path 
        id="light-beam-path" 
        d="M 50 47 L 25 85 Q 50 95 75 85 Z" 
        fill="url(#light-beam-gradient)" 
        style={{ mixBlendMode: 'var(--light-blend-mode, normal)' as React.CSSProperties['mixBlendMode'] }}
      >
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 50 47" 
          to="360 50 47" 
          dur="6s" 
          repeatCount="indefinite" 
        />
      </path>
    </g>

    <g 
      fill="none" 
      stroke="var(--icon-color, currentColor)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M 32 90 L 40 60 L 60 60 L 68 90 Z" />
      <line x1="36" y1="75" x2="64" y2="75" />
      <path d="M 34 60 L 66 60" />
      <path d="M 36 60 L 36 54 L 64 54 L 64 60" />
      <rect x="43" y="40" width="14" height="14" />
      <path d="M 40 40 Q 50 28 60 40" />
      <line x1="50" y1="34" x2="50" y2="24" />
      <circle cx="50" cy="47" r="2.5" fill="var(--icon-color, currentColor)" stroke="none" />
      <line x1="20" y1="90" x2="80" y2="90" />
    </g>
  </svg>
);
