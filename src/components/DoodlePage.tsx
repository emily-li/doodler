import { useState } from "react";
import { generateIdea } from "../utils/ideaGenerator.ts";

export default function DoodlePage() {
  const [idea, setIdea] = useState<string>("");

  const updateIdea = (): void => {
    setIdea(generateIdea());
  }

  /*
   * Check colours at 
   * https://webaim.org/resources/contrastchecker/
   * https://tailwindcss.com/docs/colors
   */
  return (
    <div className="text-center p-8 font-comic min-h-screen bg-backdrop">
      <h1 className="text-5xl text-rose-700 font-bold mb-8">doodler</h1>

      <button
        className="bg-emerald-600 text-backdrop py-2 px-4 text-2xl rounded-lg cursor-pointer active:bg-emerald-700 active:translate-0.5"
        onClick={updateIdea}
      >
        generate doodle idea
      </button>
      <br />
      {idea && <p className="mt-8 text-3xl text-cyan-900">{idea}</p>}
    </div>
  );
}
