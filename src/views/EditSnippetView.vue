<script setup lang="ts">
import { onMounted, reactive } from "vue";
import InputForText from "../components/InputForText.vue";
import InputForRichText from "../components/InputForRichText.vue";
import { useAuthStore } from "../store/authStore";
import { useUpdateSnippet } from "../composables/useUpdateSnippet";
import { useGetSnippets } from "../composables/useGetSnippets";
import CrossIcon from "../assets/icons/CrossIcon.vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const date = new Date();
const id = router.currentRoute.value.params.id;
const { snippet, fetchSnippetById } = useGetSnippets();

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

const { updateSnippet } = useUpdateSnippet();

const handleSubmit = (event: Event) => {
  event.preventDefault();
  updateSnippet(snippetData);
  router.push(`/snippet/${id}`);
};

const pushBack = () => {
  router.push(`/snippet/${id}`);
};

onMounted(async () => {
  if (!authStore.isLoggedIn) {
    router.push("/login");
  }
  await fetchSnippetById(id.toString());
  fillSnippetData();
});
</script>

<template>
  <div class="flex min-h-full w-full flex-col items-center justify-center">
    <div class="max-w-full px-4 sm:w-full sm:max-w-3xl">
      <div
        class="relative bg-background px-6 py-12 sm:rounded-xl sm:px-12 shadow-neumorphic"
      >
        <button
          class="absolute top-6 right-6 text-danger opacity-60"
          @click="pushBack"
        >
          <CrossIcon />
        </button>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h3
            class="pb-11 text-center text-2xl font-bold leading-9 tracking-tight text-primary"
          >
            EDIT Snippet: {{ snippetData.title }}
          </h3>
        </div>
        <form class="space-y-6">
          <div>
            <InputForText v-model="snippetData.title" label="Title" required />
          </div>

          <div>
            <InputForText
              v-model="snippetData.description"
              label="Description"
            />
          </div>
          <div>
            <InputForText v-model="snippetData.tags" label="Tag" required />
          </div>
          <div>
            <InputForText
              v-model="snippetData.language"
              label="Language"
              required
            />
          </div>
          <div>
            <InputForRichText
              v-model="snippetData.code"
              label="Code"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center text-base rounded-md shadow-neumorphic hover:shadow-inner-neumorphic bg-button px-3 py-3 font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              @click="handleSubmit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
