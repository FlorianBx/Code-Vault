<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useGetSnippets } from "../composables/useGetSnippets.ts";
import useFilter from "../composables/useFilter";
// import SearchBar from "../components/SearchBar.vue";
import CardSnippet from "../components/CardSnippet.vue";
import CardSnippetV2 from "../components/CardSnippetV2.vue";
import CardSnippetV3 from "../components/CardSnippetV3.vue";
import CardSnippetV4 from "../components/CardSnippetV4.vue";
import LoadingCircle from "../components/LoadingCircle.vue";

const { snippets, fetchSnippets, isLoading, error } = useGetSnippets();
const { filteredSnippets } = useFilter(snippets);

const showCardOrList = ref(4);

const toggleShowCardOrList = () => {
  if (showCardOrList.value === 4) {
    showCardOrList.value = 0;
  }
  showCardOrList.value = showCardOrList.value += 1;
  console.log(showCardOrList.value);
};

const myNumberAsString = computed(() => {
  return showCardOrList.value.toString();
});

onMounted(async () => {
  await fetchSnippets();
});
</script>

<template>
  <div v-show="error" class="text-red-300">{{ error }}</div>
  <div class="w-full justify-center">
    <div class="flex justify-center w-full pb-6">
      <button
        class="absolute top-10 right-5 text-sm font-medium py-4 px-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        @click="toggleShowCardOrList"
      >
        DESIGN {{ myNumberAsString }}
      </button>
      <!-- <SearchBar /> -->
    </div>
    <Teleport to="#modal-and-loader">
      <div v-show="isLoading" class="flex justify-center w-full blur-none">
        <LoadingCircle />
      </div>
    </Teleport>
    <!-- <section
      class="pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8"
    > -->
    <section
      v-show="showCardOrList === 1"
      class="pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 gap-y-8"
    >
      <div
        v-for="snippet in filteredSnippets"
        :key="snippet.id"
        class="py-3 w-full"
      >
        <CardSnippet
          :id="snippet.id"
          :title="snippet.title"
          :description="snippet.description"
          :code="snippet.code"
          :tags="snippet.tags"
          :created-at="snippet.createdAt"
          :updated-at="snippet.updatedAt"
        />
      </div>
    </section>
    <section
      v-show="showCardOrList === 2"
      class="pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8"
    >
      <div
        v-for="snippet in filteredSnippets"
        :key="snippet.id"
        class="py-3 w-full"
      >
        <div>
          <CardSnippetV3
            :id="snippet.id"
            :title="snippet.title"
            :description="snippet.description"
            :tags="snippet.tags"
            :created-at="snippet.createdAt"
            :updated-at="snippet.updatedAt"
          />
        </div>
      </div>
    </section>
    <section
      v-show="showCardOrList === 3"
      class="pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 gap-y-8"
    >
      <div
        v-for="snippet in filteredSnippets"
        :key="snippet.id"
        class="py-3 w-full"
      >
        <div>
          <CardSnippetV2
            :id="snippet.id"
            :title="snippet.title"
            :description="snippet.description"
            :tags="snippet.tags"
            :created-at="snippet.createdAt"
            :updated-at="snippet.updatedAt"
          />
        </div>
      </div>
    </section>
    <section
      v-show="showCardOrList === 4"
      class="space-y-8 px-2 divide-y divide-btn/25"
    >
      <div v-for="snippet in filteredSnippets" :key="snippet.id" class="w-full">
        <div>
          <CardSnippetV4
            :id="snippet.id"
            :title="snippet.title"
            :description="snippet.description"
            :code="snippet.code"
            :tags="snippet.tags"
            :language="snippet.language.toLocaleLowerCase()"
            :created-at="snippet.createdAt"
            :updated-at="snippet.updatedAt"
          />
        </div>
      </div>
    </section>
  </div>
</template>
