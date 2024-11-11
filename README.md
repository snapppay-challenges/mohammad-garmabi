# Snapp-Code-Challenge Project

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Configuration](#configuration)
7. [Scripts](#scripts)
8. [Project Structure](#project-structure)
9. [Code Quality Tools](#code-quality-tools)
10. [Contributors](#contributors)

---

### Introduction

This project is a web application designed to provide a robust, interactive frontend experience. Built with modern frontend technologies, it aims to deliver high performance and responsiveness across devices.

### Features

- **Responsive Design**: Optimized for various screen sizes and devices.
- **Modern Frameworks**: Developed using the latest JavaScript/TypeScript libraries.
- **Environment-Specific Configurations**: Supports different configurations for development, testing, and production.
- **Linting and Formatting**: Configured with ESLint and Prettier for consistent code quality.

### Prerequisites

- **Node.js**: Ensure that Node.js (version 14 or higher) is installed.
- **Package Manager**: Preferably use `pnpm` for handling dependencies.

### Installation

1. Clone the repository:
   
    git clone https://github.com/mohammadgarmabi/Snapp-Code-Challenge.git
    cd Snapp-Code-Challenge
   

2. Install dependencies:
   
    pnpm install
   

### Usage

To start the development server, use:


pnpm start


This will launch the app locally, typically at `http://localhost:3000`.

### Configuration

- **Environment Variables**: Use `.env` files for environment-specific variables (e.g., `.env.local`, `.env.prod`). These files should include sensitive configurations such as API keys and backend URLs.

### Scripts

The following scripts are defined in `package.json`:

- **Start**: `pnpm start` - Runs the app in development mode.
- **Build**: `pnpm build` - Compiles the app for production.
- **Test**: `pnpm test` - Runs tests for the application.
- **Lint**: `pnpm lint` - Lints the codebase with ESLint.
- **Format**: `pnpm format` - Formats code with Prettier.

### Project Structure

A typical structure for this project may look like this:

```
frontend-project/
├── public/             # Static files
├── src/                # Source code
│   ├── apis/
│   │    ├── config/    # Includes the endpoint configuration and the axios interceptors
│   │    ├── controller/ # Controller layer for handling business logic and request/response transformations
│   │    ├── dto/        # Data transfer objects for any request/response
│   │    └── index.ts    # Initial axios configuration
│   ├── components/     # Reusable components
│   ├── constants/      # Global constants
│   ├── hooks/          # Includes the react query hook and custom hook 
│   ├── layout/         # Layout components
│   ├── pages/          # Page components
│   ├── providers/      # Wrap providers here (e.g., react query provider and theme provider and etc)
│   ├── routes/         # Routing configuration
│   ├── stores/         # Global state management (e.g., zustand)
│   ├── theme/          # Theme configuration for mui and overrides
│   └── index.tsx       # Entry point
├── .env                # Environment variables
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

### Code Quality Tools

#### ESLint Configuration
The project uses ESLint for maintaining code quality and enforcing consistent coding patterns. Our ESLint configuration includes:

- **TypeScript Support**: Extended configuration for TypeScript
- **React Hooks Rules**: Enforcing React Hooks best practices
- **Import Rules**: Organizing and validating imports
- **Best Practices**: Enforcing JavaScript/TypeScript best practices


export default tseslint.config(
  { ignores: ['dist', 'public', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  }
);


#### Prettier Configuration
Prettier is configured to maintain consistent code formatting across the project. Our Prettier settings include:


{
   "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "endOfLine": "auto"
}


These tools can be run using:
- `pnpm lint`: Runs ESLint to check for code quality issues
- `pnpm lint:fix`: Automatically fixes ESLint issues where possible
- `pnpm prettify`: Formats all files using Prettier

### Contributors

- [mohammadgarmabi](https://github.com/mohammadgarmabi)
- List additional contributors here.
