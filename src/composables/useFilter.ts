import { ref, Ref, computed } from "vue";

interface DataItem {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  tags: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  visibility: boolean;
}

export const searchQuery = ref("");

export default function useFilter(data: Ref<DataItem[]>) {
  const filteredSnippets = computed(() => {
    if (!searchQuery.value) {
      return data.value;
    }
    return data.value.filter((item: DataItem) => {
      return (
        item.tags.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
  });

  return { searchQuery, filteredSnippets };
}
