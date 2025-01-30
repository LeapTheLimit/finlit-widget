import React from 'react';
import './TomAvatar.css';

const TomAvatar = ({ isSpeaking }) => {
  return (
    <div className="tom-container">
      <div className={`tom ${isSpeaking ? 'talking' : ''}`}>
        <div className="ears">
          <div className="ear left"></div>
          <div className="ear right"></div>
        </div>
        <div className="head">
          <div className="face">
            <div className="eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="nose"></div>
            <div className="mouth-container">
              <div className="mouth"></div>
            </div>
            <div className="whiskers left">
              <div className="whisker"></div>
              <div className="whisker"></div>
              <div className="whisker"></div>
            </div>
            <div className="whiskers right">
              <div className="whisker"></div>
              <div className="whisker"></div>
              <div className="whisker"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomAvatar; 