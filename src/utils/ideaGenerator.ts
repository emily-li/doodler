const fallbackIdeas = [
  "cat with a hat",
  "dog with a frog",
  "bear with a pear",
  "fish with a dish",
  "mouse with a house",
  "fox with some socks",
];

const getFallbackIdea = (): string => {
  const randomIndex = Math.floor(Math.random() * fallbackIdeas.length);
  return fallbackIdeas[randomIndex];
};

const fetchIdea = async (): Promise<string> => {
  const response = await fetch(
    "https://emilyli.pythonanywhere.com/api/v1/idea",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  const data = await response.text();
  const idea = JSON.parse(data).idea;

  if (!idea) {
    throw new Error(
      `Status: '${response.status}'. Body: '${await response.text()}'`
    );
  } else {
    return idea;
  }
};

export const generateIdea = async (): Promise<string> =>
  fetchIdea().catch((e) => {
    console.error("Failed to generate idea", e);
    return getFallbackIdea();
  });
