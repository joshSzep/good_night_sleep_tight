import { useState } from "react";
import type { StoryInput } from "@/lib/storyGenerator";

interface StoryFormProps {
  onSubmit: (input: StoryInput) => Promise<void>;
  isLoading: boolean;
}

export default function StoryForm({ onSubmit, isLoading }: StoryFormProps) {
  const [formData, setFormData] = useState<StoryInput>({
    childName: "",
    favoriteToy: "",
    favoriteFood: "",
    favoriteColor: "",
    additionalDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="childName" className="block text-sm font-medium mb-1">
          Child&apos;s Name
        </label>
        <input
          type="text"
          id="childName"
          name="childName"
          required
          value={formData.childName}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="favoriteToy" className="block text-sm font-medium mb-1">
          Favorite Toy
        </label>
        <input
          type="text"
          id="favoriteToy"
          name="favoriteToy"
          required
          value={formData.favoriteToy}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="favoriteFood" className="block text-sm font-medium mb-1">
          Favorite Food
        </label>
        <input
          type="text"
          id="favoriteFood"
          name="favoriteFood"
          required
          value={formData.favoriteFood}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="favoriteColor" className="block text-sm font-medium mb-1">
          Favorite Color
        </label>
        <input
          type="text"
          id="favoriteColor"
          name="favoriteColor"
          required
          value={formData.favoriteColor}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="additionalDetails" className="block text-sm font-medium mb-1">
          Additional Details (Optional)
        </label>
        <textarea
          id="additionalDetails"
          name="additionalDetails"
          value={formData.additionalDetails}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
          placeholder="Favorite animal, location, adventure type..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Generating Story..." : "Generate Bedtime Story"}
      </button>
    </form>
  );
}
