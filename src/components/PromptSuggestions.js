import React from 'react';

const PromptSuggestions = ({ onSelectPrompt }) => {
  const suggestions = [
    "What is compound interest?",
    "How to create a budget?",
    "Explain stocks and bonds",
    "Tips for saving money",
    "What is cryptocurrency?"
  ];

  return (
    <div className="space-y-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelectPrompt(suggestion)}
          className="block w-full text-left p-2 rounded-lg bg-[#272626] hover:bg-[#363636] transition-colors text-sm"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions; 