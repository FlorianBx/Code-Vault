import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";

vi.mock("../../composables/useFilterSnippet", () => {
  return {
    searchQuery: ref(""),
  };
});

describe("SearchBar", () => {
  test("should update the searchQuery ref on input", async () => {
    const { searchQuery } = await import("../../composables/useFilter");

    const wrapper = mount(SearchBar);
    const input = wrapper.find('[data-testid="input-data-testid"]');
    await input.setValue("test");
    expect(searchQuery.value).toBe("test");
    expect((input.element as HTMLInputElement).value).toBe("test");
  });
});
