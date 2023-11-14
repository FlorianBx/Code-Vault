<script setup lang="ts">
import { ref } from "vue";
import CardSnippet from "../../components/CardSnippet/CardSnippet.vue";
import SearchBar from "../../components/SearchBar/SearchBar.vue";
import LayoutSlot from "../../components/LayoutSlot/LayoutSlot.vue";
import datas from "../../fakeDatas/data.json";
import useFilter from "../../composables/useFilter.js";

const { filteredSnippets } = useFilter(ref(datas));
</script>

<template>
  <div class="mt-10 w-full">
    <div class="flex justify-center">
      <SearchBar />
    </div>
    <LayoutSlot>
      <section
        class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div v-for="snippet in filteredSnippets" :key="snippet.code">
          <CardSnippet
            :code="snippet.code"
            :name="snippet.name"
            :description="snippet.description"
            :href="snippet.href"
          />
        </div>
      </section>
    </LayoutSlot>
  </div>
</template>
