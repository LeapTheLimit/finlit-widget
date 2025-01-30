import React, { useState, useEffect } from 'react';

const FoxAvatar = ({ isSpeaking }) => {
    const [mouthPath, setMouthPath] = useState("M 70 120 Q 100 130 130 120");
    const [eyeState, setEyeState] = useState('neutral');

    // Dynamic mouth animation during speech
    useEffect(() => {
        if (isSpeaking) {
            const mouthFrames = [
                "M 70 120 Q 100 150 130 120", // Open
                "M 70 125 Q 100 145 130 125", // Mid-open
                "M 70 130 Q 100 140 130 130" // Wider open
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
        <div className="relative w-48 h-48 group">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Head with depth */}
                <defs>
                    <radialGradient id="foxHead" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFB347" />
                        <stop offset="100%" stopColor="#FF8C00" />
                    </radialGradient>
                    
                    <filter id="furTexture">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
                        <feDiffuseLighting lightingColor="#fff7e6" surfaceScale="2">
                            <feDistantLight azimuth="45" elevation="60" />
                        </feDiffuseLighting>
                    </filter>
                </defs>

                {/* Main head shape */}
                <circle cx="100" cy="100" r="80" fill="url(#foxHead)" filter="url(#furTexture)" />

                {/* Ears */}
                <g className="transition-all duration-300 group-hover:translate-y-1">
                    <path d="M40 50 Q30 20 60 40" fill="#FF8C00" className="drop-shadow-md" />
                    <path d="M160 50 Q170 20 140 40" fill="#FF8C00" className="drop-shadow-md" />
                </g>

                {/* Face mask */}
                <path d="M60 110 Q100 160 140 110 Q100 130 60 110" fill="#fff5e6" className="opacity-90" />

                {/* Eyes with depth */}
                <g className="transition-all duration-200">
                    <ellipse cx="70" cy="85" rx="14" ry="10" fill="#2d2d2d" />
                    <ellipse cx="130" cy="85" rx="14" ry="10" fill="#2d2d2d" />
                    
                    {/* Eye highlights */}
                    <path d="M65 80 Q70 75 75 80" fill="white" className="opacity-80" />
                    <path d="M125 80 Q130 75 135 80" fill="white" className="opacity-80" />
                </g>

                {/* Nose with gradient */}
                <path d="M95 110 Q100 115 105 110 Q100 120 95 110" fill="url(#noseGradient)">
                    <defs>
                        <linearGradient id="noseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4a4a4a" />
                            <stop offset="100%" stopColor="#2d2d2d" />
                        </linearGradient>
                    </defs>
                </path>

                {/* Dynamic mouth */}
                <path 
                    d={`${mouthPath} Q100 135 70 120`}
                    fill="none" 
                    stroke="#2d2d2d" 
                    strokeWidth="3"
                    className="transition-all duration-100"
                />

                {/* Tongue when speaking */}
                {isSpeaking && (
                    <path d="M85 125 Q100 140 115 125" fill="#ff7b7b" className="animate-tongue" />
                )}

                {/* Cheek blush */}
                <circle cx="60" cy="110" r="15" fill="#ffd1dc" className="opacity-30" />
                <circle cx="140" cy="110" r="15" fill="#ffd1dc" className="opacity-30" />

                {/* Whiskers */}
                <g className="opacity-80">
                    <path d="M40 100 Q50 105 60 100" stroke="#2d2d2d" fill="none" />
                    <path d="M40 110 Q50 115 60 110" stroke="#2d2d2d" fill="none" />
                    <path d="M160 100 Q150 105 140 100" stroke="#2d2d2d" fill="none" />
                    <path d="M160 110 Q150 115 140 110" stroke="#2d2d2d" fill="none" />
                </g>
            </svg>
        </div>
    );
};

export default FoxAvatar; 