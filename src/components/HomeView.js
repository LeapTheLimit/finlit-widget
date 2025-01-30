import React from 'react';
import PoweredBy from '../components/PoweredBy';
import HomeButtons from '../components/HomeButtons';
import Header from './Header';
import History from './History';

const HomeView = ({ setCurrentView }) => (
    <div className="flex flex-col h-full justify-between">
        <Header setCurrentView={setCurrentView} path={'welcome'} />
        
        <div className="flex-1 overflow-y-auto px-4">
            <h2 className="text-2xl font-medium mb-6 pt-4">How may I help you today!</h2>
            <HomeButtons setCurrentView={setCurrentView} />
            <History setCurrentView={setCurrentView} />
        </div>

        <div className="p-4">
            <PoweredBy />
        </div>
    </div>
);

export default HomeView;
