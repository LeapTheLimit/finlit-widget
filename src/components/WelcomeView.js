import React from 'react';
import startIcon from '../assets/images/start.svg';
import LogoPoweredBy from './LogoPoweredBy';

const WelcomeView = ({ setCurrentView }) => (
    <div className="h-full flex flex-col items-center justify-between px-4 pb-4">
        <LogoPoweredBy />
        
        <div className="flex-1 w-full flex flex-col items-center justify-center relative">
            <div className="absolute bottom-0 left-0 right-0 flex justify-center -mb-8">
                <img
                    src={startIcon}
                    alt="loading"
                    className="h-[150px] md:h-[200px] w-auto transform translate-y-8"
                />
            </div>

            <div className="text-center z-10 space-y-4">
                <p className="text-white text-sm">Your AI Finance Buddy</p>
                <h1 className="text-3xl md:text-4xl font-medium">
                    Hey there!<br />I'm Finlix!
                </h1>
            </div>
        </div>

        <div className="w-full max-w-[400px] pt-8">
            <button
                className="bg-white text-black px-4 py-4 rounded-xl text-base font-medium w-full hover:bg-gray-100 transition-colors"
                onClick={() => setCurrentView('home')}
            >
                Get Started
            </button>
        </div>
    </div>
);

export default WelcomeView;
