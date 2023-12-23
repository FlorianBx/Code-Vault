import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CardSnippet from "@/components/CardSnippet/CardSnippet.vue";
// import { createRouter, createMemoryHistory } from "vue-router";

vi.mock("prismjs", () => {
	return {
		default: {
			highlightAll: vi.fn(),
		},
	};
});

describe("CardSnippet", () => {
	it("should render the title correctly", () => {
		const snippet = {
			id: "123",
			title: "name",
			authorName: "author",
			description: "a description",
			code: 'console.log("Hello, world!");',
			language: "javascript",
			tags: "JavaScript, TypeScript",
		};
		const wrapper = mount(CardSnippet, {
			props: {
				snippet,
			},
		});

		expect(wrapper.text()).toContain("name");
	});
});
