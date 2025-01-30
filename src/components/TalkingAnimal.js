import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/images/lottie.json';

const TalkingAnimal = ({ isSpeaking }) => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="relative w-64 h-64">
      {/* Main animal body */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 200 200">
          {/* Head */}
          <circle cx="100" cy="100" r="80" fill="#FFD700" />
          
          {/* Eyes */}
          <circle cx="70" cy="70" r="15" fill="#333" />
          <circle cx="130" cy="70" r="15" fill="#333" />
          
          {/* Animated Mouth */}
          <path 
            d={isSpeaking ? "M 50 120 Q 100 160 150 120" : "M 50 120 Q 100 140 150 120"} 
            stroke="#333" 
            strokeWidth="8" 
            fill="none"
            className="transition-all duration-300"
          />
        </svg>
      </div>
      
      {/* Optional Lottie animation for more complex movements */}
      <Lottie 
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={!isSpeaking}
        speed={1.5}
      />
    </div>
  );
};

export default TalkingAnimal; 