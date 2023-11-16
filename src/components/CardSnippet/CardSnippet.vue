<script setup lang="ts">
import { RouterLink } from "vue-router";
import Prism from "prismjs";
import "../../assets/highlight-syntax.css";
import { onMounted } from "vue";

defineProps({
  id: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div>
    <div class="relative w-64 rounded-lg animate-fadeIn">
      <div
        class="relative h-96 overflow-hidden rounded-lg p-4 shadow-neumorphic"
      >
        <div>
          <div
            class="h-52 w-full text-sm shadow-light-inner-neumorphic py-4 rounded-lg"
          >
            <pre
              class="p-2 text-xs overflow-hidden"
            ><code class="language-javascript">{{ code }}</code></pre>
          </div>
        </div>
        <div class="relative mt-4">
          <h3 class="text-sm font-bold text-gray-300">
            {{ tag }}
          </h3>
        </div>
        <div
          class="absolute inset-x-0 top-0 flex h-96 items-end justify-end overflow-hidden rounded-lg p-4"
        >
          <div
            aria-hidden="true"
            class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background opacity-50"
          />
          <p
            class="absolute text-lg left-2 bottom-20 px-2 font-semibold text-white"
          >
            {{ name }}
          </p>
        </div>
        <div class="absolute bottom-0 right-0 left-0 p-4">
          <router-link
            :to="`/snippet/${id}`"
            class="relative font-semibold text-sm transition-color duration-300 bg-background hover:bg-secondary hover:text-darktext text-center block w-full rounded-md border-0 shadow-light-inner-neumorphic py-3 text-primary sm:leading-6"
          >
            show
            <span class="sr-only">, {{ name }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
