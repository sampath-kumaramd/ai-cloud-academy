# AI Cloud Academy

A modern Next.js application for an educational platform focused on AI and cloud development courses.

## Overview

AI Cloud Academy is a comprehensive learning platform that offers courses in AI and cloud development. The platform features a sleek, modern UI with interactive elements, animations, and a responsive design to provide an engaging learning experience.

## Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Code Quality**: ESLint, Prettier, Husky

## Key Features

- Responsive design that works across all device sizes
- Interactive UI elements with smooth animations
- Course catalog with detailed course information
- Crash courses section for quick learning
- Project showcases
- Testimonials from students
- Team member profiles
- FAQ section

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable UI components
- `/src/layout`: Layout components like navigation and footer
- `/public`: Static assets including images and fonts

## Component Architecture

The project follows a modular component architecture:

- **Course Components**: Components specific to course pages
- **Home Page Components**: Components for the landing page
- **Crash Course Components**: Components for crash course pages
- **UI Components**: Reusable UI elements like buttons, cards, etc.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Workflow

- **Code Formatting**: The project uses Prettier for code formatting
- **Linting**: ESLint is configured for code quality
- **Auto-formatting on Save**: You can enable Prettier to format on save with the `prettier-watch` script

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

- Make sure to run `npm run prepare` after cloning to set up Husky pre-commit hooks
- Follow the code style guidelines enforced by ESLint and Prettier
- Create feature branches from `main` and submit pull requests for review

## License

This project is private and not open for public use or distribution.