import React, { createContext, useContext, useState, useEffect } from 'react';
import { EmotionType, ChatMessage, ChatBotState, ChatBotContextType } from '../types';
import { getChatResponse } from '../services/geminiService';

const initialState: ChatBotState = {
  isOpen: false,
  emotion: 'normal',
  showEmotionSelector: true,
  messages: [],
  isTyping: false,
};

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (!context) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  return context;
};

export const ChatBotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ChatBotState>(() => {
    // Load from localStorage if available
    const savedState = localStorage.getItem('chatBotState');
    return savedState ? JSON.parse(savedState) : initialState;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatBotState', JSON.stringify(state));
  }, [state]);

  const toggleChat = () => {
    setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  const selectEmotion = (emotion: EmotionType) => {
    setState(prevState => ({
      ...prevState,
      emotion,
      showEmotionSelector: false,
      messages: [
        ...prevState.messages,
        {
          id: Date.now().toString(),
          text: getEmotionGreeting(emotion),
          sender: 'bot',
          timestamp: Date.now(),
        },
      ],
    }));
  };

  const getEmotionGreeting = (emotion: EmotionType): string => {
    switch (emotion) {
      case 'happy':
        return "Hi there! I'm feeling really wonderful today! How can I brighten your day? 😊";
      case 'sad':
        return "Hey... I'm not feeling great today, but I'll try to help you... 😔";
      case 'angry':
        return "What do you want?! I'm a bit frustrated right now! 😠";
      default:
        return "Hello! How can I assist you today?";
    }
  };

  const sendMessage = async (message: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: Date.now(),
    };

    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, userMessage],
      isTyping: true,
    }));

    try {
      // Get response from AI
      const botResponse = await getChatResponse(message, state.emotion, state.messages);
      
      // Add bot response
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: Date.now() + 1,
      };

      setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, botMessage],
        isTyping: false,
      }));
    } catch (error) {
      console.error('Error getting chat response:', error);
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't process your request. Please try again.",
        sender: 'bot',
        timestamp: Date.now() + 1,
      };

      setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, errorMessage],
        isTyping: false,
      }));
    }
  };

  const resetChat = () => {
    setState({
      ...initialState,
      isOpen: true,
    });
  };

  return (
    <ChatBotContext.Provider
      value={{
        state,
        toggleChat,
        selectEmotion,
        sendMessage,
        resetChat,
      }}
    >
      {children}
    </ChatBotContext.Provider>
  );
};