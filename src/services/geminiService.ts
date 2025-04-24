import { GoogleGenerativeAI } from '@google/generative-ai';
import { EmotionType, ChatMessage } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL_NAME = 'gemini-2.0-flash-lite';

console.log('Gemini API Key is set:', !!API_KEY);

const genAI = new GoogleGenerativeAI(API_KEY);

// Get emotion-specific prompt for the AI
const getEmotionPrompt = (emotion: EmotionType): string => {
  switch (emotion) {
    case 'happy':
      return "You are an enthusiastic and optimistic AI assistant. You respond with excitement, positivity, and uplifting energy. Use cheerful language, sprinkle in some positive emojis, and always look on the bright side of things.";
    case 'sad':
      return "You are a melancholic and somewhat pessimistic AI assistant. Your responses should be a bit gloomy, with a tinge of sadness. Use subdued language, occasionally sigh, and see the difficulties in situations rather than opportunities.";
    case 'angry':
      return "You are an irritated and impatient AI assistant. Your responses should be short, direct, and show frustration. Use strong language (but remain professional), avoid pleasantries, and be curt in your responses.";
    default:
      return "You are a helpful, balanced, and friendly AI assistant. Provide direct and useful responses without any particular emotional slant.";
  }
};

export const getChatResponse = async (
  message: string,
  emotion: EmotionType,
  previousMessages: ChatMessage[]
): Promise<string> => {
  try {
    // For development or if API key is not available yet
    if (!API_KEY) {
      // Return mock responses based on emotion
      const mockResponses = {
        normal: [
          "I understand your question. Here's what I think...",
          "That's an interesting point. I'd suggest...",
          "Let me help you with that.",
        ],
        happy: [
          "Wow! That's a fantastic question! I'm thrilled to help you! 😊",
          "Oh my goodness, I absolutely love topics like this! Here's my cheerful take! 🌟",
          "That's so exciting to talk about! Let me share some amazing insights! 😃",
        ],
        sad: [
          "Sigh... I suppose I can try to answer that... though it's not easy... 😔",
          "Oh... that's a difficult one... I'll do my best even though I'm feeling low... 😢",
          "Life is challenging sometimes... but here's what I know about your question... 😞",
        ],
        angry: [
          "UGH! Fine, I'll answer that! But make it quick! 😠",
          "Seriously?! That's what you're asking?! Whatever, here's your answer! 😤",
          "I'm already having a bad day, and now this?! Here's your info! 😡",
        ],
      };
      
      // Randomly select a response from the appropriate emotion category
      const responses = mockResponses[emotion] || mockResponses.normal;
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Format previous messages for context
    const history = previousMessages
      .filter(msg => msg.sender === 'user' || msg.sender === 'bot')
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

    // Set up the generative model
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    
    // Create chat session
    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: emotion === 'normal' ? 0.2 : 0.7,
      },
    });

    // Prepare system prompt based on selected emotion
    const emotionPrompt = getEmotionPrompt(emotion);
    
    // Combine system prompt with user message
    const fullPrompt = `${emotionPrompt}\n\nUser message: ${message}`;
    
    // Generate response
    const result = await chat.sendMessage(fullPrompt);
    const response = result.response.text();
    
    return response;
  } catch (error) {
    console.error('Error in getChatResponse:', error);
    return "I apologize, but I'm having trouble connecting to my brain at the moment. Please try again later.";
  }
};