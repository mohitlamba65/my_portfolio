# Modern Full-Stack Developer Portfolio

A premium, high-performance portfolio website built with React, Vite, and Tailwind CSS v4. This project showcases a modern design system featuring glassmorphism, rich dark mode aesthetics, and smooth animations powered by Framer Motion.

![Portfolio Preview](https://raw.githubusercontent.com/mohitlamba65/portfolio/main/preview.png)

## ✨ Features

- **🎨 Premium UI/UX**: Designed with a focus on aesthetics, featuring a custom dark theme, glassmorphism effects, and the modern "Outfit" typeface.
- **🚀 High Performance**: Built on Vite for lightning-fast development and optimized production builds.
- **🎭 Advanced Animations**: Smooth, complex animations and page transitions using `framer-motion`.
- **💅 Modern Styling**: Utilizes the latest Tailwind CSS v4 with CSS variables and `@theme` configuration.
- **📱 Fully Responsive**: Flawless experience across all devices, from mobile phones to large desktop screens.
- **🧩 Modular Architecture**: Clean, reusable component structure with a dedicated UI library.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```
src/
├── components/        # React components
│   ├── ui/            # Reusable UI components (Button, Input, etc.)
│   └── ...            # Feature components (Hero, Skills, etc.)
├── hooks/             # Custom React hooks (use-toast, etc.)
├── lib/               # Utility functions
├── App.jsx            # Main application component
├── main.jsx           # Entry point
├── index.css          # Global styles & Tailwind config
└── mock.js            # Mock data for the portfolio
```

## 🎨 Customization

### Updating Content
Edit `src/mock.js` to update your personal information, skills, and projects.

### Theming
The design system is defined in `src/index.css` using CSS variables. You can easily adjust colors, fonts, and other design tokens there.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
