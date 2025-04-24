import React from 'react';
import { Bot, Cpu, MessageSquare, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Chat Assistant</h1>
        <p className="text-xl text-gray-600">
          Learn more about our emotionally intelligent AI chat assistant and how it works.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start mb-8">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <Bot className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Emotional Intelligence</h2>
            <p className="text-gray-700">
              Our chat assistant is designed to display different emotional states, adapting its 
              responses based on the personality you select. This creates a more human-like and 
              engaging conversation experience.
            </p>
          </div>
        </div>

        <div className="flex items-start mb-8">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <Cpu className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Powered by Gemini AI</h2>
            <p className="text-gray-700">
              The assistant uses Google's Gemini 2.0 Flash Lite model, a state-of-the-art language model 
              that can understand context, generate human-like responses, and adapt to different 
              conversational styles.
            </p>
          </div>
        </div>

        <div className="flex items-start mb-8">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <MessageSquare className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Persistent Across Pages</h2>
            <p className="text-gray-700">
              The chat assistant is available on every page of the website. Your conversation history 
              and selected emotional state are preserved as you navigate between pages, ensuring a 
              seamless experience.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <Shield className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Privacy First</h2>
            <p className="text-gray-700">
              Your conversations are stored locally in your browser and are not sent to any server 
              except for processing by the AI model. We respect your privacy and do not track or 
              store your chat history.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-4">
            This chat assistant is built using modern web technologies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>React for the user interface</li>
            <li>TypeScript for type safety</li>
            <li>Framer Motion for smooth animations</li>
            <li>Context API for state management</li>
            <li>Google's Generative AI SDK for AI integration</li>
            <li>Tailwind CSS for styling</li>
            <li>Lucide React for icons</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Try Different Emotions</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-6">
            Each emotional state of the chat assistant has a unique personality and response style:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-indigo-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-indigo-600">Normal</h3>
              <p className="text-gray-700 text-sm">
                "Hello! How can I assist you today?"
              </p>
            </div>
            
            <div className="border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-yellow-600">Happy</h3>
              <p className="text-gray-700 text-sm">
                "Hi there! I'm feeling really wonderful today! How can I brighten your day? 😊"
              </p>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Sad</h3>
              <p className="text-gray-700 text-sm">
                "Hey... I'm not feeling great today, but I'll try to help you... 😔"
              </p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-red-600">Angry</h3>
              <p className="text-gray-700 text-sm">
                "What do you want?! I'm a bit frustrated right now! 😠"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;