import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";

vi.mock("prismjs", () => {
  return {
    default: {
      highlightAll: vi.fn(),
    },
  };
});

describe("CardSnippet", () => {
  it("should be render", async () => {
    const CardSnippet = (await import("@/components/CardSnippet.vue")).default;

    const router = createRouter({
      history: createMemoryHistory(),
      routes: [],
    });

    const wrapper = mount(CardSnippet, {
      props: {
        id: "123",
        description: "a description",
        name: "name",
        code: 'console.log("Hello, world!");',
        tag: "JavaScript",
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.text()).toContain("name");
    expect(wrapper.text()).toContain("JavaScript");
    expect(wrapper.text()).toContain('console.log("Hello, world!");');
  });
});
