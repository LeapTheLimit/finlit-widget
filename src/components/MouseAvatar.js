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
          <div className="mouth"></div>
        </div>
      </div>
    </div>
  );
};

export default MouseAvatar; 