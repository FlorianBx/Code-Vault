import { test, describe, expect } from "vitest";
import useFilter from "../useFilter";

import { ref } from "vue";

// Mock datas
const datasMock = [
  {
    id: "1",
    name: "Component 1",
    code: "code 1",
    createdAt: "2022-01-01",
    lastUpdate: "2022-01-02",
    like: 100,
    tag: "Vue",
    description: "A Vue component",
  },
  {
    id: "2",
    name: "Component 2",
    code: "code 2",
    createdAt: "2022-01-01",
    lastUpdate: "2022-01-02",
    like: 10,
    tag: "Angular",
    description: "A Angular component",
  },
  {
    id: "3",
    name: "Component 3",
    code: "code 3",
    createdAt: "2022-01-01",
    lastUpdate: "2022-01-02",
    like: 80,
    tag: "React",
    description: "A React component",
  },
  // ... similar for other objects
];

describe("useFilter", () => {
  test("should filter data by tag", () => {
    const { searchQuery, filteredSnippets } = useFilter(ref(datasMock));

    // No filter
    expect(filteredSnippets.value.length).toBe(datasMock.length);

    // With filter
    searchQuery.value = "Vue";
    expect(filteredSnippets.value.length).toBe(1);
    if (Array.isArray(filteredSnippets.value)) {
      expect(filteredSnippets.value[0].tag).toBe("Vue");
    }
  });

  test("should filter data by description", () => {
    const { searchQuery, filteredSnippets } = useFilter(ref(datasMock));

    searchQuery.value = "3";
    expect(filteredSnippets.value.length).toBe(1);
    if (Array.isArray(filteredSnippets.value)) {
      expect(filteredSnippets.value[0].name).toBe("Component 3");
    }
  });
});
