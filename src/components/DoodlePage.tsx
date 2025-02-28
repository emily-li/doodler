import { useState } from "react";

const generateIdea = (): string => {
  const ideas = [
    "a cat with a hat",
    "a dog with a frog",
    "a bear with a pear",
    "a fish with a dish",
    "a mouse with a house",
    "a fox with some socks",
  ];
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
};

export default function DoodlePage() {
  const [idea, setIdea] = useState<string>("");

  /** Validate colours at https://webaim.org/resources/contrastchecker/ */
  return (
    <div className="text-center p-8 font-comic min-h-screen bg-backdrop">
      <h1 className="text-5xl text-rose-700 font-bold mb-8">doodler</h1>

      <button
        className={`bg-emerald-600 text-backdrop py-2 px-4 text-2xl rounded-lg cursor-pointer active:bg-emerald-700 active:translate-1`}
        onClick={() => setIdea(generateIdea())}
      >
        generate doodle idea
      </button>
      <br />
      {idea && <p className="mt-8 text-3xl text-cyan-900">{idea}</p>}
    </div>
  );
}
