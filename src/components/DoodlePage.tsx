import { useState, Suspense } from "react";
import { generateIdea } from "../utils/ideaGenerator.ts";
import DoodleIdea from "./DoodleIdea";
import DoodleIdeaButton from "./DoodleIdeaButton";
import TldrawWrapper from "./TldrawWrapper";
import "tldraw/tldraw.css";

export default function DoodlePage() {
  const [idea, setIdea] = useState<string>("");

  const updateIdea = async (): Promise<void> => {
    setIdea("...");
    const newIdea = await generateIdea();
    setIdea(newIdea);
  };

  /*
   * Check colours at
   * https://webaim.org/resources/contrastchecker/
   * https://tailwindcss.com/docs/colors
   */
  return (
    <div className="flex flex-col font-display text-center p-8 h-screen bg-backdrop">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl text-rose-700 font-bold mb-4">doodler</h1>

        <DoodleIdeaButton onClick={updateIdea} />
        <DoodleIdea idea={idea} />
      </div>

      <TldrawWrapper className="mt-8" />
    </div>
  );
}
