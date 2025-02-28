export const generateIdea = (): string => {
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
