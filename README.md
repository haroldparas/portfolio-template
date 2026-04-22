# 🚀 Portfolio

A high-performance, editorial-style portfolio featuring a neutral visual system, warm surfaces, and a built-in AI **"Digital Twin."**  
This assistant is trained on your professional data to interact with visitors in real-time.

---

## 🛠️ Tech Stack & Architecture

### Core Framework & Styling

| Tech            | Role        | Description                                                |
|-----------------|------------|------------------------------------------------------------|
| **Next.js 16.2** | Framework  | App Router architecture with Server Components             |
| **React 19.2**   | UI Library | Utilizing latest concurrent features and hooks             |
| **TypeScript 5** | Language   | Strict type-safety across client and server                |
| **Tailwind CSS 4** | Styling | Modern utility-first CSS via PostCSS                       |

---

### 🤖 AI Integration (The Digital Twin)

- **Google Generative AI**  
  Powered by the `gemini-2.5-flash` model for intelligent context-awareness  

- **Vercel AI SDK**  
  Implementation of `@ai-sdk/react` for real-time, chunk-by-chunk stream processing  

- **Secure Handlers**  
  `route.ts` handlers ensure API keys remain protected on the server side  

---

## ✨ Key Features

- 🤖 **Interactive AI Chatbot**  
  A smart assistant that dynamically reads your data to answer questions about your career  

- 🎯 **Single Source of Truth**  
  A centralized TypeScript file feeds both the UI components and the AI's system prompt  

- 🌗 **Adaptive Theme**  
  Seamless Dark/Light mode switching with high-contrast surfaces  

- 📑 **Modular Resume**  
  Dedicated sections for Experience, Projects, Skills, and Certifications  

- 📱 **Responsive Design**  
  Fully fluid layouts for mobile, tablet, and desktop viewing  

---

## 📂 Project Structure

```plaintext
├── 📂 app/              # Next.js App Router (Pages & API Routes)
├── 📂 components/       # Reusable UI (ChatBot, Nav, ThemeSwitcher)
├── 📂 data/             # The "Brain" (Single TS file for portfolio data)
├── 📂 hooks/            # Custom React hooks
├── 📂 public/           # Static assets (Images, Icons)
└── 📂 styles/           # Global CSS & Tailwind config

