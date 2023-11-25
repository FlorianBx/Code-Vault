<script setup lang="ts">
import { RouterLink } from "vue-router";
import Prism from "prismjs";
import "../assets/highlight-syntax.css";
import { onMounted } from "vue";
// import { Timestamp } from "firebase/firestore";

defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
  tags: {
    type: String,
    default: "",
  },
  createdAt: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: String,
    default: "",
  },
});

const splitTags = (tags: string) => {
  return tags.split(",");
};

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="relative rounded-lg w-full">
    <div class="h-60 overflow-hidden rounded-lg p-4 shadow-neumorphic">
      <p class="text-2xl left-2 px-2 font-semibold text-white">
        {{ title }}
      </p>
      <!-- <p>{{  }}</p> -->
      <div class="relative mt-4">
        <div class="text-sm font-bold text-gray-300">
          <span
            v-for="(tag, index) in splitTags(tags)"
            :key="index"
            :class="`p-1.5 py-1 mb-4 mr-1 rounded-md text-gray-800 bg-vue text-xs overflow-hidden`"
          >
            {{ tag }}
          </span>
        </div>
        <p class="mt-4 line-clamp-2">{{ description }}</p>
      </div>
      <div
        class="absolute inset-x-0 top-0 flex h-96 items-end justify-end overflow-hidden rounded-lg p-4"
      >
        <div
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background opacity-50"
        />
      </div>
      <div class="absolute bottom-0 right-0 w-44 p-4">
        <router-link
          :to="`/snippet/${id}`"
          class="relative font-semibold text-sm transition-color duration-300 bg-background hover:bg-secondary hover:text-darktext text-center block w-full rounded-md border-0 shadow-light-inner-neumorphic py-3 text-primary sm:leading-6"
        >
          show
          <span class="sr-only">, {{ title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
