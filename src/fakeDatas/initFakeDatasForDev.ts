import { useRegister } from "@/composables/useRegister";
import { useCreateSnippet } from "@/composables/useCreateSnippet";
import { fakeSnippets } from "@/fakeDatas/fakeSnippets";
import { checkIfSnippetsExist } from "@/fakeDatas/checkIfSnippetsExist.ts";

export async function initFakeDatasForDev(): Promise<void> {
	const { registerWithEmailAndPassword } = useRegister();
	const { createSnippet } = useCreateSnippet();
	const userData = {
		email: "test@example.com",
		username: "testuser",
		password: "testpassword",
	};

	const snippetsExist = await checkIfSnippetsExist();
	if (!snippetsExist) {
		const userCredential = await registerWithEmailAndPassword(userData);
		if (!userCredential) {
			console.error("Failed to register");
			return;
		}
		for (const snippetData of fakeSnippets) {
			await createSnippet(snippetData);
		}
	}
}
