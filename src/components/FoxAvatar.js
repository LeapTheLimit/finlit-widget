import React, { useState, useEffect } from 'react';

const FoxAvatar = ({ isSpeaking, mood = 'normal' }) => {
  const [reaction, setReaction] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);

  // Random reactions for different types of responses
  const reactions = {
    smart: {
      icon: "💡",
      text: "Great question!",
      earAnimation: "ear-perk",
    },
    wow: {
      icon: "✨",
      text: "Fascinating!",
      earAnimation: "ear-wiggle",
    },
    think: {
      icon: "🤔",
      text: "Let me think...",
      earAnimation: "ear-tilt",
    }
  };

  // Randomly trigger reactions
  useEffect(() => {
    if (isSpeaking) {
      const random = Math.random();
      if (random < 0.3) {
        const reactionTypes = Object.keys(reactions);
        const randomReaction = reactionTypes[Math.floor(Math.random() * reactionTypes.length)];
        setReaction(reactions[randomReaction]);
        setTimeout(() => setReaction(null), 3000);
      }
    }
  }, [isSpeaking]);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative w-48 h-48">
      {/* Reaction bubble */}
      {reaction && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-2 flex items-center gap-2 animate-popup">
          <span className="text-2xl">{reaction.icon}</span>
          <span className="text-black text-sm font-medium">{reaction.text}</span>
        </div>
      )}

      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Shadow for depth */}
        <circle cx="100" cy="100" r="80" fill="#E88B3A" className="drop-shadow-lg" />
        
        {/* Fox face - with gradient */}
        <defs>
          <radialGradient id="foxFace" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFA664" />
            <stop offset="100%" stopColor="#FF9B50" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#foxFace)" />
        
        {/* Ears with animation classes */}
        <g className={`transition-transform ${reaction?.earAnimation || ''}`}>
          <path d="M 40 50 L 30 10 L 70 40 Z" fill="#FF9B50" className="left-ear" />
          <path d="M 160 50 L 170 10 L 130 40 Z" fill="#FF9B50" className="right-ear" />
        </g>
        
        {/* White face patches with subtle gradient */}
        <path 
          d="M 60 120 Q 100 150 140 120 Q 100 140 60 120" 
          fill="white" 
          className="opacity-90"
        />
        
        {/* Eyes with blinking and expressions */}
        <g className={`transition-transform ${isBlinking ? 'scale-y-[0.1]' : ''}`}>
          <circle cx="70" cy="85" r="12" fill="#1A1A1A" />
          <circle cx="130" cy="85" r="12" fill="#1A1A1A" />
          <circle cx="75" cy="82" r="4" fill="white" className="animate-twinkle" />
          <circle cx="135" cy="82" r="4" fill="white" className="animate-twinkle" />
        </g>
        
        {/* Nose with shine */}
        <ellipse cx="100" cy="105" rx="8" ry="6" fill="#1A1A1A" />
        <circle cx="98" cy="104" r="2" fill="white" className="opacity-60" />
        
        {/* Animated Mouth with more expressive movement */}
        <path 
          d={isSpeaking 
            ? "M 70 120 Q 100 160 130 120 Q 100 135 70 120" // More open mouth
            : "M 70 120 Q 100 130 130 120 Q 100 120 70 120" // Closed mouth
          }
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="3"
          className={`transition-all duration-75 ${isSpeaking ? 'talking-animal' : ''}`}
        />
        
        {/* Inner mouth detail when speaking */}
        {isSpeaking && (
          <path 
            d="M 75 125 Q 100 145 125 125" 
            fill="#FF6B6B" 
            className="opacity-80"
          />
        )}
      </svg>
    </div>
  );
};

export default FoxAvatar; 