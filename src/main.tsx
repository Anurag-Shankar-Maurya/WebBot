import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ChatBotProvider } from './contexts/ChatBotContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ChatBotProvider>
        <App />
      </ChatBotProvider>
    </BrowserRouter>
  </StrictMode>
);