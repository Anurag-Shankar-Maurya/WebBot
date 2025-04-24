import React from 'react';
import { useChatBot } from '../../contexts/ChatBotContext';
import ChatBotIcon from './ChatBotIcon';
import ChatBotWindow from './ChatBotWindow';
import { AnimatePresence } from 'framer-motion';

const ChatBot: React.FC = () => {
  const { state, toggleChat } = useChatBot();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ChatBotIcon onClick={toggleChat} emotion={state.emotion} />
      <AnimatePresence>
        {state.isOpen && <ChatBotWindow />}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;