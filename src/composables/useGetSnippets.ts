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

	const convertTimestampToString = (
		timestamp: { seconds: number; nanoseconds: number } | string,
	): string => {
		let date: Date;
		if (typeof timestamp === "string") {
			date = new Date(timestamp);
		} else {
			date = new Date(
				timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000,
			);
		}
		return date.toISOString();
	};

	const fetchSnippets = async () => {
		isLoading.value = true;
		error.value = null;
		try {
			const querySnapshot = await getDocs(collection(db, "snippets"));
			snippets.value = querySnapshot.docs.map((doc) => {
				const data = doc.data() as Snippet;
				if (data.updatedAt && data.createdAt) {
					data.createdAt = convertTimestampToString(data.createdAt);
					data.updatedAt = convertTimestampToString(data.updatedAt);
				}
				return { ...data, id: doc.id };
			});
		} catch (err) {
			error.value = (err as Error).message ?? "Could not fetch the snippets.";
		} finally {
			isLoading.value = false;
		}
	};

	const fetchSnippetById = async (id: string) => {
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
