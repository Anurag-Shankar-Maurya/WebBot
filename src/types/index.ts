export type EmotionType = 'normal' | 'happy' | 'sad' | 'angry';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}

export interface ChatBotState {
  isOpen: boolean;
  emotion: EmotionType;
  showEmotionSelector: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
}

export interface ChatBotContextType {
  state: ChatBotState;
  toggleChat: () => void;
  selectEmotion: (emotion: EmotionType) => void;
  sendMessage: (message: string) => void;
  resetChat: () => void;
}