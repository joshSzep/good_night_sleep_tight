import { NextResponse } from "next/server";
import { generateStory } from "@/lib/storyGenerator";
import type { StoryInput } from "@/lib/storyGenerator";

export async function POST(request: Request) {
  try {
    const input: StoryInput = await request.json();

    // Basic validation
    if (!input.childName || !input.favoriteToy || !input.favoriteFood || !input.favoriteColor) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const story = await generateStory(input);
    return NextResponse.json({ story });
  } catch (error) {
    console.error("Error in story generation:", error);
    return NextResponse.json(
      { error: "Failed to generate story" },
      { status: 500 }
    );
  }
}
