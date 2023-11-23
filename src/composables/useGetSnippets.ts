// useSnippets.ts
import { ref, Ref } from "vue";
import { db } from "../services/firebase/firebase.config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Snippet } from "../utils/types/snippet";

export function useGetSnippets() {
  const snippets: Ref<Snippet[]> = ref([]);
  const snippet: Ref<Snippet | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  const fetchSnippets = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const querySnapshot = await getDocs(collection(db, "snippets"));
      snippets.value = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Snippet),
        id: doc.id,
      }));
    } catch (err) {
      error.value = (err as Error).message ?? "Could not fetch the snippets.";
    } finally {
      isLoading.value = false;
    }
  };

  const fetchSnippetById = async (id: string) => {
    console.log(id);
    isLoading.value = true;
    error.value = null;
    try {
      const docRef = doc(db, "snippets", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        snippet.value = { ...(docSnap.data() as Snippet) };
      } else {
        throw new Error("Snippet not found");
      }
    } catch (err) {
      error.value = (err as Error).message ?? "Could not fetch the snippet.";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    snippets,
    snippet,
    fetchSnippets,
    fetchSnippetById,
    isLoading,
    error,
  };
}
