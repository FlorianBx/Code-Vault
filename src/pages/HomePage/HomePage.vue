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
  <div class="mt-32 max-w-full sm:mt-10">
    <LayoutSlot>
      <SearchBar />
      <section
        class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
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
