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
  <div class="sm:mt-10 w-full">
    <LayoutSlot>
      <div class="flex justify-center w-full">
        <SearchBar />
      </div>
      <section
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8"
      >
        <div v-for="snippet in filteredSnippets" :key="snippet.code">
          <CardSnippet
            :code="snippet.code"
            :name="snippet.name"
            :description="snippet.description"
            :href="snippet.href"
            :tag="snippet.tag"
          />
        </div>
      </section>
    </LayoutSlot>
  </div>
</template>
