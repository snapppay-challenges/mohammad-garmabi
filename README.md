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

```
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs'],

  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@next/next/no-img-element': 'off',
    'import/no-unresolved': ['error', { ignore: ['^@/'] }],
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'import/order': 'warn',
    'max-len': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'object-curly-newline': 'off',
    camelcase: 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-prototype-builtins': 'off',
  },
};

```

#### Prettier Configuration
Prettier is configured to maintain consistent code formatting across the project. Our Prettier settings include:

```
{
   "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "endOfLine": "auto"
}
```

These tools can be run using:
- `pnpm lint`: Runs ESLint to check for code quality issues
- `pnpm lint:fix`: Automatically fixes ESLint issues where possible
- `pnpm prettify`: Formats all files using Prettier

### Contributors

- [mohammadgarmabi](https://github.com/mohammadgarmabi)
- List additional contributors here.

### Code review checklist

- [ ] Main functionalities: These items SHOULD work correctly
    - [ ] List view
        - [ ] Show list of contacts properly with image, name, and tel and be clickable
        - [ ] Handle server errors
    - [ ] Pagination
        - [ ] Infinite scroll/page number button
        - [ ] Handle loading and end of the list
    - [ ] Detail view
        - [ ] Handle routing properly
        - [ ] Handle server errors
        - [ ] Handle routing error on manually changing the detail id
    - [ ] Search
        - [ ] Using Debounce
        - [ ] Handle multiple requests
        - [ ] Search by first name, last name, and telephone
    - [ ] Most visited contacts
        - [ ] Handle incorrect items in the list (e.g., when you manually change the detail page address)
- [ ] Clean code:
    - [ ] Well-structured project
    - [ ] Separate concerns
    - [ ] Component-thinking
    - [ ] Simple to understand and less complexity
    - [ ] No over-engineering
    - [ ] Avoid bad-practice patterns (e.g., multi re-rendering components, useEffect chaining)
    - [ ] No acute performance issues
    - [ ] Using pure CSS in a good way / Using CSS frameworks like Tailwind without extra complexity
- [ ] Plus points and nice to have: DON’T judge just based on lack of these items; they should be better compared to other competitors:
    - [ ] Creativity or eye-catching design
    - [ ] Using absolute path
    - [ ] Using ESLint
    - [ ] Using TypeScript in a best practice way (otherwise is a negative point)
    - [ ] Using (unit/e2e) Test in an applicable way not just writing some samples
