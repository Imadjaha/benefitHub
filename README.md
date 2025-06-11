# BenefitHub

A modern benefit management system built with React, TypeScript, and Vite. BenefitHub helps organizations manage and showcase their employee benefits and partner relationships.


## Features

- 🎨 Modern, responsive UI with dark mode support
- ✨ Smooth animations and transitions
- 💻 Fully typed with TypeScript
- 📱 Mobile-friendly design
- 🔄 Real-time benefit status updates
- 🎯 Partner network management
- 🌙 Dark/Light theme switcher
- 🚀 Fast performance with Vite

## Tech Stack

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Material-UI](https://mui.com/) - UI Components
- [React Router](https://reactrouter.com/) - Navigation
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/imadjaha/benefitHub.git
cd benefitHub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```bash
src/
├── components/         # Reusable UI components
├── pages/             # Route components
├── constants/         # Global constants
├── assets/           # Static assets
└── main.tsx          # Application entry point
```

## Key Components

- BenefitCard - Displays individual benefits
- PartnerCard - Shows partner information
- CreateBenefitForm - Form for adding/editing benefits
- DarkModeSwitcher - Theme toggle component