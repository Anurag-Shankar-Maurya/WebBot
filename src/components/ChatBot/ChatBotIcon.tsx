import React from 'react';
import { motion } from 'framer-motion';
import { EmotionType } from '../../types';
import { Bot, Smile, Frown, Angry } from 'lucide-react';

interface ChatBotIconProps {
  onClick: () => void;
  emotion: EmotionType;
}

const ChatBotIcon: React.FC<ChatBotIconProps> = ({ onClick, emotion }) => {
  const getIconColor = () => {
    switch (emotion) {
      case 'happy': return 'text-yellow-500';
      case 'sad': return 'text-blue-500';
      case 'angry': return 'text-red-500';
      default: return 'text-indigo-600';
    }
  };

  const getEmotionIcon = () => {
    switch (emotion) {
      case 'happy': return <Smile className="w-6 h-6" />;
      case 'sad': return <Frown className="w-6 h-6" />;
      case 'angry': return <Angry className="w-6 h-6" />;
      default: return <Bot className="w-6 h-6" />;
    }
  };

  return (
    <motion.button
      className={`rounded-full p-4 bg-white shadow-lg hover:shadow-xl ${getIconColor()} transition-all duration-300 flex items-center justify-center`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {getEmotionIcon()}
    </motion.button>
  );
};

export default ChatBotIcon;