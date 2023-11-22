<script setup lang="ts">
import Prism from "prismjs";
import { useRouter } from "vue-router";
import { onMounted, reactive, nextTick } from "vue";
import { useAuthStore } from "../store/authStore";
import { useGetSnippets } from "../composables/useGetSnippets";
import { useClipboard } from "@vueuse/core";
import PencilIcon from "../assets/icons/PencilIcon.vue";
import CopyIcon from "../assets/icons/CopyIcon.vue";
import LoadingCircle from "../components/LoadingCircle.vue";
import "../assets/highlight-syntax.css";

const authStore = useAuthStore();
const router = useRouter();
const date = new Date();
const id = router.currentRoute.value.params.id;
const { isLoading, snippet, fetchSnippetById } = useGetSnippets();

const snippetData = reactive({
  id: id as string,
  title: "",
  description: "",
  code: "",
  language: "",
  tags: "",
  createdAt: date.toISOString(),
  updatedAt: date.toISOString(),
  authorId: authStore.idToken,
  visibility: true,
});

const fillSnippetData = () => {
  if (snippet.value) {
    snippetData.title = snippet.value.title;
    snippetData.description = snippet.value.description;
    snippetData.code = snippet.value.code;
    snippetData.language = snippet.value.language;
    snippetData.createdAt = snippet.value.createdAt;
    snippetData.tags = snippet.value.tags;
  }
};

const { copy, copied } = useClipboard();

const handleEdit = () => {
  router.push(`/edit/${id}`);
};

const splitTags = (tags: string) => {
  return tags.split(",");
};

onMounted(async () => {
  await fetchSnippetById(id.toString());
  fillSnippetData();
  await nextTick();
  Prism.highlightAll();
});
</script>

<template>
  <div
    class="flex min-h-full w-full sm:mt-20 flex-1 flex-col items-center justify-center"
  >
    <div class="px-4 max-w-full sm:px-0 sm:mx-auto sm:w-full sm:max-w-[720px]">
      <div
        class="relative bg-background px-6 py-12 sm:rounded-xl sm:px-12 shadow-neumorphic"
      >
        <button
          class="absolute top-6 right-6 text-white opacity-60"
          @click="handleEdit"
        >
          <PencilIcon />
        </button>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h3
            class="pb-11 text-center text-2xl font-bold leading-9 tracking-tight text-primary"
          >
            Snippet: {{ snippetData.title }}
          </h3>
        </div>
        <Teleport to="#modal-and-loader">
          <div v-show="isLoading" class="flex justify-center w-full">
            <LoadingCircle />
          </div>
        </Teleport>
        <form class="space-y-6">
          <div>
            <h3>{{ snippetData.title }}</h3>
          </div>

          <div>
            <h4>{{ snippetData.description }}</h4>
          </div>
          <div>
            <span
              v-for="(tag, index) in splitTags(snippetData.tags)"
              :key="index"
              :class="`p-4 py-1 mb-4 mr-2 rounded-md text-black bg-vue text-xs`"
            >
              {{ tag }}
            </span>
          </div>
          <div>
            <p class="font-bold">{{ snippetData.language }}</p>
          </div>
          <div class="relative">
            <button
              type="button"
              class="absolute top-6 right-8 text-white opacity-60"
              @click="copy(snippetData.code)"
            >
              <CopyIcon />
            </button>
            <div
              v-show="copied"
              class="absolute top-6 left-6 bg-vue px-4 py-1 rounded text-sm"
            >
              Copied
            </div>
            <pre
              class="p-4 text-sm block w-full bg-transparent focus:shadow-inner-neumorphic shadow-light-inner-neumorphic rounded-md border-0 py-3 text-primary ring-0 focus:ring-0 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
            ><code class="language-javascript ">{{ snippetData.code }}</code>
            </pre>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
