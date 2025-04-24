import React, { useState } from 'react';
import { useChatBot } from '../../contexts/ChatBotContext';
import { Send } from 'lucide-react';

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, state } = useChatBot();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !state.isTyping) {
      sendMessage(message.trim());
      setMessage('');
    }
  };

  const getButtonColor = () => {
    if (!message.trim() || state.isTyping) {
      return 'bg-gray-300 text-gray-500 cursor-not-allowed';
    }
    
    switch (state.emotion) {
      case 'happy': return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'sad': return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'angry': return 'bg-red-500 hover:bg-red-600 text-white';
      default: return 'bg-indigo-600 hover:bg-indigo-700 text-white';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200">
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={state.isTyping}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-indigo-500 disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={!message.trim() || state.isTyping}
          className={`p-2 rounded-r-lg transition-colors ${getButtonColor()}`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;