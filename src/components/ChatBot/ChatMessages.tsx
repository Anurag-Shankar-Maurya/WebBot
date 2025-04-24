import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatBot } from '../../contexts/ChatBotContext';
import { Bot, User } from 'lucide-react';

const ChatMessages: React.FC = () => {
  const { state } = useChatBot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const getEmotionColor = () => {
    switch (state.emotion) {
      case 'happy': return 'bg-yellow-100 border-yellow-200';
      case 'sad': return 'bg-blue-100 border-blue-200';
      case 'angry': return 'bg-red-100 border-red-200';
      default: return 'bg-indigo-100 border-indigo-200';
    }
  };

  return (
    <div className="h-full overflow-y-auto p-4 flex flex-col space-y-3">
      <AnimatePresence>
        {state.messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-gray-100 text-gray-800 border border-gray-200' 
                  : `${getEmotionColor()} text-gray-800 border`
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === 'bot' && (
                  <div className="bg-white rounded-full p-1.5 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {message.sender === 'user' && (
                  <div className="bg-white rounded-full p-1.5 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {state.isTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-start"
        >
          <div className={`rounded-lg p-3 ${getEmotionColor()} inline-flex items-center space-x-2`}>
            <div className="bg-white rounded-full p-1.5">
              <Bot className="w-4 h-4" />
            </div>
            <div className="flex space-x-1 items-center">
              <motion.div 
                className="w-2 h-2 bg-gray-600 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
              />
              <motion.div 
                className="w-2 h-2 bg-gray-600 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
              />
              <motion.div 
                className="w-2 h-2 bg-gray-600 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;