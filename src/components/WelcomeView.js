import React from 'react';
import startIcon from '../assets/images/start.svg';
import LogoPoweredBy from './LogoPoweredBy';

const WelcomeView = ({ setCurrentView }) => (
    <div className="h-full flex flex-col justify-between">
        <LogoPoweredBy />
        
        <div className="flex-1 flex flex-col items-center justify-start pt-8 -mt-16">
            <div className="text-center mb-8">
                <p className="text-white text-sm mb-2">Your AI Finance Buddy</p>
                <h1 className="text-2xl font-medium px-4">
                    Hey there! I'm Finlix!
                </h1>
            </div>
            
            <div className="flex-1 flex items-center">
                <img
                    src={startIcon}
                    alt="loading"
                    className="h-40 w-auto"
                />
            </div>
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
