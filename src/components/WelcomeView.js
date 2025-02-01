import React from 'react';
import startIcon from '../assets/images/start.svg';
import LogoPoweredBy from './LogoPoweredBy';

const WelcomeView = ({ setCurrentView }) => (
    <div className="h-full flex flex-col justify-between scale-[calc(100vh/1000)]">
        <LogoPoweredBy />
        
        <div className="flex-1 flex flex-col items-center justify-center -mt-[5%]">
            <div className="text-center mb-[5%]">
                <p className="text-white text-[min(16px,2vh)] mb-[2vh]">
                    Your AI Finance Buddy
                </p>
                <h1 className="text-[min(48px,6vh)] font-bold tracking-tight">
                    Hey there!<br />
                    I'm Finlix!
                </h1>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
                <img
                    src={startIcon}
                    alt="loading"
                    className="h-[min(160px,20vh)] w-auto"
                />
            </div>
        </div>

        <div className="pb-[2vh] px-4">
            <button
                className="bg-white text-black py-[min(12px,1.5vh)] rounded-xl text-[min(16px,2vh)] font-medium w-full"
                onClick={() => setCurrentView('home')}
            >
                Get Started
            </button>
        </div>
    </div>
);

export default WelcomeView;
