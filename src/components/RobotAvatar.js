import React from 'react';
import './RobotAvatar.css';

const RobotAvatar = ({ isSpeaking }) => {
  return (
    <div className="robot-container">
      <div className={`robot ${isSpeaking ? 'talking' : ''}`}>
        <div className="head">
          <div className="antenna"></div>
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="mouth-container">
            <div className="mouth"></div>
          </div>
        </div>
        <div className="body">
          <div className="chest"></div>
          <div className="buttons">
            <div className="button"></div>
            <div className="button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotAvatar; 