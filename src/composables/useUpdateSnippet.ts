import { ref } from "vue";
import { db } from "../services/firebase/firebase.config";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { Snippet } from "../utils/types/snippet";

export function useUpdateSnippet() {
  const error = ref<string | null>(null);
  const isUpdating = ref(false);

  const updateSnippet = async (snippetData: Snippet): Promise<void> => {
    try {
      isUpdating.value = true;
      const snippetId = snippetData.id;
      if (!snippetId) {
        throw new Error("Snippet ID is missing.");
      }

      const fullSnippetData = {
        ...snippetData,
        updatedAt: serverTimestamp(),
      };

      const snippetDocRef = doc(db, "snippets", snippetId);
      await updateDoc(snippetDocRef, fullSnippetData);
      error.value = null;
    } catch (e) {
      error.value =
        e instanceof Error ? e.message : "Could not update the snippet.";
    } finally {
      isUpdating.value = false;
    }
  };

  return {
    error,
    isUpdating,
    updateSnippet,
  };
}
