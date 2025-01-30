import React from 'react';
import startIcon from '../assets/images/start.svg';
import LogoPoweredBy from './LogoPoweredBy';

const WelcomeView = ({ setCurrentView }) => (
    <div className="h-full flex flex-col justify-between">
        <LogoPoweredBy />
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
            <p className="text-white text-sm">Your AI Finance Buddy</p>
            <h1 className="text-2xl font-medium text-center px-4">
                Hey there! I'm Finlix!
            </h1>
            <img
                src={startIcon}
                alt="loading"
                className="h-40 w-auto"
            />
        </div>

        <div className="pb-4 px-4">
            <button
                className="bg-white text-black py-3 rounded-xl text-base font-medium w-full"
                onClick={() => setCurrentView('home')}
            >
                Get Started
            </button>
        </div>
    </div>
);

export default WelcomeView;
