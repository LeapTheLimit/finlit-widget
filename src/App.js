import React, { useState } from 'react';
import WelcomeView from './components/WelcomeView';
import HomeView from './components/HomeView';
import TextView from './components/TextView';
import showIcon from './assets/images/show.svg'
import closeIcon from './assets/images/Closed.svg'
import MobileView from './components/MobileView';
import HistoryList from './components/HistoryList';
import VoiceChat from './components/VoiceChat';

const App = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    setMessages([...messages, { sender: 'user', text: inputText }]);
    setInputText('');
  };

  const toggleMobileView = () => {
    setIsOpen(!isOpen);
    setCurrentView('welcome')
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'welcome':
        return <WelcomeView setCurrentView={setCurrentView} />;
      case 'home':
        return <HomeView setCurrentView={setCurrentView} />;
      case 'voice':
        return <VoiceChat setCurrentView={setCurrentView} />
      case 'text':
        return (
          <TextView
            messages={messages}
            inputText={inputText}
            setInputText={setInputText}
            handleSendMessage={handleSendMessage}
            setCurrentView={setCurrentView}
          />
        );
      case 'history_list':
        return <HistoryList setCurrentView={setCurrentView} />;
      default:
        return null;
    }
  };

  return (
    <div className="text-white">
      <button
        onClick={toggleMobileView}
        className="fixed bottom-4 right-4 z-50">
        <img src={!isOpen ? closeIcon : showIcon} alt='toggle-widget' className='w-12 h-12' />
      </button>
      <MobileView isOpen={isOpen}>
        {renderCurrentView()}
      </MobileView>
    </div>
  );
};

export default App;