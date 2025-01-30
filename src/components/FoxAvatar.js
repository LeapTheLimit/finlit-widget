import React, { useState, useEffect } from 'react';

const FoxAvatar = ({ isSpeaking }) => {
    const [mouthPath, setMouthPath] = useState("M 80 130 Q 100 140 120 130");

    // Dynamic mouth animation
    useEffect(() => {
        if (isSpeaking) {
            const frames = [
                "M 80 130 Q 100 160 120 130", // Open
                "M 80 135 Q 100 150 120 135", // Mid
                "M 80 140 Q 100 145 120 140"  // Wide
            ];
            let frame = 0;
            const animate = () => {
                setMouthPath(frames[frame]);
                frame = (frame + 1) % frames.length;
            };
            const interval = setInterval(animate, 200);
            return () => clearInterval(interval);
        } else {
            setMouthPath("M 80 130 Q 100 140 120 130");
        }
    }, [isSpeaking]);

    return (
        <div className="relative w-48 h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Head shape */}
                <path 
                    d="M100 20 C180 40 180 160 100 180 C20 160 20 40 100 20 Z" 
                    fill="#FF8C00" 
                    stroke="#D2691E" 
                    strokeWidth="2"
                />
                
                {/* Ears */}
                <path d="M60 40 Q70 0 80 40" fill="#FF8C00" stroke="#D2691E" strokeWidth="2" />
                <path d="M140 40 Q150 0 160 40" fill="#FF8C00" stroke="#D2691E" strokeWidth="2" />
                
                {/* Face mask */}
                <path 
                    d="M100 80 Q140 100 100 120 Q60 100 100 80 Z" 
                    fill="#FFF5EE" 
                    opacity="0.9"
                />
                
                {/* Eyes */}
                <ellipse cx="80" cy="70" rx="12" ry="8" fill="#2F4F4F" />
                <ellipse cx="120" cy="70" rx="12" ry="8" fill="#2F4F4F" />
                <circle cx="85" cy="68" r="3" fill="white" />
                <circle cx="115" cy="68" r="3" fill="white" />
                
                {/* Nose */}
                <path d="M95 90 Q100 95 105 90" fill="#2F4F4F" />
                
                {/* Whiskers */}
                <path d="M50 100 Q70 105 60 110" stroke="#2F4F4F" strokeWidth="1.5" />
                <path d="M50 110 Q70 115 60 120" stroke="#2F4F4F" strokeWidth="1.5" />
                <path d="M150 100 Q130 105 140 110" stroke="#2F4F4F" strokeWidth="1.5" />
                <path d="M150 110 Q130 115 140 120" stroke="#2F4F4F" strokeWidth="1.5" />
                
                {/* Animated Mouth */}
                <path 
                    d={mouthPath}
                    stroke="#2F4F4F" 
                    fill="none" 
                    strokeWidth="3" 
                    className="transition-all duration-100"
                />
                
                {/* Tongue */}
                {isSpeaking && (
                    <path d="M95 135 Q100 145 105 135" fill="#FF69B4" className="animate-tongue" />
                )}
            </svg>
        </div>
    );
};

export default FoxAvatar; 