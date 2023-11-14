import { ref, Ref, computed } from "vue";
import datas from "../fakeDatas/data.json";

interface DataItem {
  name: string;
  code: string;
  createdAt: string;
  lastUpdate: string;
  tag: string;
  like: number;
  href: string;
  description: string;
}

export const searchQuery = ref("");

export default function useFilter(data: Ref<DataItem[]>) {
  const filteredSnippets = computed(() => {
    if (!searchQuery.value) {
      return datas;
    }
    return data.value.filter((item: DataItem) => {
      return (
        item.tag.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
  });

  return { searchQuery, filteredSnippets };
}
