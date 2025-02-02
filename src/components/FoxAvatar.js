import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`fox-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="fox">
        {/* White ear triangles */}
        <div className="ear left"></div>
        <div className="ear right"></div>
        
        {/* Main orange face */}
        <div className="face">
          {/* Eyes */}
          <div className="eyes">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          
          {/* Nose */}
          <div className="nose"></div>
          
          {/* White cheek patches */}
          <div className="cheek left"></div>
          <div className="cheek right"></div>
        </div>
      </div>
    </div>
  );
};

export default FoxAvatar; 