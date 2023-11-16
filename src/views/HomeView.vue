<script setup lang="ts">
import { ref } from "vue";
import CardSnippet from "../components/CardSnippet.vue";
import SearchBar from "../components/SearchBar.vue";
import LayoutSlot from "../components/LayoutSlot.vue";
import datas from "../fakeDatas/data.json";
import useFilter from "../composables/useFilter";

const { filteredSnippets } = useFilter(ref(datas));
</script>

<template>
  <div class="w-full">
    <LayoutSlot>
      <div class="flex justify-center w-full pb-6">
        <SearchBar />
      </div>
      <section
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8"
      >
        <div v-for="snippet in filteredSnippets" :key="snippet.code">
          <CardSnippet
            :id="snippet.id"
            :code="snippet.code"
            :name="snippet.name"
            :description="snippet.description"
            :tag="snippet.tag"
          />
        </div>
      </section>
    </LayoutSlot>
  </div>
</template>
