import React, { useEffect, useRef } from 'react';
import './RobotAvatar.css';

const RobotAvatar = ({ isSpeaking }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    // Load required scripts dynamically
    const loadScripts = async () => {
      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      await new Promise((resolve) => {
        threeScript.onload = resolve;
        document.body.appendChild(threeScript);
      });

      // Load Anime.js
      const animeScript = document.createElement('script');
      animeScript.src = 'https://cdn.spline.design/lib/anime.min.js';
      await new Promise((resolve) => {
        animeScript.onload = resolve;
        document.body.appendChild(animeScript);
      });

      // Load Spline Runtime
      const splineScript = document.createElement('script');
      splineScript.src = 'https://assets.codepen.io/9589/spline.runtime.min.js';
      await new Promise((resolve) => {
        splineScript.onload = resolve;
        document.body.appendChild(splineScript);
      });

      // Initialize Spline app
      if (window.SpeRuntime) {
        appRef.current = new window.SpeRuntime.Application();
        appRef.current.start("https://assets.codepen.io/9589/scene.gltf");
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      if (appRef.current) {
        appRef.current.stop();
      }
    };
  }, []);

  // Handle speaking state changes
  useEffect(() => {
    if (appRef.current) {
      // You can add animation triggers here when isSpeaking changes
      if (isSpeaking) {
        // Add speaking animation
        appRef.current.emitEvent('speak');
      } else {
        // Reset to idle animation
        appRef.current.emitEvent('idle');
      }
    }
  }, [isSpeaking]);

  return (
    <div className="robot-container" ref={containerRef}>
      <canvas id="canvas3d" ref={canvasRef}></canvas>
    </div>
  );
};

export default RobotAvatar; 