// vitest-mocks.d.ts
import "vitest";

declare module "vitest" {
	interface ViFunction {
		mockResolvedValue(value): ViFunction;
		mockRejectedValue(value): ViFunction;
	}
}
