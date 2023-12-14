import { describe, it, expect } from "vitest";
import { useFormData } from "../useFormData";

describe("useFormData", () => {
	it("initializes formData correctly", () => {
		const initialValues = { name: "John", age: "30" };
		const { formData } = useFormData(initialValues);

		expect(formData.name).toBe("John");
		expect(formData.age).toBe("30");
	});

	it("updates formData correctly", () => {
		const initialValues = { name: "John", age: "30" };
		const { formData, handleUpdateData } = useFormData(initialValues);

		handleUpdateData("Jane", "name");
		handleUpdateData("35", "age");
		handleUpdateData("test", "name");

		expect(formData.name).toBe("test");
		expect(formData.age).toBe("35");
	});
});
