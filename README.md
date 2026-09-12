# AI Chat Frontend

An AI-powered online chat interface built with Next.js and React, designed to be integrated into a web-based healthcare and doctor appointment platform.

The application provides a responsive chat experience that allows users to communicate with an AI assistant directly through the website.

## Overview

This project is the frontend implementation of an online AI chat feature for a doctor appointment platform.

The chat interface is designed to provide users with an accessible way to interact with an AI assistant while using the website. The application communicates with the backend through HTTP requests and renders AI-generated responses in a user-friendly conversational interface.

## Features

- 💬 Real-time conversational chat interface
- 🤖 AI assistant integration
- ⚡ Fast and responsive UI
- 📱 Responsive design for different screen sizes
- 🔌 API communication using Axios
- 📝 Markdown support for AI-generated responses
- 🧩 Component-based architecture
- 🚀 Built with Next.js App Router

## Tech Stack

### Frontend

- [Next.js](https://nextjs.org/) 15
- React 19
- Tailwind CSS
- Axios
- React Markdown

### Development Tools

- ESLint
- PostCSS

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── aiMessage.js
│   ├── chatContainer.js
│   ├── messageBox.js
│   └── userMessage.js
├── public/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.mjs
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bnfshedehqan/get_nobat_chat_with_ai_front.git
cd get_nobat_chat_with_ai_front
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development

```bash
npm run dev
```

Runs the application in development mode.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase for potential issues.

## API Integration

The frontend communicates with the AI backend through HTTP requests using Axios.

The chat flow generally follows this structure:

```text
User
  ↓
Chat Interface
  ↓
Frontend
  ↓
API Request
  ↓
AI Backend
  ↓
AI Response
  ↓
Chat Interface
```

The frontend is responsible for handling the conversation UI, sending user messages to the backend, and rendering the returned AI responses.

## Markdown Support

AI responses are rendered using `react-markdown`, allowing the interface to display structured AI-generated content such as:

- Headings
- Lists
- Paragraphs
- Emphasis
- Other supported Markdown elements

## Architecture

The project follows a component-based React architecture.

The main responsibilities are separated between:

- `app/` - Next.js application routes and pages
- `components/` - Reusable UI components
- `public/` - Static assets
- API communication - Handled through Axios

This structure makes the chat interface easier to maintain and extend as additional features are introduced.

## Future Improvements

Potential improvements include:

- Conversation history
- User authentication
- Persistent chat sessions
- Streaming AI responses
- Loading and typing indicators
- Error and retry handling
- Improved accessibility
- Voice interaction
- Integration with doctor appointment workflows

## Author

**Banafshe Dehqan**

- GitHub: https://github.com/bnfshedehqan
- LinkedIn: https://www.linkedin.com/in/banafshe-dehqan/
- Portfolio: https://bnfshedehqan.github.io/
