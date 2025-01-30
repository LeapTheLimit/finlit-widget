import React, { useState, useEffect } from 'react';

const FoxAvatar = ({ isSpeaking }) => {
    const [mouthPath, setMouthPath] = useState("M 70 120 Q 100 130 130 120");

    // Dynamic mouth animation
    useEffect(() => {
        if (isSpeaking) {
            const mouthFrames = [
                "M 70 120 Q 100 150 130 120", // Open
                "M 70 125 Q 100 145 130 125", // Mid-open
                "M 70 130 Q 100 140 130 130"  // Wider open
            ];
            
            let frame = 0;
            const animateMouth = () => {
                setMouthPath(mouthFrames[frame]);
                frame = (frame + 1) % mouthFrames.length;
            };
            
            const interval = setInterval(animateMouth, 200);
            return () => clearInterval(interval);
        } else {
            setMouthPath("M 70 120 Q 100 130 130 120");
        }
    }, [isSpeaking]);

    return (
        <div className="relative w-48 h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Fox head shape */}
                <path 
                    d="M 20 100 Q 50 20 100 20 Q 150 20 180 100 Q 150 180 100 180 Q 50 180 20 100 Z" 
                    fill="#FF8C00" 
                    className="drop-shadow-md"
                />

                {/* Inner face fur */}
                <path
                    d="M 40 90 Q 60 50 100 50 Q 140 50 160 90 Q 140 130 100 130 Q 60 130 40 90 Z"
                    fill="#FFB347"
                    className="opacity-90"
                />

                {/* Ears */}
                <g className="transition-all duration-300">
                    <path d="M 40 50 Q 30 20 60 40 L 40 50 Z" fill="#FF8C00" />
                    <path d="M 160 50 Q 170 20 140 40 L 160 50 Z" fill="#FF8C00" />
                    <path d="M 45 45 Q 35 30 55 35 Z" fill="#FFD700" />
                    <path d="M 155 45 Q 165 30 145 35 Z" fill="#FFD700" />
                </g>

                {/* Eyes with depth */}
                <g className="animate-eye-blink">
                    <ellipse cx="70" cy="85" rx="14" ry="10" fill="#2d2d2d" />
                    <ellipse cx="130" cy="85" rx="14" ry="10" fill="#2d2d2d" />
                    <circle cx="75" cy="82" r="3" fill="rgba(255,255,255,0.8)" />
                    <circle cx="135" cy="82" r="3" fill="rgba(255,255,255,0.8)" />
                </g>

                {/* Nose */}
                <path 
                    d="M 95 110 Q 100 115 105 110 Q 100 120 95 110 Z" 
                    fill="url(#noseGradient)"
                >
                    <defs>
                        <linearGradient id="noseGradient">
                            <stop offset="0%" stopColor="#4a4a4a" />
                            <stop offset="100%" stopColor="#2d2d2d" />
                        </linearGradient>
                    </defs>
                </path>

                {/* Animated mouth */}
                <path 
                    d={`${mouthPath} Q100 135 70 120`}
                    stroke="#2d2d2d" 
                    strokeWidth="3" 
                    fill="none"
                    className="transition-all duration-100"
                />

                {/* Whiskers */}
                <g className="opacity-75">
                    <path d="M 30 100 Q 50 105 60 100" stroke="#2d2d2d" strokeWidth="1.5" />
                    <path d="M 30 110 Q 50 115 60 110" stroke="#2d2d2d" strokeWidth="1.5" />
                    <path d="M 170 100 Q 150 105 140 100" stroke="#2d2d2d" strokeWidth="1.5" />
                    <path d="M 170 110 Q 150 115 140 110" stroke="#2d2d2d" strokeWidth="1.5" />
                </g>

                {/* Cheek fluff */}
                <path 
                    d="M 50 120 Q 70 130 50 140" 
                    fill="#FFD700" 
                    className="opacity-40"
                />
                <path 
                    d="M 150 120 Q 130 130 150 140" 
                    fill="#FFD700" 
                    className="opacity-40"
                />
            </svg>
        </div>
    );
};

export default FoxAvatar; 