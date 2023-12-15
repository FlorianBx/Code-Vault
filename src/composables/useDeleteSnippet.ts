import { ref } from "vue";
import { db } from "../services/firebase/firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

export function useDeleteSnippet() {
	const error = ref<string | null>(null);
	const isDeleting = ref(false);

	const deleteSnippet = async (snippetId: string): Promise<void> => {
		try {
			isDeleting.value = true;
			const snippetDocRef = doc(db, "snippets", snippetId);
			await deleteDoc(snippetDocRef);
			console.log("Snippet deleted successfully.");
			error.value = null;
		} catch (e) {
			error.value =
				e instanceof Error ? e.message : "Could not delete the snippet.";
		} finally {
			isDeleting.value = false;
		}
	};

	return {
		error,
		isDeleting,
		deleteSnippet,
	};
}
