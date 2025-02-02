import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`fox-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="fox-wrapper">
        <div className={`fox ${isSpeaking ? 'talking' : ''}`}>
          <div className="fox__head">
            <div className="fox__face">
              <div className="fox__eye fox__eye--left"></div>
              <div className="fox__eye fox__eye--right"></div>
              <div className="fox__nose"></div>
              <div className="fox__mouth"></div>
            </div>
            <div className="fox__ear fox__ear--left"></div>
            <div className="fox__ear fox__ear--right"></div>
            <div className="fox__side fox__side--left"></div>
            <div className="fox__side fox__side--right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoxAvatar; 