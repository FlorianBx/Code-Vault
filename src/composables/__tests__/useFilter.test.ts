import { test, describe, expect } from "vitest";
import useFilter from "../useFilter";

import { ref } from "vue";

// Mock datas
const datasMock = [
	{
		id: "1",
		title: "Component 1",
		description: "A Vue component",
		code: "code 1",
		language: "JavaScript",
		tags: "Vue",
		authorId: "1",
		createdAt: "2022-01-01",
		updatedAt: "2022-01-02",
		visibility: true,
	},
	{
		id: "2",
		title: "Component 2",
		description: "A Angular component",
		code: "code 2",
		language: "JavaScript",
		tags: "Angular",
		authorId: "2",
		createdAt: "2022-01-01",
		updatedAt: "2022-01-02",
		visibility: true,
	},
	{
		id: "3",
		title: "Component 3",
		description: "A React component",
		code: "code 3",
		language: "JavaScript",
		tags: "React",
		authorId: "3",
		createdAt: "2022-01-01",
		updatedAt: "2022-01-02",
		visibility: true,
	},
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
			expect(filteredSnippets.value[0].tags).toBe("Vue");
		}
	});

	test("should filter data by description", () => {
		const { searchQuery, filteredSnippets } = useFilter(ref(datasMock));

		searchQuery.value = "3";
		expect(filteredSnippets.value.length).toBe(1);
		if (Array.isArray(filteredSnippets.value)) {
			expect(filteredSnippets.value[0].title).toBe("Component 3");
		}
	});
});
