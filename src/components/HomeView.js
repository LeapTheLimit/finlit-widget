import React from 'react';
import PoweredBy from '../components/PoweredBy';
import HomeButtons from '../components/HomeButtons';
import Header from './Header';
import History from './History';

const HomeView = ({ setCurrentView }) => (
    <div className="flex flex-col h-full justify-between">
        <Header setCurrentView={setCurrentView} path={'welcome'} />
        <div className='flex-1 overflow-y-auto scrollbar-none py-4'>
            <h2 className="text-xl font-medium mb-4 px-4">How may I help you today!</h2>
            <HomeButtons setCurrentView={setCurrentView} />
            {/* History */}
            <History setCurrentView={setCurrentView} />
        </div>
        <PoweredBy />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-4">
            <p className="text-sm text-gray-400">Powered by Leap The Limit</p>
        </div>
    </div>
);

export default HomeView;
