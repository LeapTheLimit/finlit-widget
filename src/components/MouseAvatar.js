import React from 'react';
import './MouseAvatar.css';

const MouseAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`mouse-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="mouse">
        <div className="chef-hat">
          <div className="hat-band"></div>
        </div>
        
        <div className="ears-container">
          <div className="ear left"></div>
          <div className="ear right"></div>
        </div>

        <div className="face">
          <div className="eyes-container">
            <div className="eye">
              <div className="eye-inner">
                <div className="eye-shine"></div>
              </div>
            </div>
            <div className="eye">
              <div className="eye-inner">
                <div className="eye-shine"></div>
              </div>
            </div>
          </div>

          <div className="nose"></div>

          <div className="whiskers-container">
            <div className="whisker left-top"></div>
            <div className="whisker left-mid"></div>
            <div className="whisker left-bottom"></div>
            <div className="whisker right-top"></div>
            <div className="whisker right-mid"></div>
            <div className="whisker right-bottom"></div>
          </div>

          <div className="mouth"></div>
        </div>
      </div>
    </div>
  );
};

export default MouseAvatar; 