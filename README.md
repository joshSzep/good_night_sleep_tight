# AI-Powered Bedtime Story Generator

A Next.js application that generates personalized bedtime stories for children using LangChain and Anthropic's Claude AI. Built with TypeScript and styled with Tailwind CSS.

## Features

- Generate unique, personalized bedtime stories
- Input your child's name and favorite things
- Dark mode support
- Mobile-responsive design
- Powered by Anthropic's Claude AI

## Prerequisites

Before you begin, ensure you have:
- Node.js 18.17 or later
- An Anthropic API key

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd good_night_sleep_tight
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=your-api-key-here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI Integration:** LangChain + Anthropic Claude
- **Deployment:** Vercel

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository
2. Import your project to Vercel
3. Add your `ANTHROPIC_API_KEY` to the environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
