import React from 'react';

const FoxAvatar = ({ isSpeaking }) => {
  return (
    <div className="w-48 h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Fox face - orange circle */}
        <circle cx="100" cy="100" r="80" fill="#FF9B50" />
        
        {/* White face patches */}
        <path d="M 60 120 Q 100 150 140 120 Q 100 140 60 120" fill="white" />
        
        {/* Eyes */}
        <g className="animal-eye">
          <circle cx="70" cy="85" r="12" fill="#1A1A1A" /> {/* Left eye */}
          <circle cx="130" cy="85" r="12" fill="#1A1A1A" /> {/* Right eye */}
          <circle cx="75" cy="82" r="4" fill="white" /> {/* Left eye highlight */}
          <circle cx="135" cy="82" r="4" fill="white" /> {/* Right eye highlight */}
        </g>
        
        {/* Nose */}
        <ellipse cx="100" cy="105" rx="8" ry="6" fill="#1A1A1A" />
        
        {/* Ears */}
        <path d="M 40 50 L 30 10 L 70 40 Z" fill="#FF9B50" /> {/* Left ear */}
        <path d="M 160 50 L 170 10 L 130 40 Z" fill="#FF9B50" /> {/* Right ear */}
        
        {/* Animated Mouth */}
        <path 
          d={isSpeaking 
            ? "M 70 120 Q 100 150 130 120 Q 100 130 70 120" // Open mouth
            : "M 70 120 Q 100 130 130 120 Q 100 120 70 120" // Closed mouth
          }
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="3"
          className={`transition-all duration-100 ${isSpeaking ? 'talking-animal' : ''}`}
        />
      </svg>
    </div>
  );
};

export default FoxAvatar; 