import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">ChatBot Demo</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;