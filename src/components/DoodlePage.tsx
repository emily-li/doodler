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

  return (
    <div className="text-center p-8 font-comic bg-blue-50 min-h-screen">
      <h1 className="text-5xl text-pink-500 font-bold mb-8">doodler</h1>
      <button
        className="bg-pink-500 text-white py-2 px-4 text-2xl rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-110"
        onClick={() => setIdea(generateIdea())}
      >
        generate doodle idea
      </button>
      <br />
      {idea && <p className="mt-8 text-3xl text-orange-500">{idea}</p>}
    </div>
  );
}
