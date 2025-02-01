import React from 'react';
import { Users } from 'lucide-react'; // Changed to Users icon for character selection

const AvatarSelector = ({ currentAvatar, onAvatarChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const avatars = [
    { id: 'fox', name: 'Fox' },
    { id: 'robot', name: 'Robot' },
    { id: 'cat', name: 'Cat' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 rounded-full bg-[#272626] hover:bg-[#363636] transition-colors"
      >
        <Users size={24} /> {/* Changed to Users icon */}
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 bg-[#272626] rounded-lg p-2 min-w-[120px] shadow-lg">
          {avatars.map((avatar) => (
            <button
              key={avatar.id}
              onClick={() => {
                onAvatarChange(avatar.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded hover:bg-[#363636] transition-colors ${
                currentAvatar === avatar.id ? 'bg-[#363636]' : ''
              }`}
            >
              {avatar.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvatarSelector; 