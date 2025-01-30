import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking }) => {
  return (
    <div className="fox-wrapper">
      <div className={`fox ${isSpeaking ? 'talking' : ''}`}>
        <div className="fox__ear fox__ear--left"></div>
        <div className="fox__ear fox__ear--right"></div>
        <div className="fox__head"></div>
        <div className="fox__eye fox__eye--left"></div>
        <div className="fox__eye fox__eye--right"></div>
        <div className="fox__nose"></div>
        <div className="fox__mouth"></div>
        <div className="fox__cheek fox__cheek--left"></div>
        <div className="fox__cheek fox__cheek--right"></div>
      </div>
    </div>
  );
};

export default FoxAvatar; 