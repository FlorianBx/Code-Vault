import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import DeleteModal from "../DeleteModal.vue";

describe("DeleteModal.vue", () => {
	it.skip("should render the modal", () => {
		const wrapper = mount(DeleteModal);
		expect(wrapper.html()).toContain("Delete");
	});
});
