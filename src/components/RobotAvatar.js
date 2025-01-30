import React from 'react';
import './RobotAvatar.css';

const RobotAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`robot-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="robot">
        <div className="antenna left"></div>
        <div className="antenna right"></div>
        <div className="head">
          <div className="eyes">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          <div className="mouth"></div>
        </div>
      </div>
    </div>
  );
};

export default RobotAvatar; 