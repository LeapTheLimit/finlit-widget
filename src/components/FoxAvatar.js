import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`fox-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="fox">
        <div className="head">
          <div className="fluff-left"></div>
          <div className="fluff-right"></div>
        </div>
        <div className="sides"></div>
        <div className="ear left"></div>
        <div className="ear right"></div>
        <div className="eye left"></div>
        <div className="eye right"></div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
    </div>
  );
};

export default FoxAvatar; 