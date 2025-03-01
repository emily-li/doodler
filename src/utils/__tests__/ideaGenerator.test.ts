import { generateIdea } from "../ideaGenerator";
import { describe, it, expect, vi, beforeEach } from "vitest";

globalThis.fetch = vi.fn();
const expectedUrl = "http://localhost:5000/api/v1/idea";
const expectedMethod = "POST";

describe("generateIdea", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return idea from API", async () => {
    mockFetchResponse(`{ "idea": "api response" }`);

    const result = await generateIdea();

    expect(result).toBe("api response");
  });

  it("should return fallback value if API returns no idea", async () => {
    mockFetchResponse(`{ "idea": "" }`);

    const result = await generateIdea();

    expect(result).toBeTruthy();
    expect(typeof result).toBe("string");
  });

  it("should return fallback value if API returns invalid json", async () => {
    mockFetchResponse(`System error`);

    const result = await generateIdea();

    expect(result).toBeTruthy();
    expect(typeof result).toBe("string");
  });
});

const mockFetchResponse = (response: string): void => {
  const mockResponse = {
    text: () => Promise.resolve(response),
  };
  (globalThis.fetch as any).mockImplementation(
    (url: string, options: RequestInit) => {
      if (url === expectedUrl && options.method === expectedMethod) {
        return Promise.resolve(mockResponse);
      } else {
        return Promise.reject(new Error("Unexpected fetch call"));
      }
    }
  );
};
