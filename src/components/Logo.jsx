import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <svg
        width="220"
        height="64"
        viewBox="0 0 220 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-lg"
      >
        {/* Definitions */}
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Card Background */}
        <rect width="216" height="60" x="2" y="2" rx="12" fill="#0a0f1e" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
        <rect width="216" height="60" x="2" y="2" rx="12" fill="url(#grid)" />

        {/* Corner Bracket Accents */}
        {/* Top-left */}
        <path d="M 10 8 L 6 8 L 6 12" stroke="url(#primaryGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Top-right */}
        <path d="M 210 8 L 214 8 L 214 12" stroke="url(#primaryGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom-left */}
        <path d="M 10 56 L 6 56 L 6 52" stroke="url(#primaryGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom-right */}
        <path d="M 210 56 L 214 56 L 214 52" stroke="url(#primaryGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Hexagon Frame */}
        <path
          d="M 32 15 L 42 21 L 42 33 L 32 39 L 22 33 L 22 21 Z"
          stroke="url(#primaryGradient)"
          strokeWidth="1.5"
          fill="rgba(59, 130, 246, 0.05)"
          filter="url(#glow)"
        />

        {/* code symbol </> */}
        <text
          x="32"
          y="31"
          textAnchor="middle"
          fill="url(#primaryGradient)"
          fontSize="10"
          fontWeight="bold"
          fontFamily="monospace"
          filter="url(#glow)"
        >
          &lt;/&gt;
        </text>

        {/* Divider line and dot */}
        <line x1="22" y1="46" x2="42" y2="46" stroke="url(#primaryGradient)" strokeWidth="1" strokeDasharray="1 2" opacity="0.6" />
        <circle cx="32" cy="46" r="1.5" fill="url(#primaryGradient)" />

        {/* Full Name */}
        <text
          x="58"
          y="30"
          fill="url(#primaryGradient)"
          fontSize="14"
          fontWeight="900"
          fontFamily="'Courier New', monospace"
          letterSpacing="1"
          style={{ textTransform: 'uppercase' }}
          filter="url(#glow)"
        >
          MOHAMMAD AHMAD
        </text>

        {/* Tagline */}
        <text
          x="58"
          y="46"
          fill="#06b6d4"
          fontSize="7"
          fontWeight="bold"
          fontFamily="'Courier New', monospace"
          letterSpacing="1.5"
          opacity="0.9"
        >
          FULL-STACK DEV · SEO
        </text>

        {/* Blinking Cursor Detail */}
        <rect x="188" y="20" width="4" height="12" fill="url(#primaryGradient)" className="animate-pulse" rx="1" />
      </svg>
    </div>
  );
};

export default Logo;
