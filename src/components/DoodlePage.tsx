import { useState } from "react";
import { generateIdea } from "../utils/ideaGenerator.ts";

export default function DoodlePage() {
  const [idea, setIdea] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const updateIdea = async (): Promise<void> => {
    setIsLoading(true);
    const newIdea = await generateIdea();
    setIsLoading(false);
    setIdea(newIdea);
  };

  /*
   * Check colours at
   * https://webaim.org/resources/contrastchecker/
   * https://tailwindcss.com/docs/colors
   */
  return (
    <div className="font-display text-center p-8 font-comic min-h-screen bg-backdrop">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl text-rose-700 font-bold mb-8">doodler</h1>

        <button
          className="container py-2 px-4 text-2xl rounded-lg cursor-pointer  active:translate-0.5 bg-emerald-600 text-backdrop active:bg-emerald-700"
          onClick={updateIdea}
        >
          {isLoading ? "..." : "generate doodle idea"}
        </button>
        <br />
        {idea && !isLoading && (
          <p className="mt-8 text-5xl text-cyan-900">{idea}</p>
        )}
      </div>
    </div>
  );
}
