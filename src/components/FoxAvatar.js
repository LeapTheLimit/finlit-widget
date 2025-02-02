import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`fox-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="fox">
        <div className="fox-face">
          <div className="fox-ears">
            <div className="ear left"></div>
            <div className="ear right"></div>
          </div>
          <div className="eyes">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          <div className="nose"></div>
          <div className="cheeks">
            <div className="cheek left"></div>
            <div className="cheek right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoxAvatar; 