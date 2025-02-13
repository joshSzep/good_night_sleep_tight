"use client";

import { useState } from "react";
import StoryForm from "@/components/StoryForm";
import StoryDisplay from "@/components/StoryDisplay";
import type { StoryInput } from "@/lib/storyGenerator";

export default function Home() {
  const [story, setStory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (input: StoryInput) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error("Failed to generate story");
      }

      const data = await response.json();
      setStory(data.story);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate story. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            AI Bedtime Story Generator
          </h1>
          <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
            Create a personalized bedtime story for your child using AI magic! ✨
          </p>
          
          <div className="flex flex-col items-center">
            <StoryForm onSubmit={handleSubmit} isLoading={isLoading} />
            <StoryDisplay story={story} />
          </div>
        </div>
      </main>
    </div>
  );
}
