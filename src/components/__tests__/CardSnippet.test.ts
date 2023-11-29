import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CardSnippet from "../CardSnippet.vue";
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
    const wrapper = mount(CardSnippet, {
      props: {
        id: "123",
        code: 'console.log("Hello, world!");',
        title: "name",
        description: "a description",
        tags: "JavaScript",
      },
    });

    expect(wrapper.text()).toContain("name");
  });
});
