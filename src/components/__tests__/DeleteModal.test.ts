import { describe, expect, it, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import DeleteModal from "../Modals/DeleteModal.vue";

describe("DeleteModal.vue", () => {
	let wrapper: VueWrapper;

	beforeEach(async (): Promise<void> => {
		wrapper = mount(DeleteModal);
	});

	it("should render the modal", () => {
		expect(wrapper.html()).toContain("Delete");
	});

	it("should emit an event when the delete button is clicked", async (): Promise<void> => {
		const deleteBtn = wrapper.find('[data-testid="delete-btn"]');
		await deleteBtn.trigger("click");
		expect(wrapper.emitted()).toHaveProperty("delete");
	});

	it("should emit an event when the cancel button is clicked", async (): Promise<void> => {
		const cancelBtn = wrapper.find('[data-testid="cancel-btn"]');
		await cancelBtn.trigger("click");
		expect(wrapper.emitted()).toHaveProperty("cancel");
	});
});
