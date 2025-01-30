import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking }) => {
  return (
    <div className="fox-container">
      <div className={`fox ${isSpeaking ? 'talking' : ''}`}>
        <div className="head">
          <div className="ear"></div>
          <div className="ear"></div>
          <div className="eye"></div>
          <div className="eye"></div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
      </div>
    </div>
  );
};

export default FoxAvatar; 