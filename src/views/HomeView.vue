<script setup lang="ts">
import { onMounted } from "vue";
import CardSnippet from "../components/CardSnippet.vue";
import SearchBar from "../components/SearchBar.vue";
import LayoutSlot from "../components/LayoutSlot.vue";
import useFilter from "../composables/useFilter";
import { useGetSnippets } from "../composables/useGetSnippets.ts";

const { snippets, fetchSnippets, isLoading, error } = useGetSnippets();
const { filteredSnippets } = useFilter(snippets);

onMounted(() => {
  fetchSnippets();
});
</script>

<template>
  <div v-show="isLoading">Loading...</div>
  <div v-show="error" class="text-red-300">{{ error }}</div>
  <div class="w-full">
    <LayoutSlot>
      <div class="flex justify-center w-full pb-6">
        <SearchBar />
      </div>
      <section
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8"
      >
        <div v-for="snippet in filteredSnippets" :key="snippet.id">
          <CardSnippet
            :id="snippet.id"
            :code="snippet.code"
            :title="snippet.title"
            :description="snippet.description"
            :tag="snippet.tags"
          />
        </div>
      </section>
    </LayoutSlot>
  </div>
</template>
