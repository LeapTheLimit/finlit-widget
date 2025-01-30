import React from 'react';
import startIcon from '../assets/images/start.svg';
import LogoPoweredBy from './LogoPoweredBy';

const WelcomeView = ({ setCurrentView }) => (
    <div className="h-full flex flex-col items-center justify-center px-4 space-y-8">
        <LogoPoweredBy />
        
        <div className="flex flex-col items-center space-y-6">
            <p className="text-white text-sm">Your AI Finance Buddy</p>
            <h1 className="text-3xl md:text-4xl font-medium text-center">
                Hey there!<br />I'm Finlix!
            </h1>
            
            <img
                src={startIcon}
                alt="Get Started"
                className="h-32 md:h-40 w-auto"
            />
        </div>

        <button
            className="bg-white text-black px-6 py-3 rounded-xl text-base font-medium w-full max-w-[300px] hover:bg-gray-100 transition-colors"
            onClick={() => setCurrentView('home')}
        >
            Get Started
        </button>
    </div>
);

export default WelcomeView;
