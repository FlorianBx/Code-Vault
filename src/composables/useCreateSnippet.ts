import { ref } from "vue";
import { db } from "../services/firebase/firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Snippet } from "../utils/types/snippet";

export function useCreateSnippet() {
	const error = ref<string | null>(null);
	const isCreating = ref(false);

	const createSnippet = async (snippetData: Snippet): Promise<void> => {
		try {
			isCreating.value = true;
			const fullSnippetData = {
				...snippetData,
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			};
			const docRef = await addDoc(collection(db, "snippets"), fullSnippetData);
			console.log("Document written with ID: ", docRef.id);
			error.value = null;
		} catch (e) {
			error.value =
				e instanceof Error ? e.message : "Could not create the snippet.";
		} finally {
			isCreating.value = false;
		}
	};

	return {
		error,
		isCreating,
		createSnippet,
	};
}
