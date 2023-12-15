import { ref, Ref, computed } from "vue";
import { Snippet } from "../utils/types/snippet";

export const searchQuery = ref("");

export default function useFilter(data: Ref<Snippet[]>) {
	const filteredSnippets = computed(() => {
		if (!searchQuery.value) {
			return data.value;
		}
		return data.value.filter((item: Snippet) => {
			return (
				item.tags.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
			);
		});
	});

	return { searchQuery, filteredSnippets };
}
