import React from 'react';
import WelcomeView from './WelcomeView';
import HomeView from './HomeView';
import VoiceChat from './VoiceChat';

const MobileView = () => {
    const [currentView, setCurrentView] = React.useState('welcome');

    return (
        <div className="fixed bottom-4 right-4 bg-black text-white rounded-3xl overflow-hidden shadow-2xl min-h-[400px] max-h-[85vh] h-[600px] w-[350px]">
            {currentView === 'welcome' && <WelcomeView setCurrentView={setCurrentView} />}
            {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
            {currentView === 'voice' && <VoiceChat setCurrentView={setCurrentView} />}
        </div>
    );
};

export default MobileView;