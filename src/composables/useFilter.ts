import { ref, Ref, computed } from "vue";

interface DataItem {
  id: string;
  name: string;
  code: string;
  createdAt: string;
  lastUpdate: string;
  tag: string;
  like: number;
  description: string;
}

export const searchQuery = ref("");

export default function useFilter(data: Ref<DataItem[]>) {
  const filteredSnippets = computed(() => {
    if (!searchQuery.value) {
      return data.value;
    }
    return data.value.filter((item: DataItem) => {
      return (
        item.tag.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
  });

  return { searchQuery, filteredSnippets };
}
