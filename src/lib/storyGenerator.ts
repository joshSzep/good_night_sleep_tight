import { ChatAnthropic } from "langchain/chat_models/anthropic";
import { PromptTemplate } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";

export interface StoryInput {
  childName: string;
  favoriteToy: string;
  favoriteFood: string;
  favoriteColor: string;
  additionalDetails?: string;
}

const storyPrompt = PromptTemplate.fromTemplate(`
Create a short, engaging bedtime story for a young child with the following details:
- Child's name: {childName}
- Favorite toy: {favoriteToy}
- Favorite food: {favoriteFood}
- Favorite color: {favoriteColor}
- Additional details: {additionalDetails}

Guidelines:
- Make the story 3-4 paragraphs long
- Use simple, child-friendly language
- Include the child as the main character
- Incorporate their favorite things naturally into the story
- Make it whimsical and magical
- End with a gentle, sleepy conclusion
- Avoid anything scary or unsettling

Story:
`);

export async function generateStory(input: StoryInput): Promise<string> {
  const model = new ChatAnthropic({
    modelName: "claude-3-opus-20240229",
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    temperature: 0.7,
  });

  const chain = storyPrompt.pipe(model).pipe(new StringOutputParser());

  try {
    const story = await chain.invoke({
      childName: input.childName,
      favoriteToy: input.favoriteToy,
      favoriteFood: input.favoriteFood,
      favoriteColor: input.favoriteColor,
      additionalDetails: input.additionalDetails || "None provided",
    });

    return story.trim();
  } catch (error) {
    console.error("Error generating story:", error);
    throw new Error("Failed to generate story. Please try again.");
  }
}
