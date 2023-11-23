<script setup lang="ts">
import { reactive } from "vue";
import InputForText from "../components/InputForText.vue";
import InputForRichText from "../components/InputForRichText.vue";
import { useAuthStore } from "../store/authStore";
import { useCreateSnippet } from "../composables/useCreateSnippet";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const date = new Date();

const snippetData = reactive({
  id: uuidv4(),
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

const { createSnippet } = useCreateSnippet();

const handleSubmit = (event: Event) => {
  event.preventDefault();
  createSnippet(snippetData);
  router.push("/");
};
</script>

<template>
  <div class="flex min-h-full sm:mt-20 flex-1 flex-col justify-center">
    <div class="px-4 sm:px-0 sm:mx-auto sm:w-full sm:max-w-[720px]">
      <div
        class="bg-background px-6 py-12 sm:rounded-xl sm:px-12 shadow-neumorphic"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h3
            class="pb-11 text-center text-2xl font-bold leading-9 tracking-tight text-primary"
          >
            Create Snippet
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
