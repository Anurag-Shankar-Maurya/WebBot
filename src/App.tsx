import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <ChatBot />
      </Layout>
    </div>
  );
}

export default App;