import React from 'react';

const Logo = () => (
  <svg
    width="44"
    height="48"
    viewBox="0 0 200 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
  >
    <defs>
      <linearGradient id="owlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      
      <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <style>
        {`
          @keyframes nodePulse {
            0% { filter: drop-shadow(0 0 2px #06b6d4); opacity: 0.8; }
            50% { filter: drop-shadow(0 0 8px #3b82f6); opacity: 1; transform: scale(1.1); }
            100% { filter: drop-shadow(0 0 2px #06b6d4); opacity: 0.8; }
          }
          .chest-node {
            animation: nodePulse 2s infinite ease-in-out;
            transform-origin: center;
          }
        `}
      </style>
    </defs>

    {/* EAR TUFTS */}
    <path d="M70 45 L85 25 L88 40 L95 28 L98 45 Z" fill="url(#owlGradient)" />
    <path d="M130 45 L115 25 L112 40 L105 28 L102 45 Z" fill="url(#owlGradient)" />

    {/* HEAD */}
    <circle cx="100" cy="75" r="50" stroke="url(#owlGradient)" strokeWidth="2" fill="rgba(59, 130, 246, 0.05)" />
    
    {/* FACIAL DISC */}
    <ellipse cx="100" cy="80" rx="40" ry="30" stroke="url(#owlGradient)" strokeWidth="0.5" opacity="0.3" />

    {/* EYES */}
    {/* Left Eye */}
    <g transform="translate(75, 75)">
      <circle cx="0" cy="0" r="15" stroke="url(#owlGradient)" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="10" fill="url(#owlGradient)" opacity="0.8" filter="url(#eyeGlow)" />
      {/* Circuit Spokes */}
      <line x1="15" y1="0" x2="20" y2="0" stroke="url(#owlGradient)" strokeWidth="1" />
      <line x1="-15" y1="0" x2="-20" y2="0" stroke="url(#owlGradient)" strokeWidth="1" />
      <line x1="0" y1="15" x2="0" y2="20" stroke="url(#owlGradient)" strokeWidth="1" />
      <line x1="0" y1="-15" x2="0" y2="-20" stroke="url(#owlGradient)" strokeWidth="1" />
      {/* Pupil & Highlight */}
      <circle cx="0" cy="0" r="4" fill="#0A0F1E" />
      <circle cx="2" cy="-2" r="1.5" fill="white" />
    </g>

    {/* Right Eye */}
    <g transform="translate(125, 75)">
      <circle cx="0" cy="0" r="15" stroke="url(#owlGradient)" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="10" fill="url(#owlGradient)" opacity="0.8" filter="url(#eyeGlow)" />
      {/* Circuit Spokes */}
      <line x1="15" y1="0" x2="20" y2="0" stroke="url(#owlGradient)" strokeWidth="1" />
      <line x1="-15" y1="0" x2="-20" y2="0" stroke="url(#owlGradient)" strokeWidth="1" />
      <line x1="0" y1="15" x2="0" y2="20" stroke="url(#owlGradient)" strokeWidth="1" />
      <line x1="0" y1="-15" x2="0" y2="-20" stroke="url(#owlGradient)" strokeWidth="1" />
      {/* Pupil & Highlight */}
      <circle cx="0" cy="0" r="4" fill="#0A0F1E" />
      <circle cx="2" cy="-2" r="1.5" fill="white" />
    </g>

    {/* BEAK */}
    <path d="M100 85 L96 92 L100 98 L104 92 Z" fill="url(#owlGradient)" />

    {/* HEAD CIRCUIT */}
    <path d="M45 65 L35 75" stroke="url(#owlGradient)" strokeWidth="1" />
    <circle cx="35" cy="75" r="2" fill="url(#owlGradient)" />
    <path d="M155 65 L165 75" stroke="url(#owlGradient)" strokeWidth="1" />
    <circle cx="165" cy="75" r="2" fill="url(#owlGradient)" />

    {/* BODY */}
    <ellipse cx="100" cy="155" rx="45" ry="60" stroke="url(#owlGradient)" strokeWidth="2" fill="rgba(6, 182, 212, 0.03)" />

    {/* FEATHER LINES */}
    <path d="M75 140 Q100 130 125 140" stroke="url(#owlGradient)" strokeWidth="1" opacity="0.6" />
    <path d="M70 155 Q100 145 130 155" stroke="url(#owlGradient)" strokeWidth="1" opacity="0.4" />
    <path d="M75 170 Q100 160 125 170" stroke="url(#owlGradient)" strokeWidth="1" opacity="0.2" />
    <path d="M85 185 Q100 175 115 185" stroke="url(#owlGradient)" strokeWidth="1" opacity="0.1" />

    {/* CIRCUIT CHEST */}
    <g transform="translate(100, 155)">
      {/* H-shape circuit */}
      <line x1="-15" y1="0" x2="15" y2="0" stroke="url(#owlGradient)" strokeWidth="1.5" />
      <line x1="-15" y1="-10" x2="-15" y2="10" stroke="url(#owlGradient)" strokeWidth="1.5" />
      <line x1="15" y1="-10" x2="15" y2="10" stroke="url(#owlGradient)" strokeWidth="1.5" />
      {/* Branch to node */}
      <line x1="0" y1="0" x2="0" y2="25" stroke="url(#owlGradient)" strokeWidth="1.5" />
      {/* Glowing Dot Node */}
      <circle cx="0" cy="25" r="4" fill="url(#owlGradient)" className="chest-node" filter="url(#eyeGlow)" />
    </g>

    {/* WINGS */}
    <path d="M55 130 Q30 130 25 170 Q30 200 65 180" stroke="url(#owlGradient)" strokeWidth="1.5" fill="rgba(59, 130, 246, 0.05)" />
    <path d="M145 130 Q170 130 175 170 Q170 200 135 180" stroke="url(#owlGradient)" strokeWidth="1.5" fill="rgba(6, 182, 212, 0.05)" />

    {/* FEET/TALONS */}
    <g stroke="url(#owlGradient)" strokeWidth="1.5" strokeLinecap="round">
      <line x1="85" y1="210" x2="80" y2="218" />
      <line x1="85" y1="210" x2="85" y2="219" />
      <line x1="85" y1="210" x2="90" y2="218" />
      
      <line x1="115" y1="210" x2="110" y2="218" />
      <line x1="115" y1="210" x2="115" y2="219" />
      <line x1="115" y1="210" x2="120" y2="218" />
    </g>

    {/* FLOATING NODES */}
    <g opacity="0.5">
      <circle cx="30" cy="110" r="2" fill="#3B82F6" />
      <line x1="30" y1="110" x2="20" y2="100" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="170" cy="110" r="2" fill="#06B6D4" />
      <line x1="170" y1="110" x2="180" y2="100" stroke="#06B6D4" strokeWidth="0.5" />
      <circle cx="180" cy="150" r="1.5" fill="#3B82F6" />
      <circle cx="20" cy="150" r="1.5" fill="#06B6D4" />
    </g>
  </svg>
);

export default Logo;
