import { useState } from "react";
import { generateIdea } from "../utils/ideaGenerator.ts";
import DoodleIdea from "./DoodleIdea";
import DoodleIdeaButton from "./DoodleIdeaButton";
import TldrawWrapper from "./TldrawWrapper";

export default function DoodlePage() {
  const [idea, setIdea] = useState<string>("");
  const [isLoadingIdea, setIsLoadingIdea] = useState<boolean>(false);

  const updateIdea = async (): Promise<void> => {
    setIdea("");
    setIsLoadingIdea(true);

    const newIdea = await generateIdea();

    setIdea(newIdea);
    setIsLoadingIdea(false);
  };

  /*
   * Check colours at
   * https://webaim.org/resources/contrastchecker/
   * https://tailwindcss.com/docs/colors
   */
  return (
    <div className="flex flex-col text-center p-8 h-screen bg-backdrop">
      <div className="font-display max-w-md mx-auto">
        <h1 className="text-9xl text-rose-700 font-bold mb-4">doodler</h1>

        <DoodleIdeaButton onClick={updateIdea} />
        <DoodleIdea idea={isLoadingIdea ? "..." : idea} />
      </div>

      <TldrawWrapper className="mt-8 border rounded-lg border-rose-700" />
    </div>
  );
}
