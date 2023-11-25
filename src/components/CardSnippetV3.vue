<script setup lang="ts">
import { RouterLink } from "vue-router";
import Prism from "prismjs";
import "../assets/highlight-syntax.css";
import { onMounted } from "vue";

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
  tags: {
    type: String,
    default: "",
  },
});

const authorId = "Florian";

const splitTags = (tags: string) => {
  return tags.split(",");
};

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="relative w-64 rounded-lg">
    <div class="relative h-96 overflow-hidden rounded-lg p-4 shadow-neumorphic">
      <!-- Titre -->
      <h2 class="text-2xl font-bold mt-4 mb-2 line-clamp-1">{{ title }}</h2>

      <!-- Description -->
      <p class="text-lg text-gray-600 mt-4 mb-2 line-clamp-4">
        {{ description }}
      </p>

      <section class="absolute bottom-20">
        <!-- Tag -->
        <div class="flex space-x-2 mb-2">
          <div
            v-for="(tag, index) in splitTags(tags)"
            :key="index"
            class="text-xs text-gray-800 rounded-md line-clamp-1"
          >
            <p v-if="index < 3" class="px-2 py-1 bg-vue">
              {{ tag }}
            </p>
            <p v-else class="hidden">{{ tag }}</p>
          </div>
        </div>
        <!-- AuthorId (remplacer par le nom de l'auteur plus tard) -->
        <p class="text-sm text-gray-500 mb-2">@{{ authorId }}</p>
      </section>

      <!-- Bouton "Show" -->
      <section class="absolute bottom-4 left-4 right-4">
        <router-link
          :to="`/snippet/${id}`"
          class="relative font-semibold text-sm transition-color duration-300 bg-background hover:bg-secondary hover:text-darktext text-center block w-full rounded-md border-0 shadow-light-inner-neumorphic py-3 text-primary sm:leading-6"
        >
          show
          <span class="sr-only">, {{ title }}</span>
        </router-link>
      </section>

      <!-- <div
        aria-hidden="true"
        class="z-10 absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background opacity-50"
      /> -->
    </div>
  </div>
</template>
