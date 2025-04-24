import React from 'react';
import { ArrowRight, Bot, Smile, Frown, Angry } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const emotions = [
    { name: 'Normal', description: 'Balanced and helpful responses', icon: Bot, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Happy', description: 'Enthusiastic and optimistic responses', icon: Smile, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Sad', description: 'Melancholic and subdued responses', icon: Frown, color: 'bg-blue-100 text-blue-600' },
    { name: 'Angry', description: 'Direct and frustrated responses', icon: Angry, color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive AI Chat Assistant</h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience our emotional AI chat assistant that adapts its responses based on the personality you choose.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="mr-6">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="AI chat assistant illustration" 
              className="w-full max-w-xs rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Try it out!</h2>
            <p className="text-gray-600 mb-4">
              Click the chat icon in the bottom right corner to start a conversation with our AI assistant.
            </p>
            <p className="flex items-center text-indigo-600 font-medium">
              Select an emotion <ArrowRight className="w-4 h-4 ml-1" />
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Assistant's Personality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emotions.map((emotion, index) => {
            const Icon = emotion.icon;
            
            return (
              <motion.div
                key={emotion.name}
                className={`p-6 rounded-lg border ${emotion.color} relative overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-3 mr-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{emotion.name}</h3>
                    <p className="text-gray-700">{emotion.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <p className="text-gray-700">Click the chat icon in the bottom right corner of any page</p>
            </li>
            <li className="flex">
              <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <p className="text-gray-700">Select an emotional state for the AI assistant</p>
            </li>
            <li className="flex">
              <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <p className="text-gray-700">Start chatting with the AI that responds according to its emotional state</p>
            </li>
            <li className="flex">
              <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <p className="text-gray-700">Reset the chat to try a different emotional state</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default HomePage;