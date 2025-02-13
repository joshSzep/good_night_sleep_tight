interface StoryDisplayProps {
  story: string | null;
}

export default function StoryDisplay({ story }: StoryDisplayProps) {
  if (!story) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Your Bedtime Story
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        {story.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
