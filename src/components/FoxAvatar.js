import React, { useState, useEffect } from 'react';

const FoxAvatar = ({ isSpeaking }) => {
    const [mouthOpen, setMouthOpen] = useState(false);

    // Animate mouth when speaking
    useEffect(() => {
        if (isSpeaking) {
            const interval = setInterval(() => {
                setMouthOpen(prev => !prev);
            }, 300);
            return () => clearInterval(interval);
        }
    }, [isSpeaking]);

    return (
        <div className="relative w-48 h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Background */}
                <rect width="200" height="200" fill="#87CEEB" />
                
                {/* Body */}
                <ellipse cx="100" cy="130" rx="60" ry="80" fill="#FFA500" />
                
                {/* Head */}
                <circle cx="100" cy="80" r="50" fill="#FFA500" />
                
                {/* Ears */}
                <path d="M60 30 L80 10 L100 30" fill="#FFA500" />
                <path d="M140 30 L160 10 L140 50" fill="#FFA500" />
                
                {/* Inner Ears */}
                <path d="M70 25 L85 15 L100 25" fill="#FFD700" />
                <path d="M130 25 L145 15 L130 45" fill="#FFD700" />
                
                {/* Eyes */}
                <circle cx="80" cy="70" r="12" fill="white" />
                <circle cx="120" cy="70" r="12" fill="white" />
                <circle cx="85" cy="70" r="5" fill="#333" />
                <circle cx="125" cy="70" r="5" fill="#333" />
                
                {/* Nose */}
                <path d="M95 90 L105 90 L100 100 Z" fill="#333" />
                
                {/* Mouth */}
                <path 
                    d={mouthOpen ? 
                        "M85 110 Q100 130 115 110" : 
                        "M85 110 Q100 120 115 110"}
                    stroke="#333" 
                    fill="none" 
                    strokeWidth="3"
                />
                
                {/* Legs */}
                <rect x="70" y="160" width="20" height="40" rx="10" fill="#FFA500" />
                <rect x="110" y="160" width="20" height="40" rx="10" fill="#FFA500" />
                
                {/* Tail */}
                <path 
                    d="M160 100 Q180 80 200 120 Q160 140 140 160" 
                    fill="#FFA500" 
                    className="opacity-90"
                />
            </svg>
        </div>
    );
};

export default FoxAvatar; 