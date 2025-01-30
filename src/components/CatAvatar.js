import React from 'react';
import './CatAvatar.css';

const CatAvatar = ({ isSpeaking }) => {
  return (
    <div className="cat-container">
      <div className={`cat ${isSpeaking ? 'talking' : ''}`}>
        <div className="ear left"></div>
        <div className="ear right"></div>
        <div className="eye left"></div>
        <div className="eye right"></div>
        <div className="nose"></div>
        <div className="mouth"></div>
        <div className="pink left"></div>
        <div className="pink right"></div>
      </div>
    </div>
  );
};

export default CatAvatar; 