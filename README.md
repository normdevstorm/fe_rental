# BlogSpace - React TypeScript Blog Platform

A modern, responsive blog platform built with React, TypeScript, and Tailwind CSS. This project serves as a foundation for practicing state management, internationalization, and API integration.

## 🌟 Features

- **Modern UI/UX**: Clean and responsive design with Tailwind CSS
- **Multi-language Support**: Internationalization with react-i18next (English & French)
- **State Management**: Zustand for global state management
- **Routing**: React Router DOM v6 for navigation
- **Search & Filter**: Advanced search and filtering capabilities
- **Blog Management**: Browse, search, and interact with blog posts
- **User Authentication**: Login system with mock authentication
- **Responsive Design**: Mobile-first responsive design
- **TypeScript**: Full TypeScript support for type safety

## 🚀 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM v6
- **State Management**: Zustand for global state
- **API Client**: Axios with TanStack Query for server state
- **Forms**: React Hook Form with Yup validation
- **Internationalization**: react-i18next
- **Icons**: Heroicons and Lucide React
- **UI Components**: Headless UI for accessible components
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── BlogCard.tsx    # Blog post card component
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── BrowsePage.tsx  # Blog browsing with search
│   └── LoginPage.tsx   # Authentication page
├── store/              # Zustand stores
│   ├── authStore.ts    # Authentication state
│   └── blogStore.ts    # Blog posts state
├── services/           # API services
│   ├── api.ts          # Axios configuration
│   └── blogService.ts  # Blog-related API calls
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── locales/            # i18n translation files
│   ├── en.json         # English translations
│   └── fr.json         # French translations
└── i18n.ts            # i18n configuration
```

## 🛠️ Setup & Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        profiles.associations
ject: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
