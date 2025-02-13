# AI-Powered Bedtime Story Generator (Next.js + LangChain + Anthropic)

## Prompt

Create a **Next.js 14+ application** using **TypeScript** that will be deployed on **Vercel**. The application should generate **personalized bedtime stories** for young children using **LangChain** and **Anthropic's LLM**.

## Features & Functionality

### 1. Two-Step LLM Interaction

- **Step 1: Collect Information**
  - Present a form to gather details from parents:
    - Child’s name  
    - Favorite toy  
    - Favorite food  
    - Favorite color  
    - Any other optional details (e.g., favorite animal, location, adventure type)  
- **Step 2: Generate Personalized Story**
  - Using the collected details, construct a unique bedtime story for the child.  
  - Ensure the story is imaginative, engaging, and age-appropriate.  
  - The story should include the child as the main character, with their favorite toy, food, and color playing key roles.  

### 2. Backend Logic (API Routes in Next.js)

- Implement API endpoints using **Next.js API routes**.
- Use **LangChain.js** to interact with **Anthropic’s LLM**, processing user inputs and generating responses.  
- Read API keys securely from **environment variables** (e.g., `ANTHROPIC_API_KEY`).  

### 3. Frontend UI (React + Tailwind CSS)

- Simple, user-friendly UI for parents to input information.
- Responsive design optimized for **mobile and tablet**.
- Display the generated story in an easy-to-read format.

### 4. Deployment & Open-Source Considerations

- The project should be **open-source**, with API keys stored in **environment variables** for security.  
- Deploy the application to **Vercel**, ensuring fast response times and easy scalability.  
- Include a **README.md** with setup instructions for local development and deployment.  

## Tech Stack

- **Frontend:** Next.js 14+, TypeScript, Tailwind CSS  
- **Backend:** Next.js API routes, LangChain.js  
- **AI Provider:** Anthropic Claude (via LangChain)  
- **Hosting:** Vercel  
- **Environment Variables:** API keys should be securely stored in `.env.local`  
