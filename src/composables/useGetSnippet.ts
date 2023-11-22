// useSnippets.ts
import { ref, onMounted, Ref } from "vue";
import { db } from "../services/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { Snippet } from "../utils/types/snippet.ts";

export function useGetSnippets() {
  const snippets: Ref<Snippet[]> = ref([]);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  const fetchSnippets = async () => {
    isLoading.value = true;
    // error.value = null;
    try {
      const querySnapshot = await getDocs(collection(db, "snippets"));
      snippets.value = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Snippet),
      }));
    } catch (err) {
      error.value = (err as string) ?? "Could not fetch the snippets.";
      isLoading.value = false;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchSnippets);

  return { snippets, isLoading, error };
}
