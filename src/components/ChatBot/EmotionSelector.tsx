import React from 'react';
import { motion } from 'framer-motion';
import { useChatBot } from '../../contexts/ChatBotContext';
import { Bot, Smile, Frown, Angry } from 'lucide-react';

const EmotionSelector: React.FC = () => {
  const { selectEmotion } = useChatBot();

  const emotions = [
    { type: 'normal', name: 'Normal', icon: Bot, color: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
    { type: 'happy', name: 'Happy', icon: Smile, color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
    { type: 'sad', name: 'Sad', icon: Frown, color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { type: 'angry', name: 'Angry', icon: Angry, color: 'bg-red-100 text-red-600 border-red-200' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-full flex flex-col p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-2">How would you like me to respond?</h3>
      <p className="text-sm text-gray-500 mb-6">Select a personality for your AI assistant</p>
      
      <motion.div 
        className="grid grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {emotions.map((emotion) => {
          const Icon = emotion.icon;
          
          return (
            <motion.button
              key={emotion.type}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border ${emotion.color} hover:shadow-md transition-all`}
              onClick={() => selectEmotion(emotion.type as any)}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-10 h-10 mb-2" />
              <span className="font-medium">{emotion.name}</span>
            </motion.button>
          );
        })}
      </motion.div>
      
      <p className="text-xs text-gray-400 mt-auto text-center">
        Your selection will affect how the AI assistant responds to your messages
      </p>
    </div>
  );
};

export default EmotionSelector;