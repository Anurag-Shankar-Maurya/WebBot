import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-gray-600 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} ChatBot Demo. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;