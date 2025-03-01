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
  try {
    const response = await fetch("http://localhost:5000/api/v1/idea", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(
        `API request failed. Status: ${response.status}. Body: ${await response.text()}`
      );
    } else {
      const data = await response.json();

      if (!data.idea) {
        throw new Error("API response missing idea property");
      } else {
        return data.idea;
      }
    }
  } catch (error) {
    console.error("Error fetching idea:", error);
    throw error; // Re-throw to be handled by generateIdea
  }
};

export const generateIdea = (): Promise<string> =>
  fetchIdea().catch(() => getFallbackIdea());
