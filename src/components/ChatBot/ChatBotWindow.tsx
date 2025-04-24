import React from 'react';
import { motion } from 'framer-motion';
import { useChatBot } from '../../contexts/ChatBotContext';
import EmotionSelector from './EmotionSelector';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { X, RotateCcw } from 'lucide-react';

const ChatBotWindow: React.FC = () => {
  const { state, toggleChat, resetChat } = useChatBot();
  
  const getEmotionColor = () => {
    switch (state.emotion) {
      case 'happy': return 'bg-yellow-500';
      case 'sad': return 'bg-blue-500';
      case 'angry': return 'bg-red-500';
      default: return 'bg-indigo-600';
    }
  };

  return (
    <motion.div
      className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className={`${getEmotionColor()} text-white p-4 flex justify-between items-center shadow-md`}>
        <h3 className="font-medium">Chat Assistant</h3>
        <div className="flex items-center space-x-2">
          <button 
            onClick={resetChat} 
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Reset chat"
          >
            <RotateCcw size={16} />
          </button>
          <button 
            onClick={toggleChat} 
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {state.showEmotionSelector ? (
          <EmotionSelector />
        ) : (
          <ChatMessages />
        )}
      </div>
      
      {/* Input */}
      {!state.showEmotionSelector && (
        <ChatInput />
      )}
    </motion.div>
  );
};

export default ChatBotWindow;