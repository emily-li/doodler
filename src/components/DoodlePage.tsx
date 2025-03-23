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
    <div className="flex flex-col text-center p-8 h-screen bg-gradient-to-b from-yellow-100 to-yellow-200">
      <div className="font-display max-w-md mx-auto">
        <h1 className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-900">
          doodler
        </h1>

        <DoodleIdeaButton onClick={updateIdea} />
        <DoodleIdea idea={isLoadingIdea ? "..." : idea} />
      </div>

      <TldrawWrapper className="mt-8 border rounded-lg border-rose-700" />
    </div>
  );
}
