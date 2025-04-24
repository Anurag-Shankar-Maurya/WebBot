# Floating Icon Chat Bot with Multiple Emotional States

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

An interactive AI chat assistant that adapts its personality based on selected emotional states, providing human-like conversations.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features ✨

- **Emotional Intelligence**  
  Choose from multiple emotional states (Normal, Happy, Sad, Angry) to customize response tone

- **Persistent Context**  
  Maintains conversation history and emotional state across page navigation

- **Privacy Focused**  
  All conversations are stored locally in browser (no server storage)

- **Advanced AI**  
  Powered by Google's Gemini 2.0 Flash Lite model

- **Smooth UX**  
  Framer Motion animations and responsive Tailwind CSS design

## Demo 🎥

*(Insert gif/video demo link here)*

## Technologies 🛠️

**Core Stack**
- React 18 + TypeScript
- Vite Build Tool
- Tailwind CSS
- Framer Motion

**AI Integration**
- Google Generative AI SDK
- Gemini 2.0 Flash Lite

**Utilities**
- React Router DOM
- Lucide React Icons

## Installation ⚙️

### Prerequisites
- Node.js ≥18.x
- npm ≥9.x
- Google API Key (for Gemini)

### Setup
```bash
# Clone repository
git clone https://github.com/Anurag-Shankar-Maurya/WebBot
cd WebBot

# Install dependencies
npm install

# Configure environment (create .env file)
echo "VITE_GEMINI_API_KEY=your_api_key" > .env

# Start development server
npm run dev
```

**Production Build**
```bash
npm run build
npm run preview
```

## Usage 💬

1. Click the floating chat icon (bottom-right)
2. Select emotional state:
   - 😊 Happy
   - 😢 Sad 
   - 😠 Angry
   - 😐 Normal
3. Begin conversation - AI adapts to selected emotion
4. Use reset button to clear history

## Configuration ⚙️

Environment Variables:
```
VITE_GEMINI_API_KEY=your_google_api_key
VITE_DEFAULT_EMOTION=normal
```

## Architecture 🏗️

```
src/
├── components/      # Reusable UI components
│   ├── ChatBot/     # Core chat interface
│   └── Layout/      # Page structure
├── contexts/        # State management
├── pages/           # Application views
├── services/        # API integrations
│   ├── ai/          # Gemini service
│   └── storage/     # Local storage
└── types/           # TypeScript definitions
```

## Contributing 🤝

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

**Coding Standards**
- Follow existing TypeScript conventions
- Document new components with JSDoc
- Include relevant tests

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📬

**Anurag Shankar Maurya**  
📧 anuragshankarmaurya@gmail.com  
🔗 [LinkedIn Profile](https://in.linkedin.com/in/anurag-shankar-maurya)  

---

<div align="center">
  Made with ❤️ using cutting-edge AI technology
</div>̥